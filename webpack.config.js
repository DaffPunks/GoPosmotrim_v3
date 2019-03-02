const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        main: ['@babel/polyfill', './src/entries/main.js', 'webpack-hot-middleware/client?reload=true']
    },
    output: {
        path: path.resolve(__dirname, 'app/public/build'),
        publicPath: '/build/'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["src"]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ],
    },
    plugins: [
        // OccurrenceOrderPlugin is needed for webpack 1.x only
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
