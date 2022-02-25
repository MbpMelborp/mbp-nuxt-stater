import Vue from 'vue'
// import ASSCroll from '@ashthornton/asscroll'
import { gsap, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const asscrollOptions = {
  // disableRaf: true,
  // ease: 0.075 // default
  // customScrollbar: true
}

const asScroll = {
  scroller: null,
  type: 'hello',
}
console.log('HEY', asScroll, asscrollOptions)
asScroll.init = () => {
  console.log('INIT SCROLLER', this)

  //   this.scroller = new ASSCroll(asscrollOptions)
  //   this.scroller = document.documentElement.scrollTop = 0
  //   this.scroller.on('scroll', ScrollTrigger.update)
  //   ScrollTrigger.defaults({
  //     scroller: '.innerscroller',
  //     //  markers: true
  //   })
  //   ScrollTriggerProxy()
  //   this.scroller.on('raf', ScrollTrigger.update)

  //   ScrollTrigger.addEventListener('refresh', () => this.scroller.onResize())
  //   ScrollTrigger.refresh()

  //   this.scroller.enable(false, true, document.querySelector('.innerscroller'))
  //   this.scroller.onResize(window.innerWidth, window.innerHeight)
}

// each time asScroll updates, tell ScrollTrigger to update too (sync positioning)

// after everything is set up, refresh() ScrollTrigger and update asscroll because padding may have been added for pinning, etc.

// function ScrollTriggerProxy() {
//   return ScrollTrigger.scrollerProxy('.innerscroller', {
//     scrollTop(value) {
//       return arguments.length
//         ? asScroll.scrollTo(value)
//         : -asScroll.smoothScrollPos
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       }
//     },
//   })
// }

Object.defineProperty(Vue.prototype, 'gsap', {
  value: gsap,
})
Object.defineProperty(Vue.prototype, 'ScrollTrigger', {
  value: ScrollTrigger,
})

export default (context, inject) => {
  inject('asScroll', asScroll)
}
