const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
      { test: /\.[jt]sx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
