const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const createVueLoaderOptions = require("./vue-loader.config");

const isDev = process.env.NODE_ENV === "development";
const config = {
    mode: "development",
    target: "web",
    entry: path.join(__dirname, "../client/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 1024,
                            name: "resources/[path][name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config;