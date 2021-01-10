const path = require("path")
const ShellPlugin = require(path.resolve(__dirname, "shell-plugin.js"))
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/index.ts",
    "seo-meta": "./src/seo-meta.ts"
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new ShellPlugin(), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __dirname: false
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: { path: require.resolve("path-browserify") }
  }
}
