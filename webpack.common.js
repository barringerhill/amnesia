const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  devtool: 'source-map-inline',
  entry: {
    app: './src/index',
    // home: './src/views/home'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    },
      {
      test: /\.svg$/,
      use: 'svg-url-loader?noquotes'
    }]
  },  
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Amnesia',
      template: './src/assets/index.html',
      favicon: './src/assets/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      // chunkFilename: "[id].[contenthash].css"
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],  
  optimization: {
    // minimizer: [
    //   new OptimizeCSSAssetsPlugin({})
    // ],
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true
    //     },
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // }    
  }
};
