export default {
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    },
    afterLeave(el) {
      console.log('afterLeave', el)
    },
  },
}
