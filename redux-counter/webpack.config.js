const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
