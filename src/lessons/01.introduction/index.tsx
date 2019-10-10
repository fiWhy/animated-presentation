import React from 'react'
// import Card from 'components/card'
import Slide from 'components/slide'
import { Terminal, Command, OutputCommand, CLIUtils } from 'components/terminal'
import { ContentWindow } from 'components/content-window';

const commands: CLIUtils = {
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
    terminalActive: boolean;
    position: string;
}

export default class Introduction extends React.Component<any, IntroductionState> {
    state = {
        commandHistory: [],
        terminalActive: true,
        position: ''
    }

    handleCommand(command: OutputCommand) {
        console.log(command);
    }

    handlePositionChange(position: string) {
        this.setState({
            position
        })
    }


    render() {
        const { terminalActive, position } = this.state;
        return (
            <Slide>
                <ContentWindow title={position}>
                    <Terminal
                        onPositionChange={position => this.handlePositionChange(position)}
                        cliUtils={commands}
                        onEnter={command => this.handleCommand(command)}
                        active={terminalActive}
                        owner="fiwhy"
                        machine="MacBook-Pro"
                        user="dburyachkovsky">Card</Terminal>
                </ContentWindow>
            </Slide>
        )
    }
}
