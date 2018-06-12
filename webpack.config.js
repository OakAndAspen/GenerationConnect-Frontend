const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    watch: true,
    output: {
        filename: 'app.js',
        //path: path.resolve(__dirname, 'public')
        path: "C:\\wamp64\\www\\ProjWeb-Back\\public\\frontend\\"
    },
    module: {
        rules: [
            {test: /\.handlebars$/, loader: 'handlebars-loader', query: {inlineRequires: '\/images\/'}},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    }
                ]},
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