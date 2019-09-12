const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ugligyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    //入口：可以是字符串/数组/对象，这里我们入口只有一个，所以写一个字符串即可
    entry: './src/main.js',
    //出口：通常是一个对象，里面至少包含两个重要属性，path和filename
    output: {
        path: path.resolve(__dirname,'dist'),//注意：path通常是一个绝对路径
        filename: 'bundel.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归fgr所有'),
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new ugligyJsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}
