import * as types from './types';
import axios from 'axios';

const serviceUrl = 'http://127.0.0.1:8000';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginError = error => ({
  type: types.LOGIN_ERROR,
  error
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const userCreate = (userData, authProfile) => {
  return (dispatch) => {
    dispatch({ type: types.USER_CREATE_REQUEST });

    userData = { auth0Id: authProfile.sub, ...userData };

    axios.post(`${serviceUrl}/users`, userData).then((response) => {
      dispatch(userCreateSuccess(response.data));
    })
    .catch((error) => {
      dispatch(userCreateError(error));
    });
  };
};

export const userCreateSuccess = (user) => {
  return {
    type: types.USER_CREATE_SUCCESS,
    payload: user
  };
}

export const userCreateError = (error) => {
  return {
    type: types.USER_CREATE_ERROR,
    payload: error
  };
}