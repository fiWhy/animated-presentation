import React, { PureComponent } from 'react'
import StyledTerminal, { Button } from './styled';
import ToolBar from './toolbar';
import TerminalBody from './body';
import { format } from 'date-fns';

export type Command = {
    arguments?: string[];
    emit?: boolean;
    command: string;
    prefix?: string;
}

type TerminalProps = {
    user: string;
    machine: string;
    owner: string;
    result: string;
    history: Command[];
    active: boolean;
    onEnter: (command: Command) => void;
}
type TerminalState = {
    width: number;
    height: number;
    position: string;
}

export default class Terminal extends PureComponent<TerminalProps, TerminalState> {
    static ToolBar = ToolBar;
    static Button = Button;
    static TerminalBody = TerminalBody;

    state = {
        width: 0,
        height: 0,
        position: '~',
    }

    get lastLogin() {
        const { machine } = this.props;
        return `Last login: ${format(new Date(), 'E LLL d HH:mm:ss')} on ${machine}`;
    }

    componentDidMount() {
        const { onEnter } = this.props;
        onEnter({
            command: this.lastLogin
        });
    }

    handleCommand(text: string) {
        const { user, machine, owner, result, onEnter } = this.props;
        const { position } = this.state
        onEnter({
            prefix: `${owner}s-${machine}:${position} ${user}$`,
            emit: true,
            command: `${text}`
        });
    }

    render() {
        const { user, machine, owner, history, active } = this.props;
        const { position } = this.state;
        return (
            <StyledTerminal>
                <ToolBar >
                    My folder
                </ToolBar>
                <TerminalBody
                    commands={history}
                    active={active}
                    onEnter={command => this.handleCommand(command)}
                    owner={owner}
                    position={position}
                    machine={machine}
                    user={user} />
            </StyledTerminal>
        )
    }
} 