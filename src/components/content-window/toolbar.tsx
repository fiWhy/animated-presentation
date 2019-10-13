import React, { forwardRef, PropsWithChildren } from 'react';
import { StyledToolBar, LeftPart, RightPart, StyledTerminalButton } from './styled';

export type ToolbarButtons = {
    zoom: boolean;
    minimize: boolean;
    close: boolean;
}

type ToolbarProps = {
    onClose: () => void;
    onMinimize: () => void;
    onZoom: () => void;
    buttons: ToolbarButtons;
}

export const ToolBar = forwardRef<HTMLDivElement, PropsWithChildren<ToolbarProps>>(({
    children, buttons: { zoom, close, minimize }, onClose, onMinimize, onZoom
}, ref) => (
        <StyledToolBar ref={ref}>
            < LeftPart >
                {close ? <StyledTerminalButton onClick={onClose} type="close" /> : null}
                {minimize ? <StyledTerminalButton onClick={onMinimize} type="minimize" /> : null}
                {zoom ? <StyledTerminalButton onClick={onZoom} type="zoom" /> : null}
            </LeftPart >
            <RightPart>
                {children}
            </RightPart>
        </StyledToolBar >
    ));
