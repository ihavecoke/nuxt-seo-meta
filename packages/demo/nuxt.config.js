import nuxtSeoMeta from "nuxt-seo-meta/src"

export default {
  loading: { color: "#666" },
  modules: ["@nuxt/typescript-build", nuxtSeoMeta],
  seoMeta: {
    title: "SEO Meta - Title",
    description: "SEO Meta - Description",
    defaultImage: "defaultImage.png",
    defaultUrl: "https://longbridgeapp.com"
  }
}
