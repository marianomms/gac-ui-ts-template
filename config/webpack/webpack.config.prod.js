const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * Webpack configuration for production
 */
const webpackConfig = {
  mode: 'production',
  plugins: [
    // Minimize css because webpack 4 doesn't make automatically
    new OptimizeCssAssetsPlugin()
  ]
};

module.exports = webpackConfig;