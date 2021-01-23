import { createApp } from 'vue'
import App from './App.vue'
import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
  .use(VueSweetAlert)
  .mount('#app')
