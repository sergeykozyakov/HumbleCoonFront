const { merge } = require('webpack-merge');

const common = require('./config.js');
const serverConfig = require('../server/config');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', './src/index'],
  },
  devtool: 'inline-source-map',
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
