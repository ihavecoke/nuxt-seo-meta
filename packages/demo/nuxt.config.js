import nuxtSeoMeta from "nuxt-seo-meta/src"

export default {
  loading: { color: "#666" },
  modules: ["@nuxt/typescript-build", nuxtSeoMeta],
  seoMeta: {
    defaultImage: "defaultImage.png",
    defaultUrl: "https://facebook.com"
  }
}
