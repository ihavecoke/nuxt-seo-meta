# nuxt-seo-meta

Support Nuxt generate SEO metadata easy

### Install

```bash
yarn add nuxt-seo-meta

//or npm
npm add nuxt-seo-meta
```

Add a config to `nuxt.config.js` file.

```javascript
{
  ... your options
  modules: [
    'nuxt-seo-meta',
  ],
  seoMeta: {
    title: 'SEO Meta Demo',
    description: 'SEO Description'
  }
}
```

use `$seoMeta` method in nuxtjs context, general we can use at `aysncData` hooks

```javascript
async asyncData({ $seoMeta }) {
  $seoMeta({
    title: "PageTitle",
    description: "PageDescription",
    url: "PageUrl",
    image: 'SocialShareImage.png'
  })
}
```

use in head options in page component

```javascript

head({$seoMeta}){
  return {
    meta: $seoMeta({title: 'title'...}, false)
  }
}

```

if you call `$seoMeta` in page `head` method you need assign the return value to **meta** options and pass the second args to `false`

the `$seoMeta` method support only return generate metadata if you pass `false` to the second argument.

the `false` options will not inject the metadata to html head tag, only will return the generate data to you



That all. you can inspect you page in Chrome developer tools

Here show the demo screenshot.

![DemoImage](http://public.mixbo.cn/nuxtjs-seo-meta.png?t)

### Options

Below options all effect html head meta tag

| options            |  type   |                                             description |
| ------------------ | :-----: | ------------------------------------------------------: |
| title              | string  |                       any thing you want to set to meta |
| description        | string  |                       any thing you want to set to meta |
| defaultDescription | string  |                    default description to you each page |
| url                | string  | current page url or other you want to share with others |
| defaultUrl         | string  |         default image when your page not present images |
| image              | string  |                            current page share image url |
| defaultImage       | string  |                    default current page share image url |
| locale             | string  |     current page locale, this option just present in og |
| siteName           | string  |        you web app name, this option just present in og |
| twitterUser        | string  |         you can share page to twitter with creator user |
| ignoreTwitter      | boolean |                            disable twitter seo metadata |
| ignoreOG           | boolean |                                 disable OG seo metadata |
