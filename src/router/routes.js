// import Home from '../pages/Home.vue'

// vue-cli -- webpack
// const Home = () => import(/* webpackChunkName: home */ '../pages/Home.vue')
const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Post = () => import('../pages/Post.vue')
const Login = () => import('../pages/Login.vue')
const Profile = () => import('../pages/Profile.vue')
const Product = () => import('../pages/Product.vue')
const NotFound = () => import('../pages/NotFound.vue')
const HomeLayout = () => import('../layouts/HomeLayout.vue')
const AdminLayout = () => import('../layouts/AdminLayout.vue')

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