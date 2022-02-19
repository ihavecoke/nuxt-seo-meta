import { resolve } from "path"
import type { Module } from "@nuxt/types"

interface ModuleOptions {}

const CONFIG_KEY = "seoMeta"

const nuxtModule: Module<ModuleOptions> = function module(
  moduleOptions: ModuleOptions
) {
  this.addPlugin({
    src: resolve(__dirname, "./runtime/plugin.js"),
    options: { ...this.options[CONFIG_KEY], ...moduleOptions },
    fileName: "nuxt-seo-meta/plugin.js"
  })

  const runtimeDir = resolve(__dirname, "runtime")
  this.nuxt.options.alias["nuxt-seo-meta/runtime"] = runtimeDir
  this.nuxt.options.build.transpile.push(runtimeDir, "nuxt-seo-meta", "requrl")
}

;(nuxtModule as any).meta = require("../package.json")

export default nuxtModule
