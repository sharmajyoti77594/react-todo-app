//const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map', //for line numbers in bundle file for debugging

  //where webpack is going check first for bundling
  entry: './src/index',     // bydefault this looks for index.js file

  //for production only
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js'
  },
  resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', 'jsx']
  }, 
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          }
      ]
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: './index.html'
        })
  ]
};
