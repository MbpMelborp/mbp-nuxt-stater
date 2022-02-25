export default {
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    transpile: ['gsap'],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  extend(config, ctx) {
    // config.node = {
    //   fs: 'empty',
    // }
    // if (ctx.isDev) {
    //   config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
    // }
    // config.module.rules.push({
    //   test: /\.(glsl|frag|vert)$/,
    //   loader: 'raw-loader',
    //   exclude: /node_modules/,
    // })
    // config.module.rules.push({
    //   test: /\.(glsl|frag|vert)$/,
    //   loader: 'glslify-loader',
    //   exclude: /node_modules/,
    // })
  },
}
