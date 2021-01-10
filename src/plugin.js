import seoMeta from './seo-meta'
const defaultOptions = <%= serialize(options) %>

export default (ctx, inject) => {
  const fn = seoOptions => seoMeta({...defaultOptions, ...seoOptions}, ctx)
  ctx.seoMeta = fn // to Compatible version <= 1.0.2
  inject('seoMeta', fn)
}
