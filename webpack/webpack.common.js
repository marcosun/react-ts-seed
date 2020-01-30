const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('./path');

module.exports = {
  entry: {
    app: path.appSrc,
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    path: path.appDist,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(t|j)s(x?)$/,
        exclude: /node_modules/,
        loaders: ['ts-loader'],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: ['source-map-loader']
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,

      title: 'react-ts-seed',
      appMountId: 'app',
      chunks: ['runtime', 'vendors', 'app'], // Specify javascript load order
      chunksSortMode: 'manual',
      scripts: [{
        src: 'https://unpkg.com/react@16.12.0/umd/react.production.min.js',
        crossorigin: true,
      }, {
        src: 'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js',
        crossorigin: true,
      }],
    }),
  ],

  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -20,
        },
      },
    },
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
