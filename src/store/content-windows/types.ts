export interface ContentWindowSize {
    width: number;
    height: number;
}

export interface ContentWindowState {
    opened: boolean;
    zoomed: boolean;
    minimized: boolean;
}

type ContentWindowButtonsState = ContentWindowState;

export interface ContentWindowDescription {
    sym: Symbol;
    title: string;
    state: ContentWindowButtonsState;
    size?: ContentWindowSize;
}

export interface ContentWindowsState {
    windows: ContentWindowDescription[];
}

export const OPEN_WINDOW = 'OPEN_WINDOW';
export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const ZOOM_WINDOW = 'ZOOM_WINDOW';
export const BRING_FORWARD = 'BRING_FORWARD';
export const BRING_BACK = 'BRING_BACK';

interface OpenWindowAction {
    type: typeof OPEN_WINDOW;
    payload: ContentWindowDescription;
}

interface ZoomWindowAction {
    type: typeof ZOOM_WINDOW;
    payload: Symbol;
}

interface MinimizeWindowAction {
    type: typeof MINIMIZE_WINDOW;
    payload: Symbol;
}

interface CloseWindowAction {
    type: typeof CLOSE_WINDOW;
    payload: Symbol;
}

interface BringForwardWindowAction {
    type: typeof BRING_FORWARD;
    payload: Symbol;
}

interface BringBackWindowAction {
    type: typeof BRING_BACK;
    payload: Symbol;
}


export type ContentWindowType = 'slide' | 'terminal' | 'example';


export type ContentWindowActionTypes = OpenWindowAction |
    MinimizeWindowAction |
    CloseWindowAction |
    ZoomWindowAction |
    BringForwardWindowAction |
    BringBackWindowAction;