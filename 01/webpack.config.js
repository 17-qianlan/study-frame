const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {VueLoaderPlugin} = require('vue-loader');


const isDev = process.env.NODE_ENV === "development";


const config = {
    mode: 'development',
    entry: path.join(__dirname,"./src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["css-loader","vue-style-loader"]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit : 1024,
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV : isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
};

if( isDev ) {
    config.devServer = {
        port : "6000",
        host : "0.0.0.0",
        open : true,
        overlay: {
            errors: true
        },
        hot : true,
        hotOnly : true
    };
    /*config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )*/
}else{

}

module.exports = config;