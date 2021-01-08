# nuxt-seo-meta
Support Nuxt generate SEO metadata easy

### Install

```bash
yarn add nuxtjs-seo-meta

// or npm 
npm add nuxtjs-seo-meta
```

Add a config to `nuxt.config.js` file.
https://nuxtjs.org/docs/2.x/directory-structure/plugins#inject-in-root--context
```javascript
{
  ...your options
  modules: [
    'nuxt-seo-meta',
  ],
  // ... your other modules
  seoMeta: {
    title: 'SEO Meta Demo',
    description: 'SEO Description'
    // ... more options
  }
}
```

use \$seoMeta method in nuxtjs context, general we can use at `aysncData` hooks

``` javascript
async asyncData({ \$seoMeta }) {
  \$seoMeta({
    title: "PageTitle",
    description: "PageDescription",
    url: "PageUrl",
    image: 'SocialShareImage.png'
  })
}
```

That all, you can inspect you page in Chrome developer tools, here just show demo screenshot

![DemoImage](http://public.mixbo.cn/nuxtjs-seo-meta.png?t)

### Options

Below options all effect html head meta tag

| options        | type           | description  |
| ------------- |:-------------:| -----:|
| title      | string  | any thing you want to set to meta |
| description      | string  | any thing you want to set to meta |
| url      | string  | current page url or other you want to share with others |
| defaultUrl      | string  | default image when your page not present images  |
| image      | string  | current page share image url |
| defaultImage      | string  | default current page share image url |
| locale      | string  | current page locale, this option just present in og |
| siteName      | string  | you web app name, this option just present in og |
| twitterUser      | string  | you can share page to twitter with creator user |
| ignoreTwitter      | boolean  | disable twitter seo metadata |
| ignoreOG      | boolean  | disable OG seo metadata |

