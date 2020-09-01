// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/plugins/elementui'
import '@/assets/styles/index.scss'
import store from '@/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = `后台管理系统 | ${to.meta.title}`
  // 登录权限管控
  const role = (JSON.parse(sessionStorage.getItem('userInfo')) && JSON.parse(sessionStorage.getItem('userInfo')).username) || null
  if (to.meta.title !== from.meta.title) {
    if (!role && to.path !== '/login') {
      next({name: 'login'})
    } else {
      // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
      if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
          confirmButtonText: '确定'
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
