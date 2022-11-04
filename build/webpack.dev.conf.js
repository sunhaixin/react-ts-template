const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, baseConf.output.path)
    }
  }
})
