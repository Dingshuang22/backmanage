import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import dashboard from './modules/dashboard'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 26
  },
  actions,
  mutations,
  modules: {
    dashboard
  }
})

export default store
