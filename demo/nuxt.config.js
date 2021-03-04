import nuxtSeoMeta from '../src'

export default {
  loading: { color: "#666" },
  modules: [
    '@nuxt/typescript-build',
    nuxtSeoMeta
  ],
  seoMeta: {
    defaultImage: "defaultImage.png",
    defaultUrl: "https://facebook.com"
  }
}
