import { OPEN_WINDOW, CLOSE_WINDOW, ZOOM_WINDOW, MINIMIZE_WINDOW, BRING_FORWARD, BRING_BACK, ContentWindowDescription } from './types';

export const openWindow = (payload: ContentWindowDescription) => ({
    type: OPEN_WINDOW,
    payload
})

export const closeWindow = (payload: Symbol) => ({
    type: CLOSE_WINDOW,
    payload
})

export const zoomWindow = (payload: Symbol) => ({
    type: ZOOM_WINDOW,
    payload
})

export const minimizeWindow = (payload: Symbol) => ({
    type: MINIMIZE_WINDOW,
    payload
})

export const bringWindowForward = (payload: Symbol) => ({
    type: BRING_FORWARD,
    payload
})

export const brongWindowBack = (payload: Symbol) => ({
    type: BRING_BACK,
    payload
})

