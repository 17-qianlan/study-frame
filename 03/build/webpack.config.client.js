const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");


const isDev = process.env.NODE_ENV === "development";
const devServer = {
    port: "8080",
    host: "localhost",
    overlay: {
        errors: true
    },
    open: true,
    hotOnly: true
};
const defaultPlugins = [
    new webpack.DefinePlugin({
        "process.env" : {
            NODE_ENV : isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
];
let config;
if (isDev) {
    config = merge(baseConfig,{
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
}else{

}
module.exports = config || baseConfig;