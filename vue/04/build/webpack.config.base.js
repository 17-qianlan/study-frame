const path = require("path");

const config = {
    mode: "development",
    target: "web",
    entry: path.join(__dirname,"../client/index.js"),
    output:{
        filename: "bundle.js",
        path: path.join(__dirname,"../dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader","css-loader"]
            },
            {
                test: /\.(jpg|jpeg|svg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 1024,
                            name: "[name].[ext]"
                        }
                    }

                ]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader","css-loader","sass-loader"]
            }
        ]
    }
}

module.exports = config;