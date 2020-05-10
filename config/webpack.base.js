const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
      {
        test: /.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/client/assets/fonts'),
        to: path.resolve(__dirname, '../public/assets/fonts'),
      },
      {
        from: path.resolve(__dirname, '../src/client/assets/fonts'),
        to: path.resolve(__dirname, '../build/assets/fonts'),
      },
      {
        from: path.resolve(__dirname, '../src/client/assets/img'),
        to: path.resolve(__dirname, '../public/assets/img'),
      },
      {
        from: path.resolve(__dirname, '../src/client/assets/img'),
        to: path.resolve(__dirname, '../build/assets/img'),
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
