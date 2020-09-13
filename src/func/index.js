import { routes } from '@/router/child'
import _ from 'lodash'

var routesList = []
_(routes).forEach(function (val) {
  if (!val.children) {
    // console.log('***')
    // console.log(val.component)
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
  },

  getObjectURL (file) {
    console.log(file)
    let url = null
    if (window.createObjectURL !== undefined) {
      // basic
      url = window.createObjectURL(file)
    } else if (window.URL !== undefined) {
      // mozilla(firefox)
      url = window.URL.createObjectURL(file)
    } else if (window.webkitURL !== undefined) {
      // webkit or chrome
      url = window.webkitURL.createObjectURL(file)
    }
    return url
  },
  /**
   * toBase64
   */
  toBase64 (data) {
    var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var base64Pad = '='
    var result = ''
    var length = data.length
    var i
    // Convert every three bytes to 4 ascii characters.

    for (i = 0; i < (length - 2); i += 3) {
      result += toBase64Table[data.charCodeAt(i) >> 2]
      result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)]
      result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)]
      result += toBase64Table[data.charCodeAt(i + 2) & 0x3f]
    }

    // Convert the remaining 1 or 2 bytes, pad out to 4 characters.
    if (length % 3) {
      i = length - (length % 3)
      result += toBase64Table[data.charCodeAt(i) >> 2]
      if ((length % 3) === 2) {
        result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)]
        result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2]
        result += base64Pad
      } else {
        result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4]
        result += base64Pad + base64Pad
      }
    }
    return result
  }
}

export { routesList, func }
