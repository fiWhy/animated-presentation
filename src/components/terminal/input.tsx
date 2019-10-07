import React, { FormEvent } from 'react';
import { StyledTerminalInput, StyledCommand, StyledDir } from './styled';;

type TerminalInputProps = { user: string; machine: string; onEnter?: (text: string) => void; }
type TerminalInputState = {
    value: string;
}

export default class TerminalInput extends React.Component<TerminalInputProps, TerminalInputState> {
    state = {
        value: ''
    }
    handleSubmit(evt: FormEvent) {
        const { onEnter } = this.props;
        evt.preventDefault();
        onEnter && onEnter(this.state.value);
        this.setState({
            value: ''
        })
    }

    setValue(value: string) {
        this.setState({
            value
        })
    }

    render() {
        return (
            <StyledCommand>
                <StyledDir>~</StyledDir>
                <StyledTerminalInput onSubmit={evt => this.handleSubmit(evt)}>
                    <input type="text" value={this.state.value} onChange={(evt) => this.setValue(evt.target.value)}></input>
                </StyledTerminalInput>
            </StyledCommand >
        )
    }
}