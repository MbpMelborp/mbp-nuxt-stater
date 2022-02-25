export default {
  mounted() {
    // Comes from plugin
    // this.$asScroll.scroll.enable(
    //   false,
    //   true,
    //   document.querySelector('.innerscroller')
    // )
  },

  beforeDestroy() {
    // Comes from plugin
    // this.$asScroll.scroll.$asScroll.disable()
  },
  methods: {
    imageLoaded(e) {
      console.log('imageLoaded', e)
      // this.$gsap.to(e.srcElement, { scaleX: 1.5, scaleY: 1, duration: 0.5 })
      this.$nuxt.$emit('update-locomotive')
    },
  },
}
