import React, { Dispatch, Props } from 'react'
// import Card from 'components/card'
import Slide from 'components/slide'
import { Terminal, Command, OutputCommand, CLIUtils } from 'components/terminal'
import { connect } from 'react-redux';
import { AppState } from 'store';
import { ContentWindowsState, ContentWindowState, ContentWindowDescription } from 'store/content-windows/types';
import { openWindow, bringWindowForward } from 'store/content-windows/actions';
import { ContentWindow } from 'components/content-window';
import { ContentWindowModel } from 'store/content-windows/models';


type IntroductionState = {
    commandHistory: Command[];
    terminalActive: boolean;
    position: string;
    presentationSlides: boolean;
}

type IntroductionProps = {
    windows: ContentWindowsState,
    bringForward: (sym: Symbol) => void;
    openWindow: (window: ContentWindowDescription) => void;
}

class Introduction extends React.Component<IntroductionProps, IntroductionState> {
    commands: CLIUtils = {
        animation: async (type: string) => {
            const { openWindow } = this.props;
            openWindow(new ContentWindowModel('Animation example' + type));
            return type;
        },
        alert: async () => {
            alert('Hello!');
            return '';
        }
    }

    state = {
        commandHistory: [],
        terminalActive: true,
        position: '',
        presentationSlides: false
    }

    handleCommand(command: OutputCommand) {
        console.log(command);
    }

    handlePositionChange(position: string) {
        this.setState({
            position
        })
    }

    bringForward(sym: Symbol) {
        const { bringForward } = this.props;
        bringForward(sym);
    }


    render() {
        const { terminalActive, position } = this.state;
        const { windows } = this.props;
        console.log(windows);
        return (
            <Slide>
                {windows.windows.map((w, index) =>
                    <ContentWindow
                        onClick={() => this.bringForward(w.sym)}
                        position={index}
                        sym={w.sym}
                        key={index}
                        title={w.title}>
                        {w.title}
                    </ContentWindow>
                )}
                <ContentWindow
                    position={1}
                    title={position}
                    sym={Symbol()}>
                    <Terminal
                        onPositionChange={position => this.handlePositionChange(position)}
                        cliUtils={this.commands}
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

const mapStateToProps = (state: AppState) => ({
    windows: state.windows
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    openWindow: (contentWindow: ContentWindowDescription) => dispatch(openWindow(contentWindow)),
    bringForward: (sym: Symbol) => dispatch(bringWindowForward(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);