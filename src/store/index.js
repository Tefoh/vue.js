import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
  state,
  getters,
  mutations,
  actions
})

export default store