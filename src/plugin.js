import seoMeta from "./seo-meta"

const defaultOptions = <%= serialize(options) %>
// const defaultOptions = {}
export default (ctx, inject) => {
  const fn = (seoOptions, autoInjectToHead = true) => {
    const context = autoInjectToHead ? ctx : {}
    const { req, route } = ctx
    let defaultUrl = ""
    if (process.server)
      defaultUrl = `https://${req.headers?.host}${route.fullPath}`
    return seoMeta(
      { ...defaultOptions, ...{ url: defaultUrl }, ...seoOptions },
      context
    )
  }
  inject("seoMeta", fn)
}
