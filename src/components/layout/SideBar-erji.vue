<template>
    <div class="nav sidebar nj-nav">
        <div class="nj-nav-menu">
            <div class="nj-nav-menu-outside">
                <ul>
                    <li v-for="(item,index) in items" @click="showSubs(item,index)"
                        :class="index==[curPage]?'active':''" :key="item.title">
                        <i :class="item.icon"></i>
                        <div class="mt-5">{{item.title}}</div>
                        <i class="el-icon-caret-left"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nj-nav-group" v-if="items.length">
            <div class="nj-nav-title"><i class="mr-5" :class="items[curPage].icon"></i>{{items[curPage].groupTitle}}
            </div>
            <div>
                <div class="nj-nav-item" :class="submenu.path==$route.path?'active':''"
                     v-for="submenu in items[curPage].subs" :key="submenu.title">
                    <router-link :to="submenu.name">{{submenu.title}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import bus from '@/export'
// import {mapState} from 'vuex'

export default {
  name: 'sidebar',
  data () {
    return {
      isCollapse: false,
      itemId: 0,
      items: [
        {
          icon: 'el-icon-s-home',
          index: '/dashboard',
          title: '账户管理',
          groupTitle: '账户管理',
          subs: [
            {
              path: '/dashboard',
              name: 'dashboard',
              index: '/dashboard',
              title: '部门管理'
            },
            {
              path: '/dashboard',
              name: 'basetable',
              index: '',
              title: '职位管理'
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              index: '',
              title: '部门员工'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '',
          title: '产品管理',
          groupTitle: '产品管理',
          subs: [
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '产品分类'
            },
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '产品品牌'
            },
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '产品属性组'
            },
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '属性管理'
            },
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '产品列表'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '',
          title: '终端管理',
          groupTitle: '终端管理',
          subs: [
            {
              path: '/',
              name: 'dashboard',
              index: '',
              title: '终端管理'
            },
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '终端资质'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '',
          title: '分仓管理',
          groupTitle: '分仓管理',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '/customerpage1',
              title: '分仓列表'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '/',
          title: '订单管理',
          groupTitle: '订单管理',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '订单列表'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '/',
          title: '客服管理',
          groupTitle: '客服管理',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '客服列表'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '/',
          title: '促销管理',
          groupTitle: '促销管理',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '促销列表'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '/',
          title: '权限管理',
          groupTitle: '权限管理',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '权限组'
            }
          ]
        },
        {
          icon: 'el-icon-s-home',
          index: '/',
          title: '运营中心',
          groupTitle: '运营中心',
          subs: [
            {
              path: '',
              name: 'dashboard',
              index: '',
              title: '运营中心'
            }
          ]
        }
      ],
      curPage: 0
    }
  },
  methods: {
    showSubs (item, index) {
      this.curPage = index
      // this.$router.push(item.path)
    },
    render () {
      // menuList
      this.items.map((val, index) => {
        if (val.subs.length > 0) {
          val.subs.map((sval, sindex) => {
            if (sval.path === this.$route.path) {
              this.curPage = index
            }
          })
        }
      })
    }
  },
  mounted () {
    this.render()
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    // bus.$on('collapse', msg => {
    //   this.collapse = msg
    // })
  },
  updated () {
    this.render()
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
    // ...mapState({
    //   menuList: state => state.menus
    // })
  },
  watch: {
    $route (to) {
    }
  }
}
</script>
<style lang="scss" scoped>
    .nav {
        height: 90%;
        background-color: #f7f7f7;
        border-right: #ddd solid 1px;
    }

    .el-aside::-webkit-scrollbar {
        display: none;
    }

    .el-menu-item:focus, .el-menu-item:hover {
        background-color: rgb(40, 52, 70) !important;
    }

    .el-submenu__title:hover {
        background-color: rgb(40, 52, 70) !important;
    }

    .el-menu {
        border-right: none;
        text-align: left;
        height: 100%;
    }

    .el-menu--collapse > .el-menu-item span, .el-menu--collapse > .el-submenu > .el-submenu__title span {
        display: block;
        height: 20px;
        width: 30px;
        visibility: visible;
    }

    .nj-nav {
        position: relative;
        .nj-nav-menu {
            width: 80px;
            height: 100%;
            cursor: pointer;
            /*background-color: rgb(50, 65, 87);*/
            background-color: rgba(51, 55, 68, 1);
            text-align: center;
            color: #909399;
            font-size: 14px;

            i {
                font-size: 18px;
            }

            li {
                position: relative;
                padding: 15px 0;
                color: #ccc;
            }

            li.active, li:hover {
                /*background-color: #283446;*/
                background-color: rgba(0, 0, 0, .5);
                color: #fff;
            }
            li .el-icon-caret-left {
                display: none;
                position: absolute;
                right: -6px;
                top: 50%;
                margin-top: -10px;
                color: #f7f7f7;
            }
            li.active .el-icon-caret-left {
                display: block;
            }
        }

        .nj-nav-title {
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            background-color: rgba(242, 242, 242, 1);
            border-bottom: #ddd solid 1px;
            font-size: 14px;
            font-weight: 700;
        }

        .nj-nav-group {
            position: absolute;
            top: 0;
            left: 100px;
            right: 0;
        }

        .nj-nav-item {
            font-size: 14px;
        }

        .nj-nav-item.active {
            background-color: #fff;
            color: rgb(0, 121, 254);
        }

        .nj-nav-item a {
            display: block;
            color: #333;
            padding: 15px 20px 15px 40px;
        }

        .nj-nav-item:hover a {
            color: rgb(0, 121, 254);
        }
        .nj-nav-item.active a {
            color: rgb(0, 121, 254);
        }

        .el-submenu__title {
            height: 60px;
            line-height: 26px;
        }

        .el-menu--collapse {
            width: 80px;
        }

    }

    .el-menu--vertical {
        display: none !important;
    }

    .nj-nav-menu {
        position: relative;
        overflow: hidden;
    }

    .nj-nav-menu .nj-nav-menu-outside {
        position: absolute;
        left: 0;
        width: 97px;
        height: 90%;
        overflow-x: hidden;
        overflow-y: scroll;
    }

</style>
