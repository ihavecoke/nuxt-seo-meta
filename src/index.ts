// you can found more info: https://metatags.io/
interface ISeoMetaOptions {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string
  desc?: string
  locale?: string
  siteName?: string
  ignoreTwitter?: Boolean
  twitterUser?: string
  ignoreOG?: Boolean
  defaultImage?: string
  defaultUrl?: string
  defaultDescription?: string
}
export default function seoMeta(options: ISeoMetaOptions) {
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

  const metaTags: any[] = [baseMeta]
  if (!options.ignoreTwitter) metaTags.push(twitterMeta)
  if (!options.ignoreOG) metaTags.push(ogMeta)

  return metaTags.flat().reduce((memo, tag) => {
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
}
