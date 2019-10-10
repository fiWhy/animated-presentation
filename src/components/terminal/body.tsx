import React, { PropsWithChildren } from 'react';
import { StyledTerminalBody, StyledCommand } from './styled';
import TerminalInput from './input';
import { Command } from './contracts/command';

type TerminalBodyProps = PropsWithChildren<{
    user: string;
    machine: string;
    active: boolean;
    position: string;
    owner: string;
    commands: Command[];
    onEnter: (command: Command) => void;
}>;

type TerminalBodyState = {}

export default function TerminalBody(
    { user, machine, commands, onEnter, active, owner, position }: TerminalBodyProps
) {
    return (
        <StyledTerminalBody>
            {commands.map((c, index) => <StyledCommand key={index} className="rule"><p>{c.prefix} {c.command}</p></StyledCommand>)}
            {active ?
                <TerminalInput
                    user={user}
                    position={position}
                    owner={owner}
                    machine={machine}
                    onEnter={onEnter} /> :
                null}
        </StyledTerminalBody>
    )
};

