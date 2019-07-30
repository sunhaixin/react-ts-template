const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8081,
    compress: true,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
