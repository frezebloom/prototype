const path = require('path');
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");


module.exports = (env, args) => {
  const prod = args.mode === "production";
  return {
    entry: './src/index.tsx',
    devtool: 'source-map',
    externals: {
      cesium: "Cesium",
    },
    optimization: {
      minimize: false
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.min.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
              options: {
                sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist:['ie >= 8', 'last 4 version']
                  })
                ],
                sourceMap: true
              }
          },
          {
            loader: 'sass-loader',
              options: {
                sourceMap: true
              }
          },
        ],
      }
    ]
  },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyPlugin([
        {
          from: `./node_modules/cesium/Build/Cesium`,
          to: "cesium",
        },
      ]),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new HtmlIncludeAssetsPlugin({
        append: false,
        assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
    ]
  }
}
  
