import seoMeta from "nuxt-seo-meta/runtime"
import requrl from 'requrl'

const defaultOptions = <%= serialize(options) %>

export default (ctx, inject) => {
  const fn = (seoOptions) => {
    const defaultUrl = process.server ? requrl(ctx.req, true) : requrl(/* uses url */)
    const options = {
      ...defaultOptions,
      url: defaultUrl,
      ...seoOptions
    }
    return seoMeta(options, ctx)
  }
  inject("seoMeta", fn)
}
