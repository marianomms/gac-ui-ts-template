
/* eslint-disable quote-props */

const eslintRules = require('./eslintrc.rules');

function eslintConfigGenerator() {
  const rules = {
    '@typescript-eslint/interface-name-prefix': ['error', 'always']
  };

  return { ...eslintRules, ...rules };
}

module.exports = eslintConfigGenerator();
/* eslint-enable quote-props */