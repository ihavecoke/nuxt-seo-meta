// you can fund more info: https://metatags.io/

import type { Context } from "@nuxt/types/app"

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

  const tags = metaTags.flat() as any[]
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
    if (nuxtApp.head && typeof nuxtApp.head !== "function") {
      nuxtApp.head.meta = [
        ...(nuxtApp.head.meta || []),
        ...(Object.values({
          ...keyBy(nuxtApp.head.meta || [], "hid"),
          ...keyBy(normalizedMetas, "hid")
        }) as any)
      ]
    }
  }
  return normalizedMetas
}

function keyBy(arr: Array<any>, key: string) {
  const obj: any = {}
  for (const val of arr) {
    obj[val[key] as string] = val
  }
  return obj
}
