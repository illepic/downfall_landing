const path = require('path');

const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {

  return {
    entry: './assets/js/main.js',
    output: {
      filename: '[name].[hash:20].js',
      path: buildPath,
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              ...argv.mode === 'production' ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: './' },
              } : {
                loader: 'style-loader',
              }
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          // Load all images as base64 encoding if they are smaller than 8192 bytes
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
              // options: {
              //   bypassOnDebug: argv.mode === 'development'
              // }
            }
          ],
        }
      ],
    },
    plugins: [
      ...[
        new CleanWebpackPlugin(),
        new ProvidePlugin({
          browser: path.resolve(__dirname, './assets/js/browser.min'),
          breakpoints: path.resolve(__dirname, './assets/js/breakpoints.min'),
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body',
        }),
        new CopyWebpackPlugin([
          { from: './assets/css/noscript.css', to: './', flatten: true },
        ]),
      ],
      // Production-only settings
      ...argv.mode === 'production' ? [
        new FaviconsWebpackPlugin({
          logo: './images/dflogo.svg',
          prefix: 'favicons-[hash]/',
          cache: true,
          inject: true,
          background: '#ffffff',
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[hash:20].css',
        }),
      ] : [],
    ],
  }
};