<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowingModal">
        <div class="modal__content">
            <span class="modal__close" @click="closeModal">&times;</span>
            <div class="modal__body" tabindex="0" @focusout="closeModal">
                <img :src="modalImage" class="show__gallery">
            </div>
        </div>
    </div>
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
                    <div class="product__row">

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
                                  @click="showModal(slide.img)"
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
                    <div class="product__left">
                      <div class="product__category">دسته وب</div>
                        <div class="product__info">
                            <h1 class="product__title">محصول شماره یک یک شماره </h1>

                            <div class="rating">
                                <div class="rating__star">
                                    <span
                                      class="rating__rate"
                                      :data-title="rate.title"
                                      v-for="rate in ratings"
                                      :key="rate.title"
                                      @click="rateWidth = rate.width"
                                      @mouseover="handleMouseover"
                                      @mouseleave="handleMouseleave"
                                    ></span>
                                </div>
                                <div class="rating__fstar" :style="showRate ? `width: ${rateWidth}%` : ''">
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                </div>
                            </div>
                            <div class="rating-star">4.5
                                <span class="rating__num">(65)</span>
                            </div>
                        </div>
                        <div class="controls">
                          <Multiselect
                            :options="colorsOptions"
                            v-model="selectedColor"
                            placeholder="گزینه خود را انتخاب کنید"
                          />
                          <Multiselect
                            :options="langOptions"
                            v-model="selectedLang"
                            :multiple="true"
                            label="name"
                            placeholder="گزینه خود را انتخاب کنید"
                          />

                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import moment from 'moment'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '../assets/css/modal.css'

import Multiselect from 'vue-multiselect'

export default {
  name: "Product",

  components: {
    Multiselect
  },

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
      ratings: [
        { width: 100, title: 'عالی' },
        { width: 80, title: 'خوب' },
        { width: 60, title: 'معمولی' },
        { width: 40, title: 'ضعیف' },
        { width: 20, title: 'بد' },
      ],
      slideIndex: 0,
      isShowingModal: false,
      modalImage: null,
      rateWidth: 0,
      showRate: true,
      selectedColor: '',
      colorsOptions: ['قرمز', 'سبز', 'آبی'],
      selectedLang: [],
      langOptions: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
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
    },
    showModal(image) {
      this.isShowingModal = true
      this.modalImage = image
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isShowingModal = false
      document.body.style.overflow = 'unset'
    },
    handleMouseover() {
      this.showRate = false
    },
    handleMouseleave() {
      this.showRate = true
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
