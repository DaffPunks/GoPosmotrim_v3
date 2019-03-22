const router = require('express').Router();
const authMiddleware = require('../components/middlewares/authMiddleware');
// const UserModel = require('../db/models/User');
const sha256 = require('js-sha256').sha256;
const jwt = require('jsonwebtoken');

/**
 * Get Room list
 * GET
 **/
router.post('/login', async function(req, res) {

    const {username, password} = req.body;

    /*const user = await UserModel.findOne({
        where: {
            username: username,
            password: sha256(password)
        }
    });*/
/*
    if (user == null) {
        res.status(400).json('Invalid credentials');
    }

    const token = jwt.sign({ user_id: user.id }, 'gp_secret');*/

    // res.status(200).json(token);

});

/**
 * Create Room
 * POST
 **/
router.post('/register', async function(req, res) {

    /*const {username, password} = req.body;

    const findUser = await UserModel.findOne({
        where: {
            username: username
        }
    });

    if (findUser != null) {
        res.status(200).json('User already exist');
        return null;
    }

    const user = await UserModel.create({
        username: username,
        password: sha256(password),
        role: 1,
        status: 1
    });

    const token = jwt.sign({ user_id: user.id }, 'gp_secret');

    res.status(200).json(token);*/
});

module.exports = router;
