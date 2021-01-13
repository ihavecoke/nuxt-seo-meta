<template>
  <div class="twitter-page">
    <h1>Generate twitter seo meta</h1>
    {{ JSON.stringify(Object.values($data)) }}
  </div>
</template>

<script>
export default {
  name: "TwitterPage",
  asyncData({ $seoMeta }) {
    return $seoMeta({
      ignoreOG: true,
      title: "Twitter page title",
      url: "https://twitter.com",
      description: "Twitter page description"
    })
  }
}
</script>
