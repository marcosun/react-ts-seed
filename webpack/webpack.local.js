const merge = require('webpack-merge');
const path = require('./path');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.appSrc,
    historyApiFallback: true,
  },
});
