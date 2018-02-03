<template>
  <nav class="main-nav" role="navigation">
    <ul class="main-nav__list">
      <li class="main-nav__list-item">
        <nuxt-link class="main-nav__link" :to="$i18n.path('')" exact>{{ $t('links.home') }}</nuxt-link>
      </li>
      <li class="main-nav__list-item">
        <nuxt-link class="main-nav__link" :to="$i18n.path('about')" exact>{{ $t('links.about') }}</nuxt-link>
      </li>
      <li class="main-nav__list-item">
        <nuxt-link class="main-nav__link" v-if="$i18n.locale === 'en'" :to="`/ua` + $route.fullPath" active-class="none" exact>{{ $t('links.ukrainian') }}</nuxt-link>
        <nuxt-link class="main-nav__link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>{{ $t('links.english') }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @import "../assets/styles/base/variables";
  @import "../assets/styles/settings";

  .main-nav {
    display: inline-block;
    vertical-align: middle;
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

  .main-nav__link {
    text-decoration: none;
    color: $black;
    border-bottom: 1px solid transparent;

    &:hover,
    &.nuxt-link-active {
      border-color: currentcolor;
    }
  }
</style>