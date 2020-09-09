<!--
  功能：功能描述
  作者：DDS
  时间：2020年09月02日 14:25:09
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div>
    <label v-for="menu in items" :key="menu.path">
    <el-submenu :index="String(menu.path)" v-if="menu.children">
      <template slot="title">
      <i class="el-icon-edit"></i>
      <span>{{menu.meta.title}}</span>
      </template>
      <label>
      <menu-tree :items="menu.children"></menu-tree>
      </label>
    </el-submenu>
    <el-menu-item :index="menu.path" @click="saveNavStart(menu.path)" v-else>
      <i class="el-icon-edit"></i>
      <span>{{menu.meta.title}}</span>
    </el-menu-item>
  </label>
  </div>
</template>

<script>
export default {
  name: 'sidebaritem',
  data () {
    return {}
  },
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  },
  computed: {},
  methods: {
    saveNavStart (item) {

    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
