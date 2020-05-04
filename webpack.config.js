const merge = require('webpack-merge');
const baseConfigGenerator = require('./config/webpack/webpack.config.base.js');
const prodConfig = require('./config/webpack/webpack.config.prod.js');
const devConfig = require('./config/webpack/webpack.config.dev.js');

function webpackEnviromentSelector(env) {
  let config;
  if (env.production) config = prodConfig;
  if (env.development) config = devConfig;
  const baseConfig = baseConfigGenerator(env);
  return merge(baseConfig, config);
}

module.exports = webpackEnviromentSelector;