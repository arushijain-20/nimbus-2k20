const path = require('path');
const webpack = require('webpack');
const ExtractCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const extractPlugin = new ExtractCssPlugin({
    filename: 'css/[name].css',
});

module.exports = {
    entry: {
        main: './js/entryPoints/main.js',
        register: './js/entryPoints/register.js',
        events: './js/entryPoints/events.js',
        sponsers: './js/entryPoints/sponsers.js',
        team: './js/entryPoints/team.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
        // publicPath: 'public'
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.scss$/,
                use: [{loader: ExtractCssPlugin.loader, options:{publicPath: 'css/'}}, 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            esModule: false,
                            outputPath: 'img/',
                            publPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: 'main.html',
            chunks: ['main'],
            
        }),
        new HtmlWebpackPlugin({
            filename: 'events.html',
            template: 'events.html',
            chunks: ['events']
        }),
        new HtmlWebpackPlugin({
            filename: 'team.html',
            template: 'team.html',
            chunks: ['team']
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: 'register.html',
            chunks: ['register']
        }),
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: 'sponsors.html',
            chunks: ['sponsers']
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['public']
        })
    ]
}