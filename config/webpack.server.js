const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Target environment for bundling
  target: 'node',

  // Entry file location for server
  // side code bundling
  entry: './src/index.js',

  // Output bundle file location
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },

  // Ignoring external node modules
  externals: [WebpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
