const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // If you need more entryPoints, add it here.
    scripts: "./src/entryPoints/scripts.js",
    images: "./src/entryPoints/images.js",
    fonts: "./src/entryPoints/fonts.js",
    styles: "./src/entryPoints/styles.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    writeToDisk: true,
    watchContentBase: true,
    publicPath: "/"
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
          //Entender como funciona el publicpath porque creo que si lo reconoce
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              // Mantiene actualizada la ruta de las imagenes
              // publicPath: "../images/", sera, en caso de que la aplicacion este albergada en public/,
              // sera actualizada a url/images en vez de url/public/images. Es recomendable dejar el publicPath con el outputPath.
              // Solo por actualizacion.
              // Ahora si funciona las rutas relativas (como debe ser).
              publicPath: "images/",
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
      template: "./src/templates/index.html",
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
