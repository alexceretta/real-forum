import { USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_ERROR, 
    USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS, USER_UPDATE_ERROR } from './types';
import axios from 'axios';

const serviceUrl = 'http://127.0.0.1:8000';

export const userCreate = (userData, authProfile) => {
    return (dispatch) => {
        dispatch({
            type: USER_CREATE_REQUEST
        });

        userData = {
            auth0Id: authProfile.sub,
            ...userData
        };

        axios.post(`${serviceUrl}/users`, userData).then((response) => {
            dispatch(userCreateSuccess(response.data));
        })
        .catch((error) => {
            dispatch(userCreateError(error));
        });
    };
};

export const userUpdate = (userData, authProfile) => {

    return (dispatch) => {
        dispatch({
            type: USER_UPDATE_REQUEST
        });

        userData.append('auth0Id', authProfile.sub);
        userData.append('email', authProfile.name);
        let url = '';
        let method = '';

        // Display the key/value pairs
        for (var pair of userData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        // If there's no user ID, it's a new user
        if(!userData.get('id')) {
            method = 'post';
            url = `${serviceUrl}/users`;
        } else {
            method = 'put';
            url = `${serviceUrl}/users/${userData.get('id')}`;
        }

        axios({
            method: method,
            url: url,
            data: userData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then((response) => {
            dispatch(userUpdateSuccess(response.data));
        })
        .catch((error) => {
            dispatch(userUpdateError(error));
        });
    }
}

export const userCreateSuccess = (user) => {
    return {
        type: USER_CREATE_SUCCESS,
        payload: user
    };
}

export const userUpdateSuccess = (user) => {
    return {
        type: USER_UPDATE_SUCCESS,
        payload: user
    };
}

export const userCreateError = (error) => {
    return {
        type: USER_CREATE_ERROR,
        payload: error
    };
}

export const userUpdateError = (error) => {
    return {
        type: USER_UPDATE_ERROR,
        payload: error
    }
}