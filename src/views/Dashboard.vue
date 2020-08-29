<!--
  功能：dashboard
  作者：DDS
  时间：2020年08月29日 19:28:09
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div>
     <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-s-home"></i> 首页
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'dashboard',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    changeState () {
      this.$store.commit('countAdd')
      this.$store.commit('dashboard/countAdd')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
