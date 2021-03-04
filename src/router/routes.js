import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post from '../pages/Post.vue'
import Login from '../pages/Login.vue'
import Profile from '../pages/Profile.vue'
import Product from '../pages/Product.vue'
import NotFound from '../pages/NotFound.vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

import auth from '../middlewares/auth.js'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        alias: ['/home']
      },
      {
        path: 'auth/login',
        component: Login,
        name: 'login',
        meta: {
          guest: true
        }
      },
      {
        path: 'about',
        component: About,
        name: 'about' 
      },
      {
        path: 'posts',
        component: Post,
        name: 'post-index' 
      },
      {
        path: 'posts/:postId(\\d+)',
        component: Post,
        name: 'posts-show',
        props: true
      },
      {
        path: 'products/:productId?',
        component: Product,
        name: 'products-show',
        // beforeEnter: [auth]
      },
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '@:username', // /admin/@tofiq
        component: Profile,
        alias: ['@:username/profile', ':username/posts'], // /admin/@tofiq/profile - /admin/tofiq/posts
        meta: {
          auth: true
        }
      },
    ]
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/:match(.*)',
    redirect: '/404'
  }
]

export default routes