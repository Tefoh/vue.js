import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post from '../pages/Post.vue'
import Profile from '../pages/Profile.vue'
import Product from '../pages/Product.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/posts', component: Post, name: 'post-index' },
  { path: '/posts/:postId(\\d+)', component: Post, name: 'posts-show' },
  { path: '/@:username', component: Profile },
  { path: '/products/:productId?', component: Product },
  { path: '/:match(.*)', component: NotFound }
]

export default routes