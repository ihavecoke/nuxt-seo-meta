<template>
  <el-container class="layout">
    <el-header class="header">
      <img src="~/assets/seo-meta-logo.svg" alt="logo" class="logo" />
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu default-active="General" class="el-menu-vertical-demo">
          <el-menu-item index="General">
            <span slot="title">
              <NuxtLink to="/">General</NuxtLink>
            </span>
          </el-menu-item>
          <el-menu-item index="Twitter">
            <span slot="title"> <NuxtLink to="/twitter">Twitter</NuxtLink></span>
          </el-menu-item>
          <el-menu-item index="Facebook">
            <span slot="title"> <NuxtLink to="/facebook">Facebook</NuxtLink></span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><nuxt></nuxt></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #ebeef5;
}
.logo {
  width: 100px;
}
.aside {
  width: 200px !important;
  .el-menu {
    text-align: right;
    height: 100vh !important;
    a {
      text-decoration: none;
    }
  }
}
</style>
