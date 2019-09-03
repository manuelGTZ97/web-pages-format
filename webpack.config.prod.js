const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log("uwu");
const config = {
  mode: "production",
  entry: {
    // If you need more entryPoints, add it here.
    scripts: "./src/entryPoints/scripts.js",
    styles: "./src/entryPoints/styles.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./.config"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./.config"
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/images/, /node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
              publicPath: "fonts/",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/fonts/, /node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              publicPath: "images/",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "staticFiles/",
              publicPath: "staticFiles/",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.gz$/,
        enforce: "pre",
        use: "gzip-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    //https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      template: path.join(__dirname, "./src/templates/index.html"),
      hash: true
    }),
    new ImageminPlugin({
      bail: false,
      cache: false,
      imageminOptions: {
        plugins: [
          imageminGifsicle({
            interlaced: true
          }),
          imageminJpegtran({
            progressive: true
          }),
          imageminOptipng({
            optimizationLevel: 8
          }),
          imageminSvgo({
            removeViewBox: true
          })
        ]
      }
    })
  ]
};

module.exports = config;
