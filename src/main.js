// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/plugins/elementui'
import '@/assets/styles/index.scss'
import store from '@/store'
import './permission'
import {func} from '@/func'
import _ from 'lodash'

Vue.prototype.$func = func

Vue.config.productionTip = false
Vue.prototype._ = _

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
