import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// home -> about
// to = about
// from = home
// router.beforeEach((to, from, next) => {
//   if (to.name === 'products-show') {
//     // return '/auth/login'
//     // return { name: 'login' }

//     // return next('/auth/login')
//     return next({ name: "login" })
//   }

//   if (to.name === 'posts-show') {
//     // return false
//     return next(false)
//   }
//   return next()
// })

router.beforeResolve((to, from) => {

  if (to.meta.auth) {
    return { name: 'login' }
  }
  // if (to.meta.guest) {
  //   return { name: 'home' }
  // }

  if (to.name === 'posts-show') {
    // try {
    //   await axios.post('...')
    // } catch (error) {
      
    // }
    return false
  }
})


// router.afterEach((to, from, failure) => {
//   console.log({ to, from, failure })
// })

export default router