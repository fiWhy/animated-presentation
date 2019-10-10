import { styled } from 'theme';
import { PropsWithChildren } from 'react';

type TerminalProps = PropsWithChildren<{
    width?: string;
    height?: string;
}>;

type TerminalBodyProps = PropsWithChildren<{
    background?: string;
}>;


export const StyledTerminal = styled.div<TerminalProps> `
    &&& {
        font-family: Arial;
        position: relative;
        font-size: 14px;
        width: 600px;
        box-shadow: 0 0 30px 10px rgba(black, .4);
        border-radius: 5px;
    }
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


export const StyledTerminalInput = styled.form`
    position: relative;
    display: inline-block;
    // width: 90%;
    
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
//   color: #3CBBC6;
  font-weight: bold;
  margin-right: 8px;
  
//   &:before {
//     content: '➜';
//     color: #3BBB33;
//     margin-right: 10px;
//   }
`;