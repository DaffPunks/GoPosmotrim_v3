const Sequelize = require('sequelize');
const sequelize = require('../index');

const Room = sequelize.define('room', {
    name: {
        type: Sequelize.STRING
    },
    playerID: {
        type: Sequelize.INTEGER
    },
    ownerID: {
        type: Sequelize.INTEGER
    }
});

Room.sync();

module.exports = Room;
