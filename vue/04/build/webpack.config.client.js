const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const merge = require("webpack-merge");


const baseConfig = require("./webpack.config.base.js");

const isDev = process.env.NODE_ENV === "development";

const devServer = {
    port: 8080,
    host: "0.0.0.0",
    overlay: {
        errors: true
    },
    open: true,
    hot: true,
    hotOnly: true
}


const defaultPlugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: isDev? '"development"': '"productions"'
        }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
]

let config;
if( isDev ){//true为开发环境
    config = merge(baseConfig,{
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
}else{
    config = merge(baseConfig,{
        entry: {
            app: path.join(__dirname,"../client/index.js")
        },
        output: {
            filename: "[name].js"
        },
        optimization:{
            splitChunks:{
                cacheGroups:{
                    commons: {
                        chunks: "initial",//默认async
                        name: "commons",
                        minSize: 0,//最小尺寸 默认0
                        minChunks: 2,//最小chunk 默认1
                        maxInitialRequests: 5//最大初始话请求数
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: "initial",
                        name: "vendor",
                        priority:10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash:8].css"
            })
        ])
    })
}


module.exports = config;