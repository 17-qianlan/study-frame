const path = require('path');
const createVueLoader = require('./vue.config');

const isDev = process.env.NODE_ENV === 'development';
let config = {
    mode: 'development',
    entry: path.join(__dirname, '../client/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_module/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoader(isDev)
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_module/
            },
            {
                test: /\.sass/,
                loader: 'sass-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', 'vue', '.css']
    }
};

module.exports = config;
