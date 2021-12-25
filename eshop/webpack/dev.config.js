const baseConfig = require ('./base.config.js');
const Dotenv = require('dotenv');
const {merge} = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');


Dotenv.config({path: '.env.dev'});

module.exports = merge(baseConfig,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: failse,
        publicPath: '/',
        historyApiFallback: true,
        clientLevel: 'warning',
        compress: ture
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html'
            template: 'index.html'
            inject: true
        })
    ]
})

