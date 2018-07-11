'use strict'

const path = require('path');
const webpack = require('webpack');
const rootDir = path.resolve(__dirname, '..');

const HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devServer: {
        contentBase: path.resolve(rootDir, 'src'),
        port: 8080
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'main') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: [/node_modules/],
                use: 'raw-loader',
            },
            { //this rule will only be used for any vendors
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
                include: [/node_modules/]
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'] // TODO: use preset-env?
                        }
                    },
                    'ts-loader']
            },
            {
              test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
              use: ['file-loader']
            },
            {
              test: /\.(scss)$/,
              exclude: /node_modules/,
              use: ['sass-loader', 'style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
        //publicPath: '/assets'
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'app', 'index.html')
        })
    ],
    resolve: {
        extensions: [ '.js', '.ts' ]
    }
};
