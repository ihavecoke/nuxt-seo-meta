import seoMeta from "./../src/seo-meta"

const title = "title"
const description = "description"
const url = "https://url.com"
const baseOptions = {
  title,
  description,
  url,
  ignoreTwitter: true,
  ignoreOG: true
}

test("should return default meta attributes", () => {
  const result = seoMeta({ defaultImage: "default.png", ...baseOptions })
  const expectValue = [
    { hid: "title", name: "title", content: "title" },
    { hid: "description", name: "description", content: "description" },
    { hid: "image", name: "image", content: "default.png" },
    { hid: "keywords", name: "keywords", content: "description" }
  ]
  expect(result).toStrictEqual(expectValue)
})

test("should return twitter meta if not ignore twitter meta", () => {
  const result = seoMeta({ ...baseOptions, ignoreTwitter: false })
  const expectValue = [
    { hid: "title", name: "title", content: "title" },
    { hid: "description", name: "description", content: "description" },
    { hid: "keywords", name: "keywords", content: "description" },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "https://url.com"
    },
    { hid: "twitter:title", name: "twitter:title", content: "title" },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "description"
    }
  ]
  expect(result).toStrictEqual(expectValue)
})

test("should return og meta info if not ignore og", () => {
  const result = seoMeta({ ...baseOptions, ignoreOG: false })
  const expectValue = [
    { hid: "title", name: "title", content: "title" },
    { hid: "description", name: "description", content: "description" },
    { hid: "keywords", name: "keywords", content: "description" },
    { hid: "og:title", property: "og:title", content: "title" },
    {
      hid: "og:description",
      property: "og:description",
      content: "description"
    },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:url", property: "og:url", content: "https://url.com" }
  ]
  expect(result).toStrictEqual(expectValue)
})

test("should return all support meta", () => {
  const result = seoMeta({
    ...baseOptions,
    ignoreOG: false,
    ignoreTwitter: false
  })
  const expectValue = [
    { hid: "title", name: "title", content: "title" },
    { hid: "description", name: "description", content: "description" },
    { hid: "keywords", name: "keywords", content: "description" },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "https://url.com"
    },
    { hid: "twitter:title", name: "twitter:title", content: "title" },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "description"
    },
    { hid: "og:title", property: "og:title", content: "title" },
    {
      hid: "og:description",
      property: "og:description",
      content: "description"
    },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:url", property: "og:url", content: "https://url.com" }
  ]
  expect(result).toStrictEqual(expectValue)
})
