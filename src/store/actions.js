import axios from 'axios'
import { SET_PRODUCTS_MUTATIONS } from './types'

export default {
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