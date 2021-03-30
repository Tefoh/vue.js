<template>
  <main class="main">
      <div class="container">
          <ul class="breadcrumb">
              <li class="breadcrumb__item breadcrumb__item--hide"><a href="" class="breadcrumb__link"><span
                      class="breadcrumb__span">صفحه اصلی</span></a></li>
              <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
              </li>
              <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">محصول شماره یک</span></a>
              </li>
          </ul>
          <div class="product">
              <div class="product__header">
                  <div class="product__expiration">
                      <div class="count-down__timer" id="count-dowm__timer">
                        {{ diff }}
                      </div>
                  </div>
                  <div class="prodcut__gallery">
                    <div class="gallery">
                        <span class="gallery__count">
                            <span class="gallery__number1">{{ slideIndex + 1 }}</span>
                            <span class="gallery__number2">{{ gallerySlides.length }}</span>
                        </span>
                        <div class="gallery__slides">
                            <div class="gallery__slide">
                              <img
                                class="gallery__img"
                                :src="slide.img"
                                alt=""
                                v-for="(slide, index) in gallerySlides"
                                :key="index"
                                :style="slideIndex === index ? 'display:block;' : 'display:none;'"
                              />
                            </div>
                        </div>
                        <a @click.prevent="move(-1)" class="gallery__prev">&#10094;</a>
                        <a @click.prevent="move(1)" class="gallery__next">&#10095;</a>
                      <div class="gallery__content">
                          <div class="gallery__items">
                            <div
                              class="gallery__item"
                              :class="{ 'gallery__item--is-acitve': slideIndex === index }"
                              v-for="(slide, index) in gallerySlides"
                              :key="`item-${index}`"
                            >
                              <img :src="slide.img" @click="currentSlide(index)" class="gallery__item-img">
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import moment from 'moment'

export default {
  name: "Product",

  metaInfo: {
    title: 'نمایش محصول'
  },

  data() {
    return {
      dateCountDown: moment('2021-08-07 00:00:00'),
      diff: null,
      countDownInterval: null,
      gallerySlides: [
        { img: require('../assets/img/slider/1.jpg') },
        { img: require('../assets/img/slider/2.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/4.jpg') },
        { img: require('../assets/img/slider/4.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
      ],
      slideIndex: 0
    }
  },

  methods: {
    move(n) {
      if (this.gallerySlides.length <= this.slideIndex + n) {
        this.slideIndex = 0;
      } else if (this.slideIndex + n < 0) {
        this.slideIndex = (this.gallerySlides.length - 1);
      } else {
        this.slideIndex += n
      }
    },
    currentSlide(index) {
      this.slideIndex = index
    }
  },

  created() {
    this.countDownInterval = setInterval(() => {
      let diffTime = this.dateCountDown.diff(moment())
      let durationTime = moment.duration(diffTime)
      this.diff = `${Math.floor(durationTime.asDays())}:${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`
    }, 1000)
  },

  destroyed() {
    clearInterval(this.countDownInterval)
  }
  
}
</script>
