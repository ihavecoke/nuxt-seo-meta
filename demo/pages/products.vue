<template>
  <div>
    <div class="products-page">
      <h3>Products page meta info:</h3>
      <p>{{ JSON.stringify($data) }}</p>
    </div>
    <nuxt-link to="/">Index Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  async asyncData({ $seoMeta }) {
    return $seoMeta({
      twitterUser: "ihavecoke"
    })
  }
}
</script>
