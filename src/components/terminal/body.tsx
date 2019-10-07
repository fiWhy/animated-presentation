import React from 'react';
import { StyledTerminalBody, StyledCommand } from './styled';
import TerminalInput from './input';
import { Command } from '.';

type TerminalBodyProps = {
    user: string;
    machine: string;
    active: boolean;
    position: string;
    owner: string;
    commands: Command[];
    onEnter: (command: string) => void;
}
type TerminalBodyState = {}

export default class TerminalBody extends React.Component<TerminalBodyProps, TerminalBodyState> {
    state = {}

    render() {
        const { user, machine, commands, onEnter, active } = this.props;
        return (
            <StyledTerminalBody>
                {commands.map((c, index) => <StyledCommand key={index} className="rule"><p>{c.prefix} {c.command}</p></StyledCommand>)}
                {active ? <TerminalInput user={user} machine={machine} onEnter={onEnter} /> : <></>}
            </StyledTerminalBody>
        )
    }
}