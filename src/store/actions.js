import { routes } from '@/router/child.js'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  // roles为权限身份数组
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter (asyncRouterMap, roles) {
  // 返回满足条件的子路由对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        // route.children重新过滤赋值;
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true // 返回该权限路由对象;
    }
    return false
  })
  return accessedRouters
}

const actions = {
  // 根据角色重新设置权限
  setPermission ({commit}, data) {
    return new Promise(resolve => {
      let roles = data.roles
      let accessedRouters = ''
      if (roles.indexOf('admin') >= 0) {
        // 如果是管理员，直接将权限路由赋值给新路由;
        accessedRouters = routes
      } else {
        // 非管理员用户,如roles:['editor','developer']，则需要过滤权限路由数据
        accessedRouters = filterAsyncRouter(routes, roles)
      }
      commit('setPermission', accessedRouters)
      resolve()
    })
  }
}

export default actions
