import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router