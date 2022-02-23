// meta tags with more providers visited: https://metatags.io/
import type { Context } from "@nuxt/types/app"
import { ISeoMetaOptions } from "../type"
import { metaInfos } from "./metainfo"

export default function seoMeta(
  options: ISeoMetaOptions,
  nuxtContext: Context = {} as Context
) {
  const normalizedMetas = metaInfos(options)

  if (nuxtContext.app) {
    const { app: nuxtApp } = nuxtContext
    if (nuxtApp.head && typeof nuxtApp.head !== "function") {
      // compose meta tags
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
