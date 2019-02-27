const router = require('express').Router();
const mainView = require('../views/main');

router.get('*', (req, res) => {
    res.send(mainView());
});

module.exports = router;
