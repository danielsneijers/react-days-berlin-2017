const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: 'dist',
    publicPath: '/',
    historyApiFallback: true,
    stats: { colors: true },
  },
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: '../template.ejs',
      minify: { useShortDoctype: true },
      hash: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};

module.exports = baseConfig;
