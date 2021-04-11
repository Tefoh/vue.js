import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      products: ['mi 10', 'a52']
    }
  }
})

export default store
