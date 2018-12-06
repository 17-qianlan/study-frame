const path = require('path');

const config = {
    mode: 'development',
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(gif|svg|png|jpeg|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
