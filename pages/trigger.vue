<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      direction: 'vertical',
      smartphone: {
        direction: 'vertical',
      },
      tablet: {
        direction: 'vertical',
      },
    }"
    @init="locomotive = $refs.scroller.locomotive"
  >
    <div class="example vertical">
      <header data-scroll-section>
        <h1>Gsap Scroll Trigger</h1>
      </header>
      <div class="example-section" data-scroll-section>
        <div
          v-gsap.fromTo="[
            { opacity: 0, y: -350 },
            { opacity: 1, y: 0, duration: 3 },
          ]"
          class="example-content"
        >
          <div class="example-big-square">
            <NuxtImg
              provider="storyblok"
              width="500"
              height="500"
              fit="in"
              format="webp"
              quality="80"
              :modifiers="{ filters: { fill: 'CCCCCC' } }"
              src="https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg"
            />
          </div>
          <div class="example-small-square" data-scroll-trigger />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-small-square" data-scroll-trigger>
            <nuxt-img
              format="webp"
              quality="80"
              src="https://random.imagecdn.app/800/600"
              @load="imageLoaded"
            />
          </div>
          <div class="example-big-square">
            <NuxtImg
              width="600"
              height="130"
              provider="storyblok"
              src="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"
              @load="imageLoaded"
            />
            <NuxtImg
              width="600"
              height="130"
              :modifiers="{ smart: true }"
              provider="storyblok"
              src="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"
              @load="imageLoaded"
            />
          </div>
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div class="example-big-square">
            <nuxt-img
              format="webp"
              quality="80"
              src="https://random.imagecdn.app/800/600"
              sizes="sm:100vw md:50vw lg:400px"
              @load="imageLoaded"
            />
          </div>

          <div class="example-small-square" data-scroll-trigger>
            <NuxtImg
              width="600"
              height="130"
              :modifiers="{ filters: { focal: '450x500:550x600' } }"
              provider="storyblok"
              src="https://a.storyblok.com/f/39898/1000x600/d962430746/demo-image-human.jpeg"
              @load="imageLoaded"
            />
            <NuxtImg
              width="600"
              height="130"
              :modifiers="{ filters: { focal: '450x0:550x100' } }"
              provider="storyblok"
              src="https://a.storyblok.com/f/39898/1000x600/d962430746/demo-image-human.jpeg"
              @load="imageLoaded"
            />
          </div>
        </div>
      </div>
      <footer data-scroll-section>
        <nuxt-link to="/"> Go to Image Loads </nuxt-link>
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>
import globalMixin from '~/mixins/globals.js'
export default {
  mixins: [globalMixin],
  data: () => ({
    locomotive: undefined,
  }),
  watch: {
    locomotive: {
      handler() {
        this.locomotive.on('scroll', this.$ScrollTrigger.update)
        const locomotive = this.locomotive
        this.$ScrollTrigger.scrollerProxy(locomotive.el, {
          scrollTop(value) {
            return arguments.length
              ? locomotive.scrollTo(value, 0, 0)
              : locomotive.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          pinType: document.querySelector('.js-locomotive').style.transform
            ? 'transform'
            : 'fixed',
        })

        const elements = document.querySelectorAll('[data-scroll-trigger]')
        elements.forEach((element) => this.elementAnimation(element))
      },
    },
  },
  methods: {
    elementAnimation(element) {
      this.$gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top bottom',
          end: 'bottom center',
        },
        scaleY: 0,
        opacity: 0.5,
        ease: 'none',
      })
    },
  },
}
</script>

<style lang="postcss">
body {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
  background-color: #9b9b9b;
  margin: 0;
}

header {
  padding: 12.5vw 6.25vw;
  h1 {
    font-size: 11vw;
    line-height: 1;
    margin: 0;
    color: #000;
  }
}

footer {
  padding: 12.5vw 6.25vw;
  a {
    font-size: 5vw;
    color: #000;
  }
}

.example.horizontal {
  width: 500vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}
.example-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.example-big-square {
  width: 50vw;
  padding-top: 50vw;
  background-color: #000;
}

.example-small-square {
  width: 25vw;
  padding-top: 25vw;
  background-color: #000;
}

.example-big-image {
  img {
    width: 100%;
    width: 50vw;
    height: auto;
    display: block;
  }
}

.example.horizontal header {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 12.5vw;
}

.example.horizontal footer {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 12.5vw;
}

.example.horizontal .example-section {
  width: 100vw;
}

.example.vertical .example-section,
.example.vertical footer {
  padding-top: 50vw;
}

.example-fade-text {
  padding: 12.5vw 6.25vw;
  h2 {
    font-size: 5vw;
  }
}
</style>
