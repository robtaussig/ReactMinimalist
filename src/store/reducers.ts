import { combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counter';
import { reducer as appReducer } from './app';

const reducers = combineReducers({
    app: appReducer,
    counter: counterReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
