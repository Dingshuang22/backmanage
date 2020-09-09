// import router from '@/router/index.js'
// import Vue from 'vue'

// router.beforeEach((to, from, next) => {
//   document.title = `后台管理系统 | ${to.meta.title}`
//   // 登录权限管控
//   const roles = (JSON.parse(sessionStorage.getItem('userInfo')) && JSON.parse(sessionStorage.getItem('userInfo')).roles) || null
//   if (to.meta.title !== from.meta.title) {
//     if (!roles && to.path !== '/login') {
//       next({name: 'login'})
//     } else if (to.meta.permission) {
//       roles === 'admin' ? next() : next({name: 'notfound'})
//     } else {
//       // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//       if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//           confirmButtonText: '确定'
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     next()
//   }
// })
