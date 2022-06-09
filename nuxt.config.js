import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - imagine_wa',
    title: 'imagine_wa',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{
      src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js",
    }]
  },
  publicRuntimeConfig: {
    API_GATEWAY: process.env.API_GATEWAY_URL,
    STORAGE_MS: process.env.STORAGE_MS_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/storage-api' },
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_GATEWAY_URL,
  },

  server: {
    port: 4500,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#04052e',
          accent: '#0d00a4',
          secondary: '#22007c',
          info: '#87bfff',
          warning: '#ffc409',
          error: '#eb445a',
          success: '#2317ac',
          light: '#add7f6'
            // primary: colors.blue.darken2,
            // accent: colors.grey.darken3,
            // secondary: colors.amber.darken3,
            // info: colors.teal.lighten1,
            // warning: colors.amber.base,
            // error: colors.deepOrange.accent4,
            // success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    axios: {},
    API_GATEWAY: process.env.API_GATEWAY_URL,
    STORAGE_MS: process.env.STORAGE_MS_URL,
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_GATEWAY_URL,
    },
  }
}