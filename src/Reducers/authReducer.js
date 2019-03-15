import * as types from '../Actions/types'
import Auth from '../Auth/Auth'

const initState = {
    auth: new Auth(),
    isFetching: false
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            state.auth.login();
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case types.LOGOUT_REQUEST:
            state.auth.logout();
            return {
                ...state
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
            }
        default:
            return state;
    }
};