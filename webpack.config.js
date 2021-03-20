module.exports = {
  mode: 'development',
  entry: ['./app/client.js'],
  output: {
    path: __dirname,
    filename: './server/public/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
