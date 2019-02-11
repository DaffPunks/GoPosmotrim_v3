const resolveFullBillingAccount = async (api, opts) => {
    opts.utils.log('Run');

    const {response: {data: {billingAccounts}}, debugHeaders} = await api.billing.resolveBillingAccounts(opts);

    opts.utils.log('Found', billingAccounts);

    if (billingAccounts.length === 0) {
        throw {
            error: {
                response: {
                    status: 404,
                    statusText: 'NOT FOUND',
                    data: {
                        code: 'BillingAccountNotFound',
                        internal: false,
                        message: 'BillingAccount not found'
                    }
                }
            },
            debugHeaders
        };
    }

    const result = await api.billing.getBillingAccountFullView({
        ...opts,
        params: {
            billingAccountId: billingAccounts[0].id
        }
    });

    opts.utils.log('Full Billing Account', result.response.data);

    return result;
};

module.exports = resolveFullBillingAccount;
