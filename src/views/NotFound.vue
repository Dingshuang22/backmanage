<!--
  功能：404 Page
  作者：DDS
  时间：2020年08月29日 23:51:42
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="error-page">
      <div class="error-code">4<span>0</span>4</div>
      <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
      <div class="error-handle">
          <router-link :to="{name:'dashboard'}">
            <el-button type="primary" size="large">返回首页</el-button>
          </router-link>
          <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {}
  },
  computed: {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-page{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
background: #f3f3f3;
box-sizing: border-box;
}
.error-code{
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
}
.error-code span{
    color: #00a854;
}
.error-desc{
    font-size: 30px;
    color: #777;
}
.error-handle{
    margin-top: 30px;
    padding-bottom: 200px;
}
.error-btn{
    margin-left: 100px;
}
</style>
