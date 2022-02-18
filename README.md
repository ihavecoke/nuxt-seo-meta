# nuxt-seo-meta

Support [Nuxt](https://nuxtjs.org/) generate seo metadata easy

### Install

```bash
yarn add nuxt-seo-meta

//or npm
npm add nuxt-seo-meta
```
That's all.

### Usage

You can global config seo metadata in `nuxt.config.js`

```typescript
{
  // your configurations
  modules: [
    'nuxt-seo-meta',
  ], 
    
  // global set your site page title and descriptions 
  seoMeta: {
    title: 'My site title',
    keywords: 'keyword1, keyword2, keyword3',
    description: 'My site description',
  }
}
```


Also you can set seo metadata in page file component like ***pages/index.vue***, 
there has two ways to set seo metadata.

* at `asyncData` function

```javascript
async asyncData({ $seoMeta }) {
  $seoMeta({
    title: "My awesome site",
    description: "awesome site description",
    url: "https://awesome.site",
    image: 'https://awesome.cdn/awesome.png'
  })
}
```
`$seoMeta` is a function that will automate generate seo metadata html tag for you page.

* at `head` function

```javascript
head({$seoMeta}){
  return {
    meta: $seoMeta({
      title: "My awesome site",
      description: "awesome site description",
      url: "https://awesome.site",
      image: 'https://awesome.cdn/awesome.png'
    }, false)
  }
}
```

it important to note that, if call `$setMeta` in `head` function, the second parameter must be `false`. 

`false` told nuxt-seo-meta only return a metadata object not generate meta tags.

this is useful when you want to set meta tags in your page component and merge with more head data.

> Demo screenshot
![DemoImage](http://public.mixbo.cn/nuxtjs-seo-meta.png?t)
> `$seoMeta` function will return or generate meta tags for `og`, `twitter`

### Support config options

Below options all effect html head meta tag

| options            |  type   |                                             description |
|--------------------|:-------:|--------------------------------------------------------:|
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
