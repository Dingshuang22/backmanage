// 不需要用户权限的路由表
const constantRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {title: '首页', icon: 'el-icon-s-home'}
  }
]
const routes = [
  {
    path: 'form',
    name: 'form',
    meta: {title: '表格', icon: 'el-icon-s-home'},
    children: [
      {
        path: 'three',
        name: 'three',
        meta: {title: '三级', icon: 'el-icon-s-home'},
        children: [
          {
            path: '/threemenu',
            name: 'threemenu',
            component: () => import('@/views/ThreeMenu.vue'),
            meta: {title: '基础表格', icon: 'el-icon-s-home'}
          }
        ]
      }
    ]
  },
  {
    path: '/basetable',
    name: 'basetable',
    component: () => import('@/views/BaseTable.vue'),
    meta: {title: '世界', icon: 'el-icon-s-home'}
  },
  {
    path: 'drag',
    name: 'drag',
    meta: {title: '拖拽', icon: 'el-icon-s-home'},
    children: [
      {
        path: '/draglist',
        name: 'draglist',
        component: () => import('@/views/DragList.vue'),
        meta: {title: '拖拽列表', icon: 'el-icon-s-home', permission: true}
      }
    ]
  }
]
routes.push(constantRoutes[0])
export { routes }
