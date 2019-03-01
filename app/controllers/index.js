const roomRouter = require('./rooms');
const appRouter = require('./app');
const authRouter = require('./auth');

module.exports = function (app) {
    app.use('/api/rooms', roomRouter);
    app.use('/api/auth', authRouter);
    app.use('/', appRouter);
};
