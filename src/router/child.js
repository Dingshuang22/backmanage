export const routes = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {title: '首页', icon: 'el-icon-s-home'}
  },
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
            path: 'threemenu',
            name: 'threemenu',
            component: () => import('@/views/ThreeMenu.vue'),
            meta: {title: '基础表格', icon: 'el-icon-s-home'}
          }
        ]
      }
    ]
  }
]
