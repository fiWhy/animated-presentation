import { styled } from 'theme';
import { PropsWithChildren } from 'react';
type ContentWindowProps = PropsWithChildren<{
    width?: string;
    height?: string;
    position: number;
}>;
type ToolBarProps = PropsWithChildren<{}>;
type LeftPartProps = PropsWithChildren<{}>;
type RightPartProps = PropsWithChildren<{}>;
type ContentWindowBodyProps = PropsWithChildren<{
    background?: string;
}>;

type ButtonProps = {
    type: 'close' | 'minimize' | 'zoom'
}

const buttonColors = {
    close: '#FC625C',
    minimize: '#FDC141',
    zoom: '#35CC4b'
}

export const StyledContentWindowBody = styled.div<ContentWindowBodyProps>`
    min-height: 320px;
    background-color: ${props => props.theme.color.light};
    border-radius: 0 0 5px 5px;
`;

export const StyledContentWindow = styled.div<ContentWindowProps> `
    &&& {
        font-family: Arial;
        position: relative;
        font-size: 14px;
        width: 600px;
        box-shadow: 0 0 30px 10px rgba(0,0,0, .4);
        will-transform: transform;
        border-radius: 5px;
        resize: both;
        position: absolute;
        z-index: ${({ position }) => 20 + position}
    }
`;

export const LeftPart = styled.div<LeftPartProps>`
    position: absolute;
`;
export const RightPart = styled.p<RightPartProps>`
    text-align: center;
`;

export const StyledToolBar = styled.div<ToolBarProps>`
    border-radius: 5px 5px 0 0;
    background-color: #f6f6f6;
    color: #2d2d2d;
    padding: 5px 8px;
    border: 1px solid darken(#f6f6f6, 10%);
`;

export const StyledTerminalButton = styled.div<ButtonProps>`
    text-decoration: none;
    width: 10px;
    height: 10px;
    display: inline-block;
    text-align: center;
    margin-right: 10px;
    border-radius: 100%;
    background-color: ${({ type }) => buttonColors[type]};
    border: 1px solid darken(${({ type }) => buttonColors[type]})
`