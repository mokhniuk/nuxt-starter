<template>
  <header class="site-header">
    <div class="container">
      <logo/>
      <site-nav/>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import SiteNav from '~/components/SiteNav.vue'

  export default {
    components: {
      Logo,
      SiteNav
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/base/variables";
  @import "../assets/styles/settings";

  .site-header {
    background-color: $white;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .site-logo {
    margin-bottom: 1em;
    width: 100%;
  }

  @media screen and(min-width: 600px) {
    .site-header {
      text-align: left;
    }

    .site-logo {
      margin-bottom: 0;
      width: auto;
    }

    .site-logo + .main-nav {
      margin-left: 2em;
    }
  }
</style>