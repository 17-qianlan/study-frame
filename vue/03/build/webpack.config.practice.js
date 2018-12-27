const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const devServer = {
    port: '8000',
    host: 'localhost',
    overlay: {
        errors: true
    },
    open: true,
    hot: true,
    hotOnly: true
};
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    })
];
let config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]),
    devServer,
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    }
});
module.exports = config;
