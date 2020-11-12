module.exports = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Azure Test',
    titleTemplate: '%s - Azure Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.png' },
    ]
  },

  css: [
    'assets/styles.scss',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      'assets/_variables.scss',
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' },
  ]
}
