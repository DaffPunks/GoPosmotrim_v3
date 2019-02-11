'use strict';

const PATH_PREFIX = '/v1';
const CONSOLE_PATH_PREFIX = '/v1/console';

module.exports = {
    authToken: {
        method: 'POST',
        sign: false,
        path: () => `${PATH_PREFIX}/auth/oauth`
    },
    authSession: {
        method: 'POST',
        sign: false,
        path: () => `${PATH_PREFIX}/auth/session_id`
    },
    verify: {
        method: 'GET',
        path: () => `${PATH_PREFIX}/auth/verify`
    },
    checkUser: {
        method: 'GET',
        sign: false,
        path: () => `${CONSOLE_PATH_PREFIX}/checkUserProperties`
    },
    acceptAgreements: {
        method: 'POST',
        sign: false,
        path: () => `${PATH_PREFIX}/acceptAgreements`
    },
    getUserSettings: {
        method: 'GET',
        path: () => `${CONSOLE_PATH_PREFIX}/userSettings`
    },
    updateUserSettings: {
        method: 'PATCH',
        path: () => `${CONSOLE_PATH_PREFIX}/userSettings`
    },
    listClouds: {
        method: 'GET',
        path: () => `${PATH_PREFIX}/allClouds`
    },
    tokens: {
        method: 'POST',
        sign: false,
        path: () => `${PATH_PREFIX}/tokens`
    }
};
