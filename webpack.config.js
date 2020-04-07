const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map'
};