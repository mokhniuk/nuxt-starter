module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 
  css: [
    '~/assets/styles/main.scss'
  ],
  // 
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'black' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-i18n'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /* 
  ** Router 
  */
  router: {
    middleware: 'i18n'
  },
  /* 
  ** Plugins 
  */
  plugins: ['~/plugins/i18n.js'],
  /*
  ** Routes to generate
  */
  generate: {
    routes: ['/', '/about', '/ua', '/ua/about']
  }
}
