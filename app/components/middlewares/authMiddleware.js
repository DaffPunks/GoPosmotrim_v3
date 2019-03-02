const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const authorizationHeader = req.headers['authorization'] ? req.headers['authorization'] : '';

    const token = authorizationHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, 'gp_secret');

        res.locals.userId = decoded.user_id;

        next();

    } catch (e) {

        res.status(403).json('Forbidden');

    }
};
