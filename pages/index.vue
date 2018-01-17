<template>
  <main>
    <div class="container">
      <logo/>
    </div>
  </main>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style>
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
    box-sizing: content-box;
  }
</style>
