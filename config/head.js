// Global page headers: https://go.nuxtjs.dev/config-head
export default {
  head: {
    title: 'mbp-nuxt-starter',
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
    bodyAttrs: {
      class:
        (process.env.NODE_ENV === 'production'
          ? 'production'
          : 'development debug-screens') +
        ' ' +
        (process.client
          ? window.location.search.includes('_storyblok')
            ? 'editor'
            : ''
          : ''),
    },
  },
}
