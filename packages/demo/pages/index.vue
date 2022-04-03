<template>
  <div>
    <div class="index-page">
      <h1>nuxt seo metadata demo page</h1>
      <h3>This page is used to test the nuxt seo metadata plugin.</h3>
      <ul>
        <li>you can see the browser tab title 'SEO Meta - Title'</li>
        <li>you can open devtool element tab and search the &lt;head&gt; tag. more &lt;meta&gt; info generate for you.</li>
        <li>change the title or more meta info read <a href="https://github.com/ihavecoke/nuxt-seo-meta" target="_blank">this</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  asyncData({ $seoMeta }) {
    // $seoMeta({
    //   title: "Index Page Title",
    //   description: "Index page description",
    // })
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 600px;
  margin: 0 auto;
  ul {
    padding: 0;
    padding-left: 10px;
    margin: 0;
    li {
      margin: 10px 0;
    }
  }
}
</style>
