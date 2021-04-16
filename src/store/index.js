import { createStore } from 'vuex'

import axios from 'axios'

import { SET_PRODUCTS_MUTATIONS } from './types'

const store = createStore({
  state: () => ({
    products: [],
    user: { name: "tofiq", id: 1 }
  }),

  getters: {
    products: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id),
    name: state => state.user.name
  },

  mutations: {
    [SET_PRODUCTS_MUTATIONS] (state, data) {
      state.products = data
    }
  },

  actions: {
    async getProducts ({ commit, dispatch }, { text }) {
      const { data } = await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')
      
      commit(SET_PRODUCTS_MUTATIONS, data)

      dispatch('log', text)

      // console.log(text)
    },
    log(ctx, payload) {
      console.log(payload)
    }
  }
})

export default store
