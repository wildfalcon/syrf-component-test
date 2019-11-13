const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'node_modules/@wildfalcon', to: 'node_modules/@wildfalcon' },
      { from: 'node_modules/@webcomponents', to: 'node_modules/@webcomponents' },
      { from: 'public', to: 'public' },
    ])
  ]
})