const { resolve } = require("path")

const CONFIG_KEY = 'seoMeta'
module.exports = function module(moduleOptions) {

  const options = {...this.options[CONFIG_KEY], ...moduleOptions}
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "plugin.js",
    options
  })
}

module.exports.meta = require("../package.json")
