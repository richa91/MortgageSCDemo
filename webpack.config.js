const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './app/javascripts/app.js',
    devtool: 'inline-source-map',
    // devServer: {
    //  contentBase: './dist',
    // },
    plugins: [
      new CopyWebpackPlugin({patterns:[
        { from: './app/index.html', to: "index.html" }
      ]}),
      // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      // new HtmlWebpackPlugin({
      //   title: 'Development',
      // }),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.js'
    },
  };