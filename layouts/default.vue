<template>
  <div class="container">
    <client-only>
      <Nuxt />
    </client-only>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center;
}
</style>
