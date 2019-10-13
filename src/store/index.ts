import { combineReducers, createStore } from 'redux';
import { windowsReducer } from './content-windows/reducers';

const rootReducer = combineReducers({
    windows: windowsReducer
});

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;