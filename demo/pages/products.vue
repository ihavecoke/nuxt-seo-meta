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
  head({ $seoMeta }) {
    return {
      meta: $seoMeta(
        {
          twitterUser: "ihavecoke"
        },
        false
      )
    }
  }
}
</script>
