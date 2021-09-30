const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: process.env.Node_ENV,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./client/style.css", to: "./" },
      ],
    }),
  ],
  devServer: {
    publicPath: '/',
    proxy: {
      '/checklist': { target: 'https://localhost:3000' },
      '/task': { target: 'https://localhost:3000' },
    },
    hot: true,
  },
};
