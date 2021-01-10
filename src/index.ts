const path = require("path")
import { Module } from "@nuxt/types"

interface ModuleOptions {}
const CONFIG_KEY = "seoMeta"

const nuxtModule: Module<ModuleOptions> = function module(
  moduleOptions: ModuleOptions
) {
  this.addPlugin({
    src: path.resolve(__dirname, "./plugin.js"),
    options: { ...this.options[CONFIG_KEY], ...moduleOptions },
    fileName: path.join("nuxt-seo-meta", "plugin.js")
  })

  this.addTemplate({
    src: path.resolve(__dirname, "./seo-meta.js"),
    fileName: path.join("nuxt-seo-meta", "seo-meta.js")
  })
}

;(nuxtModule as any).meta = require("../package.json")
export default nuxtModule
