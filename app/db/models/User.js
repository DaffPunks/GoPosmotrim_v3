const Sequelize = require('sequelize');
const sequelize = require('../index');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    }
});

User.sync();

module.exports = User;
