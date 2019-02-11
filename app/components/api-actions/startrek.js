'use strict';

const PATH_PREFIX = '/api';

module.exports = {
    getAlphaTickets: {
        method: 'GET',
        path: () => `${PATH_PREFIX}/alphaRequest`
    }
};
