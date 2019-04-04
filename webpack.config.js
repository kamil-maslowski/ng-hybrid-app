const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'awesome-hybrid-app.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
