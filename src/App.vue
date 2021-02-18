<template>
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <img src="./assets/city.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <div class="input-group mb-3">
          <button class="btn btn-primary" type="button" @click="getData" id="button-addon1">ارسال</button>
          <input type="text" class="form-control" v-model="city" placeholder="اسم شهر را وارد کنید" aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>
        <div class="card-text" v-if="data">
          <p>اسم شهر: {{ data.name }}</p>
          <p>دما: {{ data.main.temp }}</p>
          <p>توضیحات: {{ data.weather[0].description }}</p>
          <p>سرعت باد: {{ data.wind.speed }}</p>
        </div>
        <p class="card-text" v-else-if="isLoading">
          در حال دریافت اطلاعات...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = '68ffb86d27404018952220316052d91b';

export default {
  name: "App",

  data: () => ({
    city: '',
    data: null,
    isLoading: false
  }),

  methods: {
    getData() {
      this.isLoading = true

      axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: this.city,
          appid: API_KEY,
          units: 'metric',
          lang: 'fa'
        }
      }).then(({ data }) => {
        this.isLoading = false
        this.data = data
      })
    }
  }
}
</script>

<style>
</style>