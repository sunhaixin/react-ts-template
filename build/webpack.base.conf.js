const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|es6)$/,
        use: 'awesome-typescript-loader',
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[hash].[ext]',
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttc|ttf|eot|otf)/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@static': path.resolve(__dirname, '../src/static'),
      '@request': path.resolve(__dirname, '../src/request'),
      '@view': path.resolve(__dirname, '../src/view'),
      '@components': path.resolve(__dirname, '../src/view/components'),
    }
  }
}
