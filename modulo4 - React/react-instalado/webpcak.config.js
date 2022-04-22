// const path = require('path')

// modules.exports = {
//   mode: "production", //"dev": "webpack --node development" passando a função dev no webpack.config.js, nao aceita comentarios no json, entao coloquei comentado na linha que pode ser substituida
//   entry:'./src/App.js',
//   output:{
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bondler.js'
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: path.resolve(__dirname, "src/index.js"),
//   output: {
//     path: path.resolve(__dirname, "output"),
//     filename: "bundle.js",
//   },
//   resolve: {
//     extensions:  ['*', '.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       filename: "./index.html",
//     }),
//   ],
// };

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  mode: "development",
};
