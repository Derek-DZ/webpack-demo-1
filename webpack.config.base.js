const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "正",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader", // Or `url-loader` or your other loader
        },
      },
      {
        test: /\.styl$/i,
        use: ["style-loader", "css-loader", "stylus-loader"], // compiles Stylus to CSS
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"], // 将 Less 文件编译为 CSS 文件
      },
      {
        test: /\.scss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
          //或
          //   {
          //     loader: "sass-loader",
          //     options: {
          //       implementation: require("dart-sass"),
          //     },
          //   },
        ],
      },
    ],
  },
};
