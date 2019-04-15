import * as types from '../Actions/types'
import Auth from '../Auth/Auth'

const initState = {
    auth: new Auth(),
    isLoading: false,
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            state.auth.login();
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
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
        case types.USER_UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.USER_UPDATE_SUCCESS:
            state.auth.setUserProfile(action.payload);
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};