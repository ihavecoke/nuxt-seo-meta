const path = require("path")

module.exports = {
  devtool: "source-map",
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
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
