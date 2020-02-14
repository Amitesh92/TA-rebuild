const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/assets/js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                 MiniCssExtractPlugin.loader,
                'css-loader', // translates CSS into CommonJs
                'sass-loader' // compiles Sass to CSS
            ]
        },
        {
            test: /\.m?js$/i,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            } 
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                  }
              }
            ],
        },
        {
            // Apply rule for fonts files
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                   {
                     // Using file-loader too
                     loader: "file-loader",
                     options: {
                       outputPath: 'fonts'
                     }
                   }
                 ]
          }

    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  watch: true
};