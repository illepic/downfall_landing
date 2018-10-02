const path = require('path');

const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const NullPlugin = require('webpack-null-plugin');
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
                // On development we want to see where the file is coming from,
                // hence we preserve the [path]
                name: '[path][name].[ext]?hash=[hash:20]',
                limit: 8192
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: argv.mode === 'development'
              }
            }
          ],
        }
      ],
    },
    plugins: [
      ...[
        new CleanWebpackPlugin(buildPath),
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
      ...argv.mode === 'production' ? [
        new FaviconsWebpackPlugin({
          // Your source logo
          logo: './images/dflogo.svg',
          // The prefix for all image files (might be a folder or a name)
          prefix: 'icons-[hash]/',
          // Generate a cache file with control hashes and
          // don't rebuild the favicons until those hashes change
          persistentCache: true,
          // Inject the html into the html-webpack-plugin
          inject: true,
          // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
          background: '#fff',
          // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
          title: '{{projectName}}',

          // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[hash:20].css',
        }),
      ] : [],
    ],
  }
};