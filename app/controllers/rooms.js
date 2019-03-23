const router = require('express').Router();
const authMiddleware = require('../components/middlewares/authMiddleware');
const RoomModel = require('../db/models/Room');

/**
 * Get Room list
 * GET
 **/
router.get('/', async function(req, res) {

    const rooms = await RoomModel.findAll();

    res.status(200).json([]);

});

/**
 * Create Room
 * POST
 **/
router.post('/', [authMiddleware], async function(req, res) {

    const room = await RoomModel.create({
        name: '1',
        playerID: 1,
        ownerID: 1
    });

    // res.status(200).json(room);
    res.status(200).json([]);

});

module.exports = router;
