<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      console.log('LAODER start')
      this.loading = true
    },
    finish() {
      console.log('LAODER finish')

      this.loading = false
    },
  },
}
</script>
<style lang="postcss" scoped>
.loading-page {
  @apply bg-black-700 w-screen h-screen flex justify-center items-center;
}
.loading {
  @apply inline-block h-32 w-32 border-8 border-t-0 border-green-600 rounded-full animate-spin;
}
</style>
