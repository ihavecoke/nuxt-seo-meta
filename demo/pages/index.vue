<template>
  <div>
    <div class="index-page">
      <h1>Nuxt SEO Meta</h1>
      <nuxt-content :document="readme" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head({ $seoMeta }) {
    return {
      meta: $seoMeta({
        title: "PageTitle",
        description: "PageDescription",
        url: "PageUrl",
        image: "SocialShareImage.png"
      })
    }
  },
  async asyncData({ $content }) {
    return { readme: await $content("readme").fetch() }
  }
}
</script>
