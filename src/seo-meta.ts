// you can found more info: https://metatags.io/
import merge from "lodash/merge"
import flatten from "lodash/flatten"
import keyBy from "lodash/keyBy"
import values from "lodash/values"
import { Context } from "@nuxt/types/app"

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

export default function seoMeta(
  options: ISeoMetaOptions,
  nuxtContext: Context = {} as Context
) {
  // default fallback
  const imageUrl = options.image || options.defaultImage
  const url = options.url || options.defaultUrl
  const description = options.description || options.defaultDescription

  const baseMeta = [
    { name: "title", content: options.title },
    { name: "description", content: description },
    { name: "image", content: imageUrl },
    { name: "keywords", content: options.keywords || description }
  ]
  // Facebook & LinkedIn
  const ogMeta = [
    { property: "og:title", content: options.title },
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
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl }
  ]

  const metaTags: any = [baseMeta]
  if (!options.ignoreTwitter) metaTags.push(twitterMeta)
  if (!options.ignoreOG) metaTags.push(ogMeta)

  const tags = flatten(metaTags) as any[]
  const normalizedMetas = tags.reduce((memo: any, tag: any) => {
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

  if (nuxtContext.app) {
    const { app: nuxtApp } = nuxtContext
    nuxtApp.head.meta = [
      ...nuxtApp.head.meta,
      ...values(
        merge(keyBy(normalizedMetas, "hid"), keyBy(normalizedMetas, "hid"))
      )
    ]
  }
  return normalizedMetas
}
