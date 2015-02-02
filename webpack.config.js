'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : [ 'webpack/hot/dev-server', './client/main.jsx' ],
  target : 'web',
  output : {
    path : 'dist',
    filename : 'js/main-[hash].js',
  },
  resolve : {
    root : __dirname,
    modulesDirectories : [ 'node_modules' ],
    extensions : [ '', '.js', '.jsx' ],
  },
  module : {
    noParse : /\.min\.js/,
    loaders : [
      {
        test : /\.jsx|js$/,
        exclude : /node_modules/,
        loader : '6to5-loader',
      },
      {
        test : /\.json$/,
        loader : 'json-loader',
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template : 'client/index.html',
    }),
  ],
};
