<template>
  <main role="main">
    <site-header/>
    <nuxt/>
  </main>
</template>

<script>
  import SiteHeader from '~/components/SiteHeader.vue'

  export default {
    components: {
      SiteHeader
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/base/variables";
  @import "../assets/styles/settings";
</style>