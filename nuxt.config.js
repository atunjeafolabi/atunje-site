export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'atunje-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/jquery.pagepiling.css' },
      { rel: 'stylesheet', href: 'css/fontawesome-free/css/fontawesome.min.css' },
      { rel: 'stylesheet', href: 'css/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: 'fonts/flaticon.css' },
      { rel: 'stylesheet', href: 'css/plugins.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
      { rel: 'stylesheet', href: 'css/color.css' },
    ],
    script: [
      {
        // type: 'module',
        src: 'js/jquery.min.js'
      },
      {
        // type: 'module',
        src: 'js/popper.min.js'
      },
      {
        // type: 'module',
        src: 'js/bootstrap.min.js'
      },
      {
        // type: 'module',
        src: 'js/plugins.js',
      },
      {
        // type: 'module',
        src: 'js/particles.min.js'
      },
      {
        // type: 'module',
        src: 'js/app.js'
      },
      {
        // type: 'module',
        src: 'js/jquery.pagepiling.min.js'
      },
      {
        // type: 'module',
        src: 'js/custom.js'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    base: '/atunje-site/'
  }
}
