import React, { FormEvent } from 'react';
import { StyledTerminalInput, StyledCommand, StyledDir } from './styled';
import { prefixFormat, Command } from './contracts';

type TerminalInputProps = {
    user: string;
    machine: string;
    position: string;
    owner: string;
    onEnter?: (command: Command) => void;
}

type TerminalInputState = {
    value: string;
}

export default class TerminalInput extends React.Component<TerminalInputProps, TerminalInputState> {
    state = {
        value: ''
    }

    get prefix() {
        const { owner, machine, position, user } = this.props;
        return prefixFormat(owner, machine, position, user);
    }

    handleSubmit(evt: FormEvent) {
        const { onEnter } = this.props;
        const listOfContent = this.state.value.split(' ');
        evt.preventDefault();
        onEnter && onEnter({
            prefix: this.prefix,
            emit: true,
            command: listOfContent.splice(0, 1)[0].trim(),
            args: listOfContent
        });
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
                <StyledDir>{this.prefix}</StyledDir>
                <StyledTerminalInput onSubmit={evt => this.handleSubmit(evt)} >
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={(evt) => this.setValue(evt.target.value)} />
                </StyledTerminalInput>
            </StyledCommand>
        )
    }
}