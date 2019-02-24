/* eslint-disable */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.config.js');

const app = express();

const router = express.Router();

const compiler = webpack(config);

const mainView = require('./views/main');

const wpmw = webpackDevMiddleware(compiler,
    {
        publicPath: config.output.publicPath,
        stats: {colors: true},
    });
app.use(wpmw);

const wphmw = webpackHotMiddleware(compiler);
app.use(wphmw);

router.get('*', (req, res) => {
    res.send(mainView());
});

app.use(router);

const sock = 'app/run/node.sock';

if (fs.existsSync(sock)) {
    fs.unlinkSync(sock);
}

const server = app.listen(sock, () => {
    fs.chmod(sock, 0o666, (err) => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    console.log(`listening on ${sock}`)
});

require('./ws')(server);
