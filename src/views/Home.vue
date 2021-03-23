<template>
    <main class="main">
        <div class="container">
          
            <div class="header__top">
                <div class="header__top-content">
                    <h1 class="header__top-h1">وب آموز : پلی برای یادگیری</h1>
                    <p class="header__top-p">با کمترین هزینه حرفه ای شو</p>
                </div>
                <form class="header__form">
                    <div class="header__search">
                        <input type="text" class="header__serach-input" placeholder="جستجو کنید...">
                        <button class="header__search-btn btn btn--brand btn--boxshadow"></button>
                    </div>
                </form>
            </div>
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
            <SwiperSlider>
              <template v-slot:title>
                موبایل
              </template>
              <a href="product.html" class="swiper-slide" v-for="item in 6" :key="item">
                    <div class="slider__box">
                        <div class="slider__image"><img :src="require(`../assets/img/slider/${item}.jpg`)" alt="" class="slider__img"></div>
                        <div class="slider__title2">
                            گوشی موبایل سامسونگ مدل نوت 20
                        </div>
                        <div class="slider__price">
                            <span class="slider__compare-price">12,200,000</span>
                            <span class="slider__total-price">12,400,000 تومان</span>
                        </div>
                        <span class="slider__discount">%6</span>
                    </div>
                </a>
            </SwiperSlider>
            <SwiperSlider>
              <template v-slot:title>
                لب تاپ
              </template>
              <a href="product.html" class="swiper-slide" v-for="item in 4" :key="item">
                    <div class="slider__box">
                        <div class="slider__image"><img :src="require(`../assets/img/slider/${item}.jpg`)" alt="" class="slider__img"></div>
                        <div class="slider__title2">
                            گوشی موبایل سامسونگ مدل نوت 20
                        </div>
                        <div class="slider__price">
                            <span class="slider__compare-price">12,200,000</span>
                            <span class="slider__total-price">12,400,000 تومان</span>
                        </div>
                        <span class="slider__discount">%6</span>
                    </div>
                </a>
            </SwiperSlider>
        </div>
    </main>
</template>

<script>
import SwiperSlider from '../components/SwiperSlider'
export default {
  name: "Home",

  metaInfo: {
    titleTemplate: null
  },

  components: {
    SwiperSlider
  },

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
