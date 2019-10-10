import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import { Command, CLIUtils, OutputCommand } from './contracts/command';
import TerminalBody from './body';

type TerminalProps = {
    user: string;
    machine: string;
    owner: string;
    active?: boolean;
    cliUtils: CLIUtils;
    onEnter: (command: OutputCommand) => void;
    onPositionChange: (position: string) => void;
}
type TerminalState = {
    width: number;
    height: number;
    position: string;
    history: Command[];
    inputIsActive: boolean;
}

export default class Terminal extends PureComponent<TerminalProps, TerminalState> {

    state = {
        width: 0,
        height: 0,
        inputIsActive: true,
        position: '~',
        history: [],
    }

    get lastLogin() {
        const { machine } = this.props;
        return `Last login: ${format(new Date(), 'E LLL d HH:mm:ss')} on ${machine}`;
    }

    set inputIsActive(value: boolean) {
        this.setState({
            inputIsActive: value
        })
    }

    componentDidMount() {
        const { onEnter, onPositionChange } = this.props;
        const command = {
            command: this.lastLogin
        };
        onEnter({
            fullString: command.command,
            structure: command
        });
        this.updateCommand([command]);
        onPositionChange(this.state.position);
    }

    async tryCommand(command: string, ...args: string[]) {
        const { cliUtils } = this.props;
        if (cliUtils[command]) {
            return await cliUtils[command](...args);
        } else {
            return `-bash: ${command}: command not found`;
        }
    }

    async handleCommand(command: Command) {
        const { prefix, command: util, emit, args } = command;
        const { onEnter } = this.props;
        this.inputIsActive = false;

        onEnter({
            fullString: `${prefix} ${command}`,
            structure: command
        });

        this.updateCommand([command], async () => {
            const newHistoryAddition = emit ? [{
                command: await this.tryCommand(util, ...(args || []))
            }] : [];

            this.updateCommand(newHistoryAddition, () => {
                this.inputIsActive = true;
            });
        });
    }

    updateCommand(commands: Command[], after?: () => void) {
        this.setState({
            history: [...this.state.history, ...commands]
        }, after);
    }

    render() {
        const { user, machine, owner, active } = this.props;
        const { position, history, inputIsActive } = this.state;
        return (
            <TerminalBody
                commands={history}
                active={(active || true) && inputIsActive}
                onEnter={command => this.handleCommand(command)}
                owner={owner}
                position={position}
                machine={machine}
                user={user} />
        )
    }
} 