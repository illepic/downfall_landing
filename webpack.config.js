const path = require('path');

const { ProvidePlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {

  // console.log(env);
  // console.log(argv);

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
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        },
        {
          // Load all images as base64 encoding if they are smaller than 8192 bytes
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // On development we want to see where the file is coming from,
                // hence we preserve the [path]
                name: '[path][name].[ext]?hash=[hash:20]',
                limit: 8192
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(buildPath),
      new ProvidePlugin({
        browser: path.resolve(__dirname, './assets/js/browser.min'),
        breakpoints: path.resolve(__dirname, './assets/js/breakpoints.min'),
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
    ],
  }
};