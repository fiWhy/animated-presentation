import React, { FunctionComponent } from 'react';
import { StyledToolBar, LeftPart, RightPart, StyledTerminalButton } from './styled';

type ToolbarProps = {
    buttons: {
        zoom: boolean;
        minimize: boolean;
        close: boolean;
    }
}

export const ToolBar: FunctionComponent<ToolbarProps> = ({
    children, buttons: { zoom, close, minimize }
}) => (
        <StyledToolBar>
            < LeftPart >
                {close ? <StyledTerminalButton type="close" /> : null}
                {minimize ? <StyledTerminalButton type="minimize" /> : null}
                {zoom ? <StyledTerminalButton type="zoom" /> : null}
            </LeftPart >
            <RightPart>
                {children}
            </RightPart>
        </StyledToolBar >
    )