export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'دوره ناکست وب آموز',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'دوره ناکست وب آموز که در این دوره میخایم چندتا مینی پروژه ایجاد کنیم',
        hid: 'description'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma/css/bulma.css',
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // client
    // { src: '~/plugins/vue-easy-toast.js', mode: 'client' }
    '~/plugins/vue-easy-toast.client.js'

    
    // server
    // { src: '~/plugins/vue-easy-toast.js', mode: 'server' }
    // '~/plugins/vue-easy-toast.server.js'


    // both client & server
    // { src: '~/plugins/vue-easy-toast.js' }
    // '~/plugins/vue-easy-toast.js'
  ],

  transpile: [
    '~/plugins/vue-easy-toast.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // components: [
  //   '~/components',
  //   '~/custom-dir'
  // ]

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      Authorization: 'Bearer token'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
