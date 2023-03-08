const { VueLoaderPlugin } = require("vue-loader");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
      "@": path.resolve(__dirname, "src/"),
    },
    fallback: {
      util: false,
      os: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
              indentedSyntax: true, // optional
            },
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "CKeditor",
      template: "./src/index.html",
    }),
  ],
};
