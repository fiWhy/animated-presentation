import React, { FunctionComponent } from 'react';
import { StyledContentWindow, StyledContentWindowBody } from './styled';
import { ToolBar } from './toolbar';

type ContentWindowProps = {
    title: string;
    buttons?: {
        close: boolean;
        minimize: boolean;
        zoom: boolean;
    }
}

export const ContentWindow: FunctionComponent<ContentWindowProps> = ({ title, children, buttons = {
    close: true,
    minimize: true,
    zoom: true
} }) => {
    return (
        <StyledContentWindow>
            <ToolBar buttons={buttons}>
                {title}
            </ToolBar>
            <StyledContentWindowBody>
                {children}
            </StyledContentWindowBody>
        </StyledContentWindow>
    )
}