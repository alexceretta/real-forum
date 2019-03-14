import * as types from './types'
import * as Auth from '../../../Auth/Auth'

const authReducer = (
    state = {
        isAuthenticated: Auth.isAuthenticated(),
        isFetching: false,
        error: null
    }, action
) => {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
};

export default authReducer;