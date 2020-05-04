const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const basePath = __dirname;
const distPath = '../../dist';
const indextInput = './src/index.html';
const indexOutput = 'index.html';
const outputFilename = 'gac-ui-ts';
/**
 * Contains the common webpack configuration for development and production configuration
 * @param env
 */
function webpackConfigGenerator(env) {
  const sourcemaps = !!env.development;
  const webpackInitConfig = {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
    },
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.join(basePath, distPath),
      filename: `${outputFilename}.js`
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          // eslint-loader, ensure eslint before generate
          // use: ['babel-loader', 'eslint-loader'],
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: sourcemaps } }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: sourcemaps } },
            { loader: 'sass-loader', options: { sourceMap: sourcemaps } }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif')$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '/[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    plugins: [
      // Clean dist folder in each generation
      new CleanWebpackPlugin(),
      // Generate a index.html
      new HTMLWebpackPlugin({
        filename: indexOutput,
        template: indextInput
      }),
      // Extract styles to a independent file css
      new MiniCssExtractPlugin({
        filename: `${outputFilename}.css`,
        chunkFilename: '[id].css'
      }),
      // Handle the env vars given in package.json
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env)
      })
    ]
  };
  return webpackInitConfig;
}
module.exports = webpackConfigGenerator;