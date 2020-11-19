const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    // rrr: './rrr.js',
  },
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src/img'), 
          to: path.resolve(__dirname, 'public/img')
        },
      ],
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ]
  // }
}