<!--
  功能：layout
  作者：DDS
  时间：2020年08月29日 18:58:16
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <!-- <keep-alive :include="tagsList"> -->
                        <router-view></router-view>
                    <!-- </keep-alive> -->
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from '@/components/layout/Header.vue'
import vSidebar from '@/components/layout/SideBar.vue'
import vTags from '@/components/layout/Tags.vue'
import { bus } from '@/export'
export default {
  // 组件名称
  name: 'layout',
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHead,
    vSidebar,
    vTags
  },
  created () {
    bus.$on('collapse-content', msg => {
      this.collapse = msg
    })
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
