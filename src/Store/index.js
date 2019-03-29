import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../Reducers';
import ReduxThunk from 'redux-thunk';

export const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));