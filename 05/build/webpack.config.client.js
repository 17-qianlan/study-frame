const HTMLPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base.js')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
    port: 8000,
    host: 'localhost',
    overlay: {
        errors: true
    },
    open: true,
    hotOnly: true
}

const defaultPlugins = [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        'process.env': isDev ? '"development"':'"productions"'
    }),
    new HTMLPlugin()
]


let config 

if( isDev ){
    config = merge(baseConfig,{
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
    config.devtool = '#cheap-module-eval-source-map'
}else{
    config = merge(baseConfig,{
        entry: {
            app: path.join(__dirname,'../client/index.js')
        },
        output: {
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        name: 'commons',
                        minSize: 0,
                        minChunks: 2,
                        maxInitialRequests: 5
                    },
                    vendor: {
                        test: /node_modules/,
                        name: 'vendor',
                        chunks: 'initial',
                        priority : 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:8].css'
            })
        ])
    })
}


module.exports = config
