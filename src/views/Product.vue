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
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import moment, { duration } from 'moment'

export default {
  name: "Product",

  metaInfo: {
    title: 'نمایش محصول'
  },

  data() {
    return {
      dateCountDown: moment('2021-08-07 00:00:00'),
      diff: null,
      countDownInterval: null
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
