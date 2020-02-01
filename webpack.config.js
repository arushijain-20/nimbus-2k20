const path = require("path");
const webpack = require("webpack");
const ExtractCssPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const extractPlugin = new ExtractCssPlugin({
  filename: "css/[name].css"
});

module.exports = {
  entry: {
    main: "./src/js/entryPoints/main.js",
    register: "./src/js/entryPoints/register.js",
    events: "./src/js/entryPoints/events.js",
    sponsors: "./src/js/entryPoints/sponsors.js",
    about: "./src/js/entryPoints/about.js",
    e404: "./src/js/entryPoints/e404.js",
    initiatives: "./src/js/entryPoints/initiatives.js",
    lectures: "./src/js/entryPoints/lectures.js",
    technoworks: "./src/js/entryPoints/technoworks.js",
    workshops: "./src/js/entryPoints/workshops.js",
    departmental_events: "./src/js/entryPoints/departmental_events.js",
    mega_events: "./src/js/entryPoints/mega_events.js",
    team: "./src/js/entryPoints/team.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: ExtractCssPlugin.loader, options: { publicPath: "/" } },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: ExtractCssPlugin.loader, options: { publicPath: "/" } },
          "css-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpeg|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              esModule: false,
              outputPath: "img/",
              publPath: "img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    new webpack.ProvidePlugin({
      anime: "animejs"
    }),

    extractPlugin,

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "events.html",
      template: "./src/events.html",
      chunks: ["events"]
    }),
    new HtmlWebpackPlugin({
      filename: "team.html",
      template: "./src/team.html",
      chunks: ["team"]
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/register.html",
      chunks: ["register"]
    }),
    new HtmlWebpackPlugin({
      filename: "sponsors.html",
      template: "./src/sponsors.html",
      chunks: ["sponsors"]
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
      chunks: ["about"]
    }),
    new HtmlWebpackPlugin({
      filename: "e404.html",
      template: "./src/e404.html",
      chunks: ["e404"]
    }),
    new HtmlWebpackPlugin({
      filename: "initiatives.html",
      template: "./src/initiatives.html",
      chunks: ["initiatives"]
    }),
    new HtmlWebpackPlugin({
      filename: "lectures.html",
      template: "./src/lectures.html",
      chunks: ["lectures"]
    }),
    new HtmlWebpackPlugin({
      filename: "technoworks.html",
      template: "./src/technoworks.html",
      chunks: ["technoworks"]
    }),
    new HtmlWebpackPlugin({
      filename: "workshops.html",
      template: "./src/workshops.html",
      chunks: ["workshops"]
    }),
    new HtmlWebpackPlugin({
      filename: "departmental_events.html",
      template: "./src/departmental_events.html",
      chunks: ["departmental_events"]
    }),
    new HtmlWebpackPlugin({
      filename: "mega_events.html",
      template: "./src/mega_events.html",
      chunks: ["mega_events"]
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["public"]
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ]
};
