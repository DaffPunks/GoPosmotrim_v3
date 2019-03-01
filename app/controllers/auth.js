const router = require('express').Router();
const authMiddleware = require('../components/middlewares/authMiddleware');
const UserModel = require('../db/models/User');
const sha256 = require('js-sha256').sha256;

/**
 * Get Room list
 * GET
 **/
router.get('/login', async function(req, res) {

    const {username, password} = req.body;

    const users = await UserModel.findAll();

    res.status(200).json(usersls);

});

/**
 * Create Room
 * POST
 **/
router.post('/register', async function(req, res) {

    const {username, password} = req.body;

    await UserModel.create({
        username: username,
        password: sha256(password),
        role: 1,
        status: 1
    });

    res.status(200).json('OK');
});

module.exports = router;
