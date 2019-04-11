import * as types from './types';

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