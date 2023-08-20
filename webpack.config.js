// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'devDist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: false, // 啟用 CSS 模組功能
          },
        },],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/playground/index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Specify the directory for serving static files
  },
};