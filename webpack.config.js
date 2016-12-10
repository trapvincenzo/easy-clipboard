'use strict';

const webpack = require("webpack");
const path = require('path');

module.exports = {
  context: __dirname + "/src",
  target: 'electron',
  entry: {
    app: "./app.js"
  },
  output: {
    path: __dirname + "/assets",
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  module: {
    rules: [
      {enforce: "pre", test: /\.js$/,  loader: "eslint-loader", exclude: /node_modules/},
      {
        test: /\.js$/,
        use: [
          {
          loader: "babel-loader",
          options: { presets: ["es2015", "react"] }
        }
      ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        },
        'css-loader', 'sass-loader'

      ]
    }
  ]
},
devServer: {
  contentBase: __dirname + "/src",
}
};
