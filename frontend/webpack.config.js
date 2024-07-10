const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Ensure this path matches the location of your entry file
  output: {
    path: path.resolve(__dirname, 'frontend/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend/public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ensure this path matches the location of your HTML template
    }),
  ],
};
