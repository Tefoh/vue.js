import Vue from 'vue'
import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'
import './assets/css/font.css'
import './assets/css/style.css'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
