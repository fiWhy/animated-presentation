import { styled } from 'theme';
import { PropsWithChildren } from 'react';

type TerminalProps = PropsWithChildren<{
    width?: string;
    height?: string;
}>;
type ToolBarProps = PropsWithChildren<{}>;
type LeftPartProps = PropsWithChildren<{}>;
type RightPartProps = PropsWithChildren<{}>;
type TerminalBodyProps = PropsWithChildren<{
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

export default styled.div<TerminalProps> `
    &&& {
        font-family: Arial;
        position: relative;
        font-size: 14px;
        width: 600px;
        box-shadow: 0 0 30px 10px rgba(black, .4);
        border-radius: 5px;
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


export const StyledTerminalBody = styled.div<TerminalBodyProps>`
    min-height: 320px;
    padding: 5px 10px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    font-family: Monaco, Helvetica, Arial, sans-serif;
    font-size: 10px;
    color: white;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
    overflow-y: scroll;
    cursor: text;
    background-color: ${props => props.background || 'rgba(0, 0, 0, 0.85);'}
`;

export const Button = styled.div<ButtonProps>`
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


export const StyledTerminalInput = styled.form`
    position: relative;
    display: inline-block;
    width: 90%;
    
    input {
        position: relative;
        display: inline-block;
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
        color: white;
        font-family: inherit;
        outline: none;
        overflow: auto;
        box-shadow: none;
        height: 100%;
  }
`;

export const StyledCommand = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
`;

export const StyledDir = styled.span`
  color: #3CBBC6;
  font-weight: bold;
  margin-right: 8px;
  
  &:before {
    content: '➜';
    color: #3BBB33;
    margin-right: 10px;
  }
`;