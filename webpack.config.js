const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    watch: true,
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build')
    },
    module: {
        rules: [
            {test: /\.handlebars$/, loader: 'handlebars-loader', query: {inlineRequires: '\/images\/'}},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ]
};