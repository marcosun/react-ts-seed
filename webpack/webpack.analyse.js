const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const prod = require('./webpack.prod.js');

module.exports = merge.smart(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
