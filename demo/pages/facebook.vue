<template>
  <div class="facebook-page">
    <h1>Generate facebook seo meta</h1>
    {{ JSON.stringify(Object.values($data)) }}
  </div>
</template>

<script>
export default {
  name: "FacebookPage",
  asyncData({ $seoMeta }) {
    return $seoMeta({
      ignoreTwitter: true,
      title: "facebook page title",
      url: "https://facebook.com",
      description: "facebook page description"
    })
  }
}
</script>
