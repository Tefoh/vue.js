import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post from '../pages/Post.vue'
import Profile from '../pages/Profile.vue'
import Product from '../pages/Product.vue'
import NotFound from '../pages/NotFound.vue'
import Header from '../layouts/Header.vue'

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      Header
    },
    name: 'home' 
  },
  {
    path: '/about',
    components: {
      default: About,
      Header
    },
    name: 'about' 
  },
  {
    path: '/posts',
    component: Post,
    name: 'post-index' 
  },
  {
    path: '/posts/:postId(\\d+)',
    component: Post,
    name: 'posts-show' 
  },
  {
    path: '/@:username',
    component: Profile 
  },
  {
    path: '/products/:productId?',
    component: Product,
    name: 'products-show' 
  },
  {
    path: '/:match(.*)',
    component: NotFound
   }
]

export default routes