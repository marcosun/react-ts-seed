const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('./path');

module.exports = {
  entry: {
    app: path.appSrc,
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    mobx: 'mobx',
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader'],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: ['source-map-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
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
        src: 'https://unpkg.com/react@16.14.0/umd/react.production.min.js',
        crossorigin: true,
      }, {
        src: 'https://unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js',
        crossorigin: true,
      }, {
        src: 'https://unpkg.com/react-router-dom@5.2.0/umd/react-router-dom.min.js',
        crossorigin: true,
      }, {
        src: 'https://unpkg.com/mobx@5.15.7/lib/mobx.umd.min.js',
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
          priority: -10,
        },
      },
    },
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    })],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
