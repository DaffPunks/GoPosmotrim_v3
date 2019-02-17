const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require('../webpack.config.js');

const app = express();

const router = express.Router();

const compiler = webpack(config);

const mainView = require('./views/main');

const wpmw = webpackDevMiddleware(compiler,
    {
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }
);
app.use(wpmw);

const wphmw = webpackHotMiddleware(compiler);
app.use(wphmw);

router.get('*', (req, res, next) => {
    res.send(mainView());
});

app.use(router);

app.listen(3000, () => console.log('listening on 3000'));
