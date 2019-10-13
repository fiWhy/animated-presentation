import React, { PropsWithChildren } from 'react';
import { StyledContentWindow, StyledContentWindowBody } from './styled';
import { ToolBar } from './toolbar';
import { draggable } from 'lib/dom';

type ContentWindowProps = PropsWithChildren<{
    title: string;
    sym: Symbol;
    onClose: () => void;
    onMinimize: () => void;
    onZoom: () => void;
    onClick: () => void;
    position: number;
    size: {
        width: number;
        height: number;
    }
    buttons?: {
        close: boolean;
        minimize: boolean;
        zoom: boolean;
    }
}>

export default class ContentWindow extends React.PureComponent<ContentWindowProps, any> {
    static defaultProps = {
        size: {
            width: 500,
            height: 250
        },
        onClick: () => { },
        onClose: () => { },
        onMinimize: () => { },
        onZoom: () => { }
    }

    draggable?: (x: number, y: number) => void;
    windowRef = React.createRef<HTMLDivElement>();
    toolBarRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        const { innerWidth, innerHeight } = window;
        const wM = innerWidth / 2,
            hM = innerHeight / 2;
        this.draggable = draggable(
            this.windowRef.current as HTMLDivElement,
            this.toolBarRef.current as HTMLDivElement,
            {
                initialX: wM,
                initialY: hM
            }
        );

        this.draggable(wM, hM);

    }

    render() {
        const { title, children, onClick, onClose, onMinimize, onZoom, buttons = {
            close: true,
            minimize: true,
            zoom: true
        }, size, position } = this.props;
        return (
            <StyledContentWindow
                position={position}
                onClick={onClick}
                width={size.width + 'px'}
                height={size.height + 'px'}
                ref={this.windowRef}>
                <ToolBar
                    buttons={buttons}
                    onClose={onClose}
                    onZoom={onZoom}
                    onMinimize={onMinimize}
                    ref={this.toolBarRef}>
                    {title}
                </ToolBar>
                <StyledContentWindowBody>
                    {children}
                </StyledContentWindowBody>
            </StyledContentWindow>
        );
    }
}