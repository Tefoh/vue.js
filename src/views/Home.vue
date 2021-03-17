<template>
    <main class="main">
        <div class="container">
            <div class="slideshow">
                <a href="" class="slideshow__slide"
                  v-for="(slide, index) in slides"
                  :key="slide.img"
                  :style="index === slideShowIndex ? 'display:block;': 'display:none;'"
                >
                  <img :src="slide.img" class="slideshow__img">
                </a>


                <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
                <a @click="move(1)" class="slideshow__next">&#10094;</a>

                <div class="slideshow__items">
                    <div class="slideshow__item" v-for="(slide, index) in slides" :key="slide.img">
                        <div class="slideshow__item-inner" :style="index === slideShowIndex ? `width: ${progressWidth}%` : ''"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    slides: [
      { img: require('../assets/img/slideshow/1.png') },
      { img: require('../assets/img/slideshow/2.png') },
      { img: require('../assets/img/slideshow/3.png') },
      { img: require('../assets/img/slideshow/4.png') },
    ],
    slideShowIndex: 0,
    sliderInterval: null,
    progressWidth: 0
  }),

  methods: {
    move(n) {
      if (this.slides.length <= this.slideShowIndex + n) {
        this.slideShowIndex = 0;
      } else if (this.slideShowIndex + n < 0) {
        this.slideShowIndex = (this.slides.length - 1);
      } else {
        this.slideShowIndex += n
      }
    }
  },

  created() {
    this.sliderInterval = setInterval(() => {
      if (this.progressWidth >= 100) {
        this.progressWidth = 0;
        this.move(1);
      } else {
        this.progressWidth++;
      }
    }, 15);
  },

  destroyed() {
    clearInterval(this.sliderInterval)
  }
}
</script>
