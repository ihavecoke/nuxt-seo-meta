import { ISeoMetaOptions } from "../type"

export function metaInfos(options: ISeoMetaOptions) {
  // default fallback
  const imageUrl = options.image || options.defaultImage
  const url = options.url || options.defaultUrl
  const description = options.description || options.defaultDescription
  const title = options.title

  const baseMeta = [
    { name: "title", content: title },
    { name: "description", content: description },
    { name: "image", content: imageUrl },
    { name: "keywords", content: options.keywords || description }
  ]
  // Facebook & LinkedIn
  const ogMeta = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
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
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl }
  ]

  const metaTags: any = [baseMeta]
  if (!options.ignoreTwitter) metaTags.push(twitterMeta)
  if (!options.ignoreOG) metaTags.push(ogMeta)

  const tags = metaTags.flat() as any[]
  return tags.reduce((memo: any, tag: any) => {
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
