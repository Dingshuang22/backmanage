<!--
  功能：SideBar
  作者：DDS
  时间：2020年08月29日 19:12:22
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.children">
          <!-- 有子菜单的一级菜单 -->
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <!-- 有子菜单的二级菜单 -->
              <el-submenu v-if="subItem.children" :index="item.path+'/'+subItem.path" :key="subItem.name">
                <template slot="title">{{ subItem.meta.title }}</template>
                <!-- 三级菜单 -->
                <router-link
                v-for="threeItem in subItem.children"
                :to="{name:threeItem.name}"
                :key="threeItem.name"
                >
                  <el-menu-item
                >{{ threeItem.meta.title }}</el-menu-item>
                </router-link>
              </el-submenu>
              <!-- 无子菜单的二级菜单 -->
              <router-link v-else :to ="{name:subItem.name}" :key="subItem.name">
                <el-menu-item
              >{{ subItem.meta.title }}</el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
        <!-- 无子菜单的一级菜单 -->
        <router-link v-else :to ="{name:item.name}" :key="item.name">
          <template >
              <el-menu-item>
                <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
              </el-menu-item>
          </template>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { bus } from '@/export/index'
import { routes } from '@/router/child'
export default {
  // 组件名称
  name: 'sidebar',
  data () {
    return {
      collapse: false,
      items: routes
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', (msg) => {
      this.collapse = msg
      bus.$emit('collapse-content', msg)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  background-color: #fff;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
