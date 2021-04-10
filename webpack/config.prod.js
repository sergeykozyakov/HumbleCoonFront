const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./config.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './src/index',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@material-ui/core': 'MaterialUI',
    '@material-ui/core/styles': 'MaterialUI',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      isProduction: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/react/umd/react.production.min.js', to: 'react.js' },
        { from: 'node_modules/react-dom/umd/react-dom.production.min.js', to: 'react-dom.js' },
        { from: 'node_modules/@material-ui/core/umd/material-ui.production.min.js', to: 'material-ui.js' },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
