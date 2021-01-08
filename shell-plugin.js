const fs = require("fs-extra")
const path = require("path")

class ShellPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Shell Plugin", _ => {
      fs.copySync(
        path.resolve(__dirname, "src/plugin.js"),
        path.resolve(__dirname, "dist/plugin.js")
      )
    })
  }
}

module.exports = ShellPlugin
