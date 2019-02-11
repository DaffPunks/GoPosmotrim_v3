'use strict';
const url = require('url');
const querystring = require('querystring');

const envConfig = require('../configs/env');
const axios = require('../utils/envAxios');
const apiActions = require('./api-actions');
const resolveBillingAccounts = require('./api-mocks/resolveBillingAccounts');
const resolveFullBillingAccount = require('./api-mocks/resolveFullBillingAccount');

function encodeParams(params) {
    const encodedParams = {};

    Object.keys(params).forEach(key => {
        encodedParams[key] = encodeURIComponent(params[key]);
    });

    return encodedParams;
}

function createAction(service, config) {
    return async function ({credentials, params = {}, data, query, headers = {}, requestId, utils}) {
        const serviceEndpoint = config.private ? service.privateEndpoint : service.endpoint;
        const actionEndpoint = config.endpoint ? config.endpoint(service, params) : serviceEndpoint;
        const actionPath = typeof config.path === 'function' ? config.path(encodeParams(params)) : config.path;
        const actionURL = actionEndpoint + actionPath;
        const parsedActionURL = url.parse(actionURL);
        const debugHeaders = {};

        Object.assign(headers, {
            'host': parsedActionURL.hostname
        });

        if (requestId) {
            Object.assign(headers, {
                'X-Request-ID': requestId
            });
        }

        if (config.auth !== false && config.sign !== false) {
            Object.assign(headers, {
                'X-YaCloud-SubjectToken': credentials.iamToken
            });
        }

        if (config.transformRequestData) {
            data = await config.transformRequestData(data, {credentials, params, query});
        }

        const requestUrl = actionURL + (query ? '?' + querystring.stringify(query) : '');
        let requestBody;

        try {
            const encodedRequestBody = encodeURIComponent(typeof data === 'object' ? JSON.stringify(data) : data);

            if (encodedRequestBody.length < 256) {
                requestBody = encodedRequestBody;
            }
        } catch (err) {
            utils.logError('ERROR_STRINGIFY_REQUEST_BODY', err);
        }

        Object.assign(debugHeaders, {
            'X-API-Request-Method': config.method,
            'X-API-Request-URL': requestUrl,
            'X-API-Request-Body': requestBody ? requestBody : null,
            'X-Request-ID': requestId
        });

        try {
            const response = await axios({
                url: actionURL,
                method: config.method,
                data: data,
                params: query,
                headers: headers
            });

            if (config.transformResponseData) {
                response.data = await config.transformResponseData(response.data, {credentials, params, query});
            }

            return {response, debugHeaders};
        } catch (error) {
            if (error.response && config.transformResponseError) {
                error.response.data = await config.transformResponseError(
                    error.response.data, {credentials, params, query}
                );
            }

            return Promise.reject({error, debugHeaders});
        }
    };
}

const api = Object.keys(apiActions).reduce((res, serviceName) => {
    const service = envConfig.services.find(service => service.name === serviceName);

    if (service) {
        const actions = apiActions[serviceName];

        res[serviceName] = Object.keys(actions).reduce((res, actionName) => {
            res[actionName] = createAction(service, actions[actionName]);

            return res;
        }, {});
    }

    return res;
}, {});

api.billing.resolveBillingAccounts = resolveBillingAccounts;
api.billing.resolveFullBillingAccount = resolveFullBillingAccount.bind(null, api);

module.exports = api;
