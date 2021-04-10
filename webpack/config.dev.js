const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./config.js');
const serverConfig = require('../server/config');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', './src/index'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      isProduction: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: './dist',
    port: serverConfig.portDev,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: serverConfig.apiHostDev,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
