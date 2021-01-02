const { resolve } = require("path")

module.exports = function module(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "plugin.js",
    options: moduleOptions
  })
}

module.exports.meta = require("../package.json")
