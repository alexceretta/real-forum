import auth0 from 'auth0-js';
import axios from 'axios';
import {
    AUTH_CONFIG
} from './auth0-variables';
//import { CssBaseline } from '@material-ui/core';

export default class Auth {

    constructor() {

        this.auth0 = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
            redirectUri: AUTH_CONFIG.callbackUrl,
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.accessToken.bind(this);
        this.getIdToken = this.idToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                console.log(authResult);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.setSession(authResult);
                resolve();
            });
        });
    }

    accessToken() {
        return window.localStorage.getItem('accessToken');
    }

    idToken() {
        return window.localStorage.getItem('idToken');
    }

    expiresAt() {
        return window.localStorage.getItem('expiresAt');
    }

    authProfile() {
        const profile = JSON.parse(window.localStorage.getItem('authProfile'));
        return profile;
    }

    userProfile() {
        const profile = JSON.parse(window.localStorage.getItem('userProfile'));
        return profile;
    }

    setAccessToken = (token) => {
        window.localStorage.setItem('accessToken', token);
    }

    setIdToken = (token) => {
        window.localStorage.setItem('idToken', token);
    }

    setTokenExpiresAt = (expiration) => {
        window.localStorage.setItem('expiresAt', expiration);
    }

    setAuthProfile = (profile) => {
        window.localStorage.setItem('authProfile', JSON.stringify(profile));
    }

    setUserProfile = (profile) => {
        window.localStorage.setItem('userProfile', JSON.stringify(profile));
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Set the time that the access token will expire at
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.setAccessToken(authResult.accessToken);
        this.setIdToken(authResult.idToken);
        this.setTokenExpiresAt(expiresAt);
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout() {
        // Remove tokens and expiry time
        this.setAccessToken(null);
        this.setIdToken(null);
        this.setTokenExpiresAt(0);
        this.setAuthProfile(null);
        this.setUserProfile(null);

        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        return new Date().getTime() < this.expiresAt();
    }

    isAuthenticatedApp() {
        // Check whether the user is authenticated through auth0 and also has app profile
        return this.isAuthenticated() && this.userProfile() !== null;
    }

    getAppProfile(authId) {

        return new Promise((resolve, reject) => {
            axios.get(`http://127.0.0.1:8000/users/auth/${authId}`).then(res => {
                this.setUserProfile(res.data);
                resolve();
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    getProfile() {
        return new Promise((resolve, reject) => {
            this.auth0.client.userInfo(this.accessToken(), (err, profile) => {
                if (err) return reject(err);
                console.log(profile);
                if (!profile) {
                    return reject(err);
                }
                this.setAuthProfile(profile);
                // Checks if the user has a application profile. If not, redirects to dashboard
                this.getAppProfile(profile.sub).then(() => {
                    resolve("auth_ok");
                })
                .catch(() => {
                    resolve("auth_profile_pending");
                });
            });
        });
    }
}