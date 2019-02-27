const roomRouter = require('./rooms');
const appRouter = require('./app');

module.exports = function (app) {
    app.use('/api/rooms', roomRouter);
    app.use('/', appRouter);
};
