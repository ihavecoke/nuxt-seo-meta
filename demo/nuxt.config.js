export default {
  server: {
    timing: {
      total: true
    },
    host: "0.0.0.0",
    port: 4040
  },
  loading: { color: "#666" },
  modules: ["nuxt-seo-meta", "@nuxt/content"],
  seoMeta: {
    defaultImage: "defaultImage.png",
    defaultUrl: "https://facebook.com"
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    use: ["markdown-it-div", "markdown-it-attrs"]
  }
}
