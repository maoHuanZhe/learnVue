const webpaceMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpaceMerge(baseConfig,{
    devServer: {
        contentBase: './dist',
        inline: true
    }
});
