
const path = require('path');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  process(_src, filename, _config, _options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};