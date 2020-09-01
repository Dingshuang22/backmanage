<!--
  功能：基础表格
  作者：DDS
  时间：2020年09月01日 18:26:30
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
                <i class="el-icon-s-home"></i> 基础表格
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
      <div class="box border-red-1px">
        <div style="width:100%;height:100%" class="chessboard">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basetable',
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  $bg_color : #888;
  @mixin hello {
    width: 100%;
    height: 100%;
    color: #00f;
    background-color: #0f0;
    font-size: 24px;
    &:hover{
      background-color: #fff;
    }
  }
  .box {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    position: relative;
    .aside {
      width: 100px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      // border: 1px solid $bg_color;
      box-sizing: border-box;
      .aside--content {
        @include hello
      }
    }
  }
</style>
