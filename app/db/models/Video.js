const Sequelize = require('sequelize');
const sequelize = require('../index');

const Video = sequelize.define('video', {
    roomID: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    }
});

Video.sync();

module.exports = Video;
