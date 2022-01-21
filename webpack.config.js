const { LicenseWebpackPlugin } = require('license-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  plugins: [new LicenseWebpackPlugin()],
};
