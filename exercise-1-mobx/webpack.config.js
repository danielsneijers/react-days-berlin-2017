const { resolve } = require('path');
const baseConfig = require('../webpack.config.base.js');

module.exports = {
  ...baseConfig,
  context: resolve(__dirname),
  output: {
    ...baseConfig.output,
    path: resolve(__dirname, 'dist'),
  },
};
