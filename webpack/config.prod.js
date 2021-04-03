const { merge } = require('webpack-merge');
const common = require('./config.js');

module.exports = merge(common, {
  mode: 'production',
});
