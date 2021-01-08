// you can found more info: https://metatags.io/
import { merge, keyBy, values } from "lodash"

function seoMeta(options, nuxtContext = {}) {
  // default fallback
  const imageUrl = options.image || options.defaultImage
  const url = options.url || options.defaultUrl

  const baseMeta = [
    { name: "title", content: options.title },
    { name: "description", content: options.description },
    { name: "image", content: imageUrl },
    { name: "keyword", content: options.keywords || options.description }
  ]
  // Facebook & LinkedIn
  const ogMeta = [
    { property: "og:title", content: options.title },
    { property: "og:description", content: options.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:locale", content: options.locale },
    { property: "og:site_name", content: options.siteName }
  ]

  const twitterMeta = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: url },
    { name: "twitter:creator", content: options.twitterUser },
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: imageUrl }
  ]

  const metaTags = [baseMeta]
  if (!options.ignoreTwitter) metaTags.push(twitterMeta)
  if (!options.ignoreOG) metaTags.push(ogMeta)

  const normalizedMetas = metaTags.flat().reduce((memo, tag) => {
    if (!tag.content) return memo
    if (tag.name) {
      memo.push({
        hid: tag.name,
        name: tag.name,
        content: tag.content
      })
    } else if (tag.property) {
      memo.push({
        hid: tag.property,
        property: tag.property,
        content: tag.content
      })
    }
    return memo
  }, [])

  if (nuxtContext) {
    const { app: nuxtApp } = nuxtContext
    nuxtApp.head.meta = [...nuxtApp.head.meta, ...values(
      merge(keyBy(normalizedMetas, "hid"), keyBy(normalizedMetas, "hid"))
    )]
    return normalizedMetas
  } else {
    return normalizedMetas
  }
}

const defaultOptions = <%= serialize(options) %>

export default (ctx, inject) => {
  inject('seoMeta', seoOptions => seoMeta({...defaultOptions, ...seoOptions}, ctx))
}
