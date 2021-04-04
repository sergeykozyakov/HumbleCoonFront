const { merge } = require('webpack-merge');

const common = require('./config.js');
const serverConfig = require('../server/config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
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
