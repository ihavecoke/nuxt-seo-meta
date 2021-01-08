const path = require("path")
const ShellPlugin = require(path.resolve(__dirname, "shell-plugin.js"))

module.exports = {
  devtool: false,
  entry: {
    module: "./src/module.ts"
  },
  mode: "production",
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new ShellPlugin()],
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
