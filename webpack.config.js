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
        main: './src/js/entryPoints/main.js',
        register: './src/js/entryPoints/register.js',
        events: './src/js/entryPoints/events.js',
        sponsors: './src/js/entryPoints/sponsors.js',
        team: './src/js/entryPoints/team.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
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
                use: [{loader: ExtractCssPlugin.loader, options:{publicPath: '/'}}, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [{loader: ExtractCssPlugin.loader, options:{publicPath: '/'}}, 'css-loader']
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
        new webpack.ProvidePlugin({
            anime: 'animejs',
        }),

        extractPlugin,

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main'],
            
        }),
        new HtmlWebpackPlugin({
            filename: 'events.html',
            template: './src/events.html',
            chunks: ['events']
        }),
        new HtmlWebpackPlugin({
            filename: 'team.html',
            template: './src/team.html',
            chunks: ['team']
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './src/register.html',
            chunks: ['register']
        }),
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: './src/sponsors.html',
            chunks: ['sponsors']
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['public']
        })
    ]
}