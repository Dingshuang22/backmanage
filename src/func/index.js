import { routes } from '@/router/child'
import _ from 'lodash'

var routesList = []
_(routes).forEach(function (val) {
  if (!val.children) {
    console.log('***')
    console.log(val.component)
    routesList.push(val)
  } else {
    _(val.children).forEach(function (value) {
      if (!value.children) { // 二级菜单添加
        routesList.push(value)
      } else { // 三级菜单添加
        _(value.children).forEach(function (v) {
          routesList.push(v)
        })
      }
    })
  }
})

const func = {
  /**
   * 设置本地存储
   */
  setS (k, v, t) {
    if (typeof v === 'object') {
      v = JSON.stringify(v)
    }
    if (t === 'session') {
      window.sessionStorage.setItem(k, v)
    } else {
      window.localStorage.setItem(k, v)
    }
  },
  /**
  * 获取本地存储
  */
  getS (k, t) {
    let val
    if (t === 'session') {
      val = window.sessionStorage.getItem(k)
    } else {
      val = window.localStorage.getItem(k)
    }
    if (val === null || val.length < 1) {
      return val
    }
    let valPrefix = val.substring(0, 1)
    let valSubfix = val.substr(val.length - 1)
    // 判断是否为对象，是对象就转json
    if (
      (valPrefix === '[' && valSubfix === ']') ||
        valPrefix === '{' ||
        valSubfix === '}'
    ) {
      return JSON.parse(val)
    }
    return val
  },
  /**
   *
   * 删除本地存储
   */
  delS (k, t) {
    if (t === 'session') {
      window.sessionStorage.removeItem(k)
    } else {
      window.localStorage.removeItem(k)
    }
  }
}

export { routesList, func }
