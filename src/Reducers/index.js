import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { boardReducer } from './boardReducer';

export const Reducers = combineReducers({
    authState: authReducer,
    boardState: boardReducer,
});