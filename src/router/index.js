import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// home -> about
// to = about
// from = home
router.beforeEach((to, from, next) => {
  if (to.name === 'products-show') {
    // return '/auth/login'
    // return { name: 'login' }
    
    // return next('/auth/login')
    return next({ name: "login" })
  }

  if (to.name === 'posts-show') {
    // return false
    return next(false)
  }
  return next()
})





// router.beforeResolve()
// router.afterEach()

export default router