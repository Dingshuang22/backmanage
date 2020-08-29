import Vue from 'vue'
import Router from 'vue-router'
import {routesList} from '@/export'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'dashboard' }
    }, {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/Layout'),
      children: routesList
    }, {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    }, {
      path: '*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})
