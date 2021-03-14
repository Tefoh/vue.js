import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'

import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
