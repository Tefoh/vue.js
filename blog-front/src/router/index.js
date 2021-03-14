import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes.js'
import axios from '../plugins/axios.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const token = localStorage.getItem('token')

router.beforeEach(async (to, from) => {
  if (to.meta.guest) {
    if (! token) {
      return true
    }
    
    try {
      await axios.get('/users/me')
      return '/'
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      delete axios.defaults.headers['Authorization']
    }
  }

  if (to.meta.auth) {
    if (! token) {
      return '/login'
    }
    
    try {
      await axios.get('/users/me')
      return true
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      delete axios.defaults.headers['Authorization']
      
      return '/login'
    }
  }
})

export default router
