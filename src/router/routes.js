import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post from '../pages/Post.vue'
import Profile from '../pages/Profile.vue'
import Product from '../pages/Product.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/posts/:postId(\\d+)', component: Post },
  { path: '/@:username', component: Profile },
  { path: '/products/:productId?', component: Product },
  { path: '/:match(.*)', component: NotFound }
]

export default routes