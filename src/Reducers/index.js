import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import boardReducer from './boardReducer';
import threadReducer from './threadReducer';

export const Reducers = combineReducers({
    authState: authReducer,
    boardState: boardReducer,
    threadState: threadReducer,
});