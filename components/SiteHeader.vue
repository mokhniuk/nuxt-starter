<template>
  <header class="site-header">
    <div class="container">
      <logo/>
      <nav class="main-nav">
        <ul class="main-nav__list">
          <li class="main-nav__list-item">
            <nuxt-link class="main-nav__link" :to="$i18n.path('')" exact>{{ $t('links.home') }}</nuxt-link>
          </li>
          <li class="main-nav__list-item">
            <nuxt-link class="main-nav__link" :to="$i18n.path('about')" exact>{{ $t('links.about') }}</nuxt-link>
          </li>
          <li class="main-nav__list-item main-nav__list-item--lang">
            <nuxt-link class="main-nav__link" v-if="$i18n.locale === 'en'" :to="`/ua` + $route.fullPath" active-class="none" exact>{{ $t('links.ukrainian') }}</nuxt-link>
            <nuxt-link class="main-nav__link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>{{ $t('links.english') }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
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

  .main-nav {
    display: inline-block;
    vertical-align: middle;
  }

  .site-logo {
    margin-bottom: 1em;
    width: 100%;
  }

  .main-nav__list {
    display: block;
    list-style-type: none;
  }

  .main-nav__list-item {
    display: inline-block;
    margin-right: 2em;

    &:last-of-type,
    &:last-child {
      margin-right: 0
    }
  }

  .main-nav__list-item--lang {
    float: right;
  }

  .main-nav__link {
    text-decoration: none;
    color: $black;
    border-bottom: 1px solid transparent;

    &:hover,
    &.nuxt-link-active {
      border-color: currentcolor;
    }
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