/* eslint-disable */
require('dotenv').load();

const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const sock = 'app/run/node.sock';

const app = express();
const router = express.Router();
const compiler = webpack(config);

/* DevMiddleware */
const wpmw = webpackDevMiddleware(compiler, {publicPath: config.output.publicPath, stats: {colors: true}});
const wphmw = webpackHotMiddleware(compiler);
app.use(wpmw);
app.use(wphmw);
app.use(bodyParser.json());

/* Listen Server */
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

/* Connect Router */
require('./controllers')(app);

/* Connect Database */
require('./db');

/* Create Socket connection */
require('./ws')(server);
