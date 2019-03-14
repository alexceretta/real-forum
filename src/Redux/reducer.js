import { combineReducers } from 'redux';

import authReducer from './Modules/Auth'

export default combineReducers({
    auth: authReducer
});