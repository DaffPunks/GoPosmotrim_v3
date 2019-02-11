'use strict';
const camelize = require('camelize');

// const PATH_PREFIX = '/billing/v1/console';
const PRIVATE_PREFIX = '/billing/v1/private';

module.exports = {
    // Аккаунты
    listAccounts: {
        method: 'GET',
        path: () => `${PRIVATE_PREFIX}/billingAccounts`,
        transformResponseData: (data) => camelize(data)
    },
    getAccount: {
        method: 'GET',
        path: ({accountId}) => `${PRIVATE_PREFIX}/billingAccounts/${accountId}`
    },
    getBillingAccountFullView: {
        method: 'GET',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/fullView`
    },
    inactivateBillingAccount: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:inactivate`
    },
    activateBillingAccount: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:activate`
    },
    approveBillingAccount: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:approve`
    },
    suspendBillingAccount: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:suspend`
    },
    setBillingAccountThreshold: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:threshold`
    },
    setBillingAccountPaymentType: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:paymentType`
    },
    listBillingAccountClouds: {
        method: 'GET',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/clouds`
    },
    resolveBillingAccounts: {
        method: 'POST',
        path: () => `${PRIVATE_PREFIX}/billingAccounts:resolve`,
        transformResponseData: (data) => camelize(data)
    },

    // grants
    listAccountMonetaryGrants: {
        method: 'GET',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/monetaryGrants`
    },
    giveMonetaryGrant: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}:giveMonetaryGrant`
    },

    // promocodes
    giveMonetaryGrantOffer: {
        method: 'POST',
        path: () => `${PRIVATE_PREFIX}/monetaryGrantOffers`
    },

    // Детализации
    getUsageMeta: {
        method: 'GET',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/usageMeta`
    },
    getAccountUsage: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/billingAccountUsageReport`
    },
    getCloudUsage: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/cloudUsageReport`
    },
    getSkuUsage: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/skuUsageReport`
    },
    getServiceUsage: {
        method: 'POST',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/serviceUsageReport`
    },

    // Транзакции
    listTransactions: {
        method: 'GET',
        path: ({billingAccountId}) => `${PRIVATE_PREFIX}/billingAccounts/${billingAccountId}/transactions`
    }
};
