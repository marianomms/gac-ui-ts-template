/* eslint-disable quote-props */

const eslintGacRules = require('./eslintrc.gacui.rules');

function eslintConfigGenerator() {
  const rules = {
    'eol-last': ['error', 'never'],
    'no-debugger': 'warn',
    // 'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }]
  };
  return { ...eslintGacRules, ...rules };
}

module.exports = eslintConfigGenerator();
/* eslint-enable quote-props */
