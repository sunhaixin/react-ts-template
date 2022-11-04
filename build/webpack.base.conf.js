const { resolve } = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    index: resolve(__dirname, '../src'),
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, '../output'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /(\.js$)|(\.ts$)|(\.tsx$)/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /(\.png$)|(\.gif$)|(\.jpg$)|(\.jpeg)|(\.webp)|(\.svg$)/,
        exclude: /node_modules/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[contenthash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024
          }
        }
      },
      {
        test: /(\.ttf$)|(\.eot$)|(\.otf$)|(\.font$)|(\.fon)|(\.ttc$)|(\.woff$)/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[contenthash][ext]'
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
      inject: 'body',
      inlineSource: 'webpack-runtime.js'
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    usedExports: true,
    sideEffects: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 30000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
        },

      }
    },
  }
}
