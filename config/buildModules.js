// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export default {
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // 'nuxt-vite', elimanado nost stable
    'nuxt-webpack-optimisations', // optimizacion de la construccion
    'nuxt-gsap-module', // animaciones
    'nuxt-compress',
    // '@nuxt/image', // si server.js es static
  ],

  /**
   * WEBPACK
   */
  webpackOptimisations: {
    // hard source is the riskiest, if you have issues don't enable it
    hardSourcePlugin: process.env.NODE_ENV === 'development',
    parallelPlugin: process.env.NODE_ENV === 'development',
  },

  /**
   * GSAP
   */
  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },
}
