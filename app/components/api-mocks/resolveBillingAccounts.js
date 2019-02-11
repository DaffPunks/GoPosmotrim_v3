'use strict';
const url = require('url');
const querystring = require('querystring');

const axios = require('../../utils/envAxios');
const envConfig = require('../../configs/env');
const apiActions = require('../api-actions');

const serviceConfig = envConfig.services.find((item) => item.name === 'billing');
const config = apiActions.billing.resolveBillingAccounts;
const properties = ['billingAccountId', 'cloudId', 'passportUid', 'passportLogin'];

const checkResponse = (result) => result.found && result.response.data.billingAccounts.length;

const resolveBillingAccounts = async ({credentials, params = {}, data, query, headers = {}, requestId}) => {
    const actionEndpoint = serviceConfig.endpoint;
    const actionPath = config.path();
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

    Object.assign(headers, {
        'X-YaCloud-SubjectToken': credentials.iamToken
    });

    const requestUrl = actionURL + (query ? '?' + querystring.stringify(query) : '');
    const requestBody = encodeURIComponent(typeof data === 'object' ? JSON.stringify(data) : data);

    Object.assign(debugHeaders, {
        'X-API-Request-Method': config.method,
        'X-API-Request-URL': requestUrl,
        'X-API-Request-Body': requestBody,
        'X-Request-ID': requestId
    });

    const requests = properties.map((propertyName) => {
        return axios({
            url: actionURL,
            method: config.method,
            data: {[propertyName]: data.text},
            params: query,
            headers: headers
        })
            .then(response => ({found: true, response}))
            .catch(error => ({found: false, error}));
    });

    const results = await Promise.all(requests);
    const result = results.find(checkResponse);
    const response = result ? result.response : {data: {billingAccounts: []}};

    if (config.transformResponseData) {
        response.data = await config.transformResponseData(response.data, {credentials, params, query});
    }

    return {response, debugHeaders};
};

module.exports = resolveBillingAccounts;
