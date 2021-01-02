<template>
  <div class="index-page">
    <h3>Current page meta info:</h3>
    <p>{{ JSON.stringify($data) }}</p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  asyncData({ seoMeta }) {
    return seoMeta({
      title: "PageTitle",
      description: "PageDescription",
      url: "PageUrl",
      image: 'SocialShareImage.png'
    })
  }
}
</script>

<style scoped lang="scss">
.index-page {
}
</style>
