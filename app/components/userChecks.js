'use strict';

const api = require('../components/api');

module.exports = async function (req) {
    const cookieHeaders = {cookie: req.headers.cookie};
    let userChecks;

    try {
        const {response} = await api.iam.checkUser({headers: cookieHeaders, requestId: req.id});

        if (response && response.data) {
            userChecks = response.data.checks;
        }
    } catch ({error, debugHeaders}) {
        req.utils.log(
            'CHECK_USER_ERROR',
            {
                error: error.response && error.response.data || error.message,
                debugHeaders
            }
        );
    }

    return userChecks;
};
