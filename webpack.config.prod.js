const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: "[name].[contentHash].css",
      chunkFilename: "[id].[contentHash].css",
      ignoreOrder: false, // 忽略有关顺序冲突的警告
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 你可以在这里指定特定的 publicPath
              // 默认情况下使用 webpackOptions.output 中的 publicPath
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
