const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.[ContentHash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /_node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]    
  
  
}