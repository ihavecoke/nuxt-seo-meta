import seoMeta from "nuxt-seo-meta/runtime"
import { metaInfos } from "nuxt-seo-meta/runtime/metainfo"
import requrl from 'requrl'

const defaultOptions = <%= serialize(options) %>

export default (ctx, inject) => {

  // auto generate meta tags and inject to html head
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

  // generate raw meta tags, this will return meta info objects
  const metaInfosFn = (seoOptions) =>{
    const defaultUrl = process.server ? requrl(ctx.req, true) : requrl(/* uses url */)
    const options = {
      ...defaultOptions,
      url: defaultUrl,
      ...seoOptions
    }
    return metaInfos(options)
  }
  inject("metaInfos", metaInfosFn)
}
