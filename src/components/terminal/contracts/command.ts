export type Command = {
    args?: string[];
    emit?: boolean;
    command: string;
    prefix?: string;
}

export type OutputCommand = {
    fullString: string;
    structure: Command;
}

export type CLIUtils = {
    [name: string]: (...args: string[]) => Promise<string>;
}

export const prefixFormat = (owner: string, machine: string, position: string, user: string) =>
    `${owner}s-${machine}:${position} ${user}$`;