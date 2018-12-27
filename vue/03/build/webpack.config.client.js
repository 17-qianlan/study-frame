const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const isDev = process.env.NODE_ENV === 'development';
const devServer = {
    port: '8080',
    host: 'localhost',
    overlay: {
        errors: true
    },
    historyApiFallback: {
        index: '/template.html'
    },
    open: true,
    hotOnly: true
};
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    })
];
let config;
if (isDev) {
    config = merge(baseConfig, {
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    });
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js')
        },
        output: {
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial', // 默认async
                        name: 'commons',
                        minSize: 0, // 最小尺寸 默认0
                        minChunks: 2, // 最小chunk 默认1
                        maxInitialRequests: 5// 最大初始话请求数
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtract({
                filename: '[name].[contenthash:8].css'
            })
        ])
    });
}
module.exports = config;
