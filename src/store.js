import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: false
  },
  mutations: {
    LOAD (state) {
      state.loaded = true
    }
  },
  actions: {

  }
})
