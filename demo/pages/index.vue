<template>
  <div class="index-page">
    <h3>Current page meta info:</h3>
    <p>{{ JSON.stringify(meta) }}</p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data(){
    return {meta: {title: 'ss'}}
  },
  asyncData({ seoMeta }) {
    console.log('asyncData-15', )
    return {}
  }
}
</script>

<style scoped lang="scss">
.index-page {
}
</style>
