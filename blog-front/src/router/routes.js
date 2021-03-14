import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreatePost from '../views/CreatePost.vue'

export default [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      guest: true
    }
  },
  {
    path: '/posts/create',
    component: CreatePost,
    name: 'Create-post',
    meta: {
      auth: true
    }
  }
]
