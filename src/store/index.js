import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postes: null
  },
  mutations: {
    setPostes: (state, postes) => { state.postes = postes }
  },
  actions: {
    actionGetPostes: async ({ commit }) => {
      const resp = await window.REQUESTS.gets.getPosts()
      resp.forEach((el, index) => {
        el.image = 'https://picsum.photos/350/250?random=' + index
      })
      commit('setPostes', resp)
    }

  },
  modules: {
  }
})
