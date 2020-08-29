const dashboard = {
  namespaced: true,
  state: {
    dashboardCount: 666
  },
  actions: {

  },
  mutations: {
    countAdd (state) {
      state.dashboardCount++
    }
  }
}

export default dashboard
