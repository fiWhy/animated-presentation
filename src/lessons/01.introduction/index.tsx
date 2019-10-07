import React from 'react'
// import Card from 'components/card'
import Slide from 'components/slide'
import Terminal, { Command } from 'components/terminal'

type CommandsList = {
    [command: string]: (atrs: string[]) => Promise<any>;
}
const commands: CommandsList = {
    animation: async () => {
        return 'Yo!';
    },
    alert: async () => {
        alert('Hello!');
        return '';
    }
}

type IntroductionState = {
    commandHistory: Command[];
}

export default class Introduction extends React.Component<any, IntroductionState> {
    state = {
        result: '',
        commandHistory: [],
        terminalActive: true,
    }

    async tryCommand(command: string, ...args: string[]) {
        if (commands[command]) {
            return await commands[command](args);
        } else {
            return `-bash: ${command}: command not found`;
        }
    }

    async handleCommand(command: Command) {
        this.setState({
            ...this.state,
            commandHistory: [...this.state.commandHistory, command].concat(
                command.emit ? {
                    command: await this.tryCommand(command.command, ...(command.arguments || []))
                } : [])
        }, () => { console.log('Command', command); });
    }

    render() {
        const { result, commandHistory, terminalActive } = this.state;
        return (
            <Slide>
                <Terminal
                    onEnter={command => this.handleCommand(command)}
                    history={commandHistory}
                    active={terminalActive}
                    result={result}
                    owner="fiwhy"
                    machine="MacBook-Pro"
                    user="dburyachkovsky">Card</Terminal>
            </Slide>
        )
    }
}
