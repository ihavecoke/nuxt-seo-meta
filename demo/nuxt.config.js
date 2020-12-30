export default {
  mode: "universal",
  env: {
    tt: "hello tt!"
  },
  server: {
    timing: {
      total: true
    },
    host: "0.0.0.0",
    port: 4040
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#666" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  i18n: {
    locales: ["en", "zh-CN", "es"],
    defaultLocale: "zh-CN",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome"
        },
        "zh-CN": {
          welcome: "欢迎"
        },
        es: {
          welcome: "Bienvenido"
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    splitChunks: { layouts: true },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
