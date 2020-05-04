/**
 * Webpack configuration for development
 */
const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    hot: true,
    host: '0.0.0.0',
    port: 8033
  }

};
module.exports = webpackConfig;