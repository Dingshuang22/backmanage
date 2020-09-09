import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  addRoutes: []
}

const getters = {

}
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
