<template>
  <nuxt-link :to="$i18n.path('')" exact class="site-logo">
    Nuxt Starter
  </nuxt-link>
</template>

<style>
  .site-logo {
    font-size: 86%;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    display: inline-block;
    vertical-align: bottom;
    border: 0;
  }
</style>
