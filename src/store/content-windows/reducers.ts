import { Reducer } from 'redux';
import {
    ContentWindowActionTypes, ContentWindowsState, OPEN_WINDOW,
    CLOSE_WINDOW, MINIMIZE_WINDOW, ZOOM_WINDOW,
    ContentWindowDescription,
    BRING_FORWARD
} from './types';


const defaultState = {
    windows: []
}

const newWindowProps = (windows: ContentWindowDescription[], sym: Symbol, { zoomed, minimized, opened }: { zoomed?: boolean, minimized?: boolean, opened?: boolean }) => {
    const newWindows = [...windows];
    const indexOfChangedElement = newWindows.findIndex(w => w.sym === sym);
    const el = newWindows[indexOfChangedElement];
    newWindows[indexOfChangedElement] = {
        ...el,
        state: {
            zoomed: zoomed || el.state.zoomed,
            opened: opened || el.state.opened,
            minimized: minimized || el.state.minimized

        }
    };

    return newWindows;
}

export const windowsReducer: Reducer<ContentWindowsState, ContentWindowActionTypes> = (state: ContentWindowsState = defaultState, action: ContentWindowActionTypes) => {
    switch (action.type) {
        case (OPEN_WINDOW): {
            return ({
                windows: [...state.windows, action.payload]
            })
        }
        case (CLOSE_WINDOW): {
            return ({
                windows: [...state.windows.filter(w => w.sym !== action.payload)]
            })
        }
        case (MINIMIZE_WINDOW): {
            return {
                windows: newWindowProps([...state.windows], action.payload, {
                    zoomed: false,
                    minimized: true
                })
            }
        }
        case (ZOOM_WINDOW): {
            return {
                windows: newWindowProps([...state.windows], action.payload, {
                    zoomed: true,
                    minimized: false
                })
            }
        }
        case (CLOSE_WINDOW): {
            return {
                windows: newWindowProps([...state.windows], action.payload, {
                    opened: false
                })
            }
        }
        case (BRING_FORWARD): {
            const windows = [...state.windows];
            const index = windows.findIndex(w => w.sym === action.payload);
            console.log('Bring forward', [windows[index], ...windows.slice(0, index), ...windows.slice(index + 1)])
            return {
                windows: [windows[index], ...windows.slice(0, index), ...windows.slice(index + 1)]
            }
        }

        default:
            return state;
    }
}
