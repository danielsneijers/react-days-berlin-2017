const { resolve } = require('path');
const baseConfig = require('../webpack.config.base.js');

module.exports = Object.assign(baseConfig, {
  context: resolve(__dirname),
  output: Object.assign(baseConfig.output, {
    path: resolve(__dirname, 'dist'),
  }),
});
