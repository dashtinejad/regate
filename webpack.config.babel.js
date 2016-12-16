export default {
  output: {
    filename: 'distrubution/regate.js',
    library: 'Regate',
    libraryTarget: 'umd'
  },
  // devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
