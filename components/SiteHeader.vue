<template>
  <header class="site-header">
    <div class="container">
      <nav class="main-nav">
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
    </div>
  </header>
</template>

<style>
  .site-header {}

  .main-nav {}

  .main-nav__list {}

  .main-nav__list-item {}

  .main-nav__link {}
</style>