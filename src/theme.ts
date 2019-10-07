import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    margin: '15px',
    color: {
        light: '#cacab8',
        lightBlue: '#19867b',
        darkBlue: '#06695d',
        dark: '#848478'
    }
}

export type GlobalTheme = Theme<typeof theme>;

export type Theme<T> = {
    [Key in keyof T]: T[Key];
}

export type StyledProps<T> = {
    theme: Theme<T>;
}

export const styled = baseStyled as ThemedStyledInterface<Theme<GlobalTheme>>;