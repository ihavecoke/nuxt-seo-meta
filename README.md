# nuxtjs-seo-meta
Support Nuxtjs generate SEO metadata

you can define seo metadata in different page

###Install
```bash
yarn add nuxtjs-seo-meta
 
// or npm 
npm add nuxtjs-seo-meta
```

add config to `nuxt.config.js`

```javascript
modules:[
  // ... your other modules
  ['nuxtjs-seo-meta',{
    defaultImage: 'https://fakeimg.pl/400x400/?text=DefaultImage',
    defaultUrl: 'https://facebook.com'
      // ... more options
  }]
]
```

use `seoMeta` method in nuxtjs context, general we can use at `aysncData` hooks

```javascript
async asyncData({ seoMeta }) {
  seoMeta({
    title: "PageTitle",
    description: "PageDescription",
    url: "PageUrl",
    image: 'SocialShareImage.png'
  })
}
```

That all, you can inspect you page in chrome developer tools, here i just show demo screenshot

![DemoImage](http://public.mixbo.cn/nuxtjs-seo-meta.png)

### Options

Below options all effect html head meta tag

| options        | type           | description  |
| ------------- |:-------------:| -----:|
| title      | string  | any thing you want to set to meta |
| description      | string  | any thing you want to set to meta |
| url      | string  | current page url or other you want to share with others |
| defaultUrl      | string  | default image when your page not present images  |
| image      | string  | current page share image url |
| defaultImage      | string  | current page share image url |
| locale      | string  | current page locale, this option just present in og |
| siteName      | string  | you web app name, this option just present in og |
| twitterUser      | string  | you can share page to twitter with creator user |
| ignoreTwitter      | boolean  | disable twitter seo metadata |
| ignoreOG      | boolean  | disable OG seo metadata |

