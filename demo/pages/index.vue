<template>
  <div>
    <div class="index-page">
      <h1>Generate default seo meta</h1>
      <div v-html="$md.render(content)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    content() {
      return  "```javascript" +
        `${JSON.stringify(Object.values(this.$data))}` + "" +
        "```"

    }
  },
  asyncData({ $seoMeta }) {
    return $seoMeta({
      title: "PageTitle",
      description: "PageDescription",
      url: "PageUrl",
      image: "SocialShareImage.png"
    })
  }
}
</script>
