import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/css/font.css'
import './assets/css/style.css'
import './assets/css/responsives.css'

createApp(App)
  .use(router)
  .mount('#app')
