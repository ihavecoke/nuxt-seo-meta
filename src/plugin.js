import seoMeta from "./seo-meta"

const defaultOptions = <%= serialize(options) %>
export default (ctx, inject) => {
  const fn = (seoOptions, autoInjectToHead = true) => {
    const context = autoInjectToHead ? ctx : {}
    return seoMeta({ ...defaultOptions, ...seoOptions }, context)
  }
  inject("seoMeta", fn)
}
