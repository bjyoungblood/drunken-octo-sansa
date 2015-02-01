'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry  : [
    'webpack/hot/dev-server',
    './client/main',
  ],
  target : 'web',
  output: {
    path: 'dist',
    filename: 'js/main-[hash].js'
  },
  resolve : {
    root : __dirname,
    modulesDirectories : [ 'node_modules' ],
    extensions : [ '', '.js', '.jsx' ]
  },
  module : {
    noParse : /\.min\.js/,
    loaders : [
      {
        test : /\.jsx|js$/,
        exclude : /node_modules/,
        loader : '6to5-loader'
      },
      {
        test : /\.json$/,
        loader : 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template : 'client/index.html',
    })
  ]
};
