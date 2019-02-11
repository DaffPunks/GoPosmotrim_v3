'use strict';
const mainView = require('../views/main');

module.exports = async function (req, res) {
    return res.send(mainView());
};
