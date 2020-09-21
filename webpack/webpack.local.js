const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { mergeWithCustomize, customizeArray, customizeObject } = require('webpack-merge');
const path = require('./path');
const common = require('./webpack.common.js');

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    plugins: 'replace',
  }),
  customizeObject: customizeObject({
    externals: 'replace',
  }),
})(common, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.appSrc,
    historyApiFallback: true,
  },

  externals: {},

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,

      title: 'react-ts-seed',
      appMountId: 'app',
      chunks: ['runtime', 'vendors', 'app'], // Specify javascript load order
      chunksSortMode: 'manual',
    }),
  ],
});
