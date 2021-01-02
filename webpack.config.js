const path = require("path")

module.exports = {
  devtool: false,
  entry: {
    plugin: "./src/plugin.ts"
  },
  mode: "production",
  output: {
    filename: "[name].js",
    libraryTarget: "amd",
    path: path.resolve(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}
