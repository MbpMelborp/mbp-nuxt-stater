export default {
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image', // si server.js es static
    'nuxt-client-init-module',
  ],

  /**
   * -NUXT IMAGES
   */
  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com',
    },
    presets: {
      // cover: {
      //   modifiers: {
      //     fit: 'cover',
      //     format: 'jpg',
      //     width: 300,
      //     height: 300,
      //   },
      // },
    },
  },
}
