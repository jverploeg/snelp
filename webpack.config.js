// IMPORTS
const path = require('path');
// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // Entry Point
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  // PLUGINS
  plugins: [
    new CleanWebpackPlugin(), // clears dist folder after each build
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'index.html') }),
    //new MiniCssExtractPlugin({ filename: './src/styles/styles.css' }),
  ],
  // Output
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js',
  },
  // devtool helps identify where error is happening
  devtool: 'inline-source-map',

  module: {
    rules: [
      // webpack needs to know that js and jsx files need to go through babel before being bundled
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // sass loader
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'sass-loader',
      //     },
      //   ],
      // },
    ],
  },
  // Resolve extension issues
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};