const path = require('path');
const merge = require('webpack-merge');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');
const publicConfig = {
    mode:'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            }]
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],
};
module.exports = merge(commonConfig, publicConfig);