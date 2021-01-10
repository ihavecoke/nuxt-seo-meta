const path = require("path")
import { Module } from "@nuxt/types"

interface ModuleOptions {}
const CONFIG_KEY = "seoMeta"
const nuxtModule: Module<ModuleOptions> = function module(
  moduleOptions: ModuleOptions
) {
  const src = path.resolve(__dirname, "./plugin.js")
  const options = { ...this.options[CONFIG_KEY], ...moduleOptions }
  const fileName = path.join("seo-meta", "plugin.js")
  this.addPlugin({ src, options, fileName })
  this.addTemplate({
    src: path.resolve(__dirname, "./seo-meta.js"),
    fileName: path.join("seo-meta", "seo-meta.js"),
    options
  })
}

;(nuxtModule as any).meta = require("../package.json")
export default nuxtModule
