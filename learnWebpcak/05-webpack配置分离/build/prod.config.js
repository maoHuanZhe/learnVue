const ugligyJsPlugin = require('uglifyjs-webpack-plugin')
const webpaceMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpaceMerge(baseConfig,{
    plugins: [
        new ugligyJsPlugin()
    ]
})
