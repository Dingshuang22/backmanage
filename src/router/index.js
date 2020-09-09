import Vue from 'vue'
import Router from 'vue-router'
import {routesList} from '@/export'

Vue.use(Router)

const createRouter = routes => new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout'),
      meta: {title: '主页'},
      redirect: {name: 'dashboard'},
      children: routes
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {title: '登陆'}
    }

  ]
})

// 初始化路由的时候，只挂载不需要用户权限的路由表
const router = createRouter(routesList)

// router.matcher = createRouter(children).matcher
/**
 * 加载动态菜单和路由
 */
// routes 动态处理为二级传输过来 此处为方法模拟
// const loadasyncRoutes = function (cb) {
//   let children = routesList
//   constantRoutes.forEach(function (item) {
//     children.push(item)
//   })
//   console.log('***')
//   console.log(children)
//   router.matcher = createRouter(children).matcher
// }

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.name === 'login') {
//     next()
//   } else {
//     if (!window.sessionStorage.load) {
//       // 加载动态菜单和路由
//       // loadasyncRoutes(() => {
//       // router.push({name: to.name, path: to.path})
//       // })
//     // }
//     window.sessionStorage.load = 'on'
//     next()
//   }

// })

export default router
