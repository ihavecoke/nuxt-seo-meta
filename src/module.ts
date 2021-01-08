const { resolve } = require("path")
import { Module } from "@nuxt/types"

interface ModuleOptions {}
const CONFIG_KEY = "seoMeta"
const nuxtModule: Module<ModuleOptions> = function module(
  moduleOptions: ModuleOptions
) {
  const src = resolve(__dirname, "./plugin.js")
  const options = { ...this.options[CONFIG_KEY], ...moduleOptions }
  this.addPlugin({ src, options })
}

;(nuxtModule as any).meta = require("../package.json")
export default nuxtModule
