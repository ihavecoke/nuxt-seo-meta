<template>
  <div>
    <div class="index-page">
      <h1>Nuxt SEO Meta</h1>
      <div>The doc just have writing</div>
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
  }
}
</script>
