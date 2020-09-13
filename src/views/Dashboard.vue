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
      <el-table
      :data="imgTable"
      style="width: 100%"
      height="300">
      <el-table-column
        label="图片"
        width="180"
        >
        <template slot-scope="scope">
          <img :src="scope.row.src" alt="网络错误" style="width:80px;height:80px;">
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="deleteImg(scope.row,scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
      </el-table>
      <el-row class="position-relative">
        <el-button type="primary">上传图片</el-button>
        <input class="position-absolute imgUpload" type="file" @change="uploadImg">
        <el-button ref="save" @click="uploadImgToQiniu">保存</el-button>
      </el-row>
      <el-row></el-row>
    </div>
  </div>
</template>

<script>
import { axios } from '@/config/axios'
const qiniu = require('qiniu-js')
export default {
  // 组件名称
  name: 'dashboard',
  data () {
    return {
      imgTable: [],
      token: '',
      domain: '',
      task: [],
      key: []
    }
  },
  computed: {
  },
  methods: {
    // 删除本地图片
    deleteImg (item, idx) {
      this.imgTable.splice(idx, 1)
      this.task.splice(idx, 1)
    },
    // 获取七牛TOken
    getUploadToken () {
      return 'token'
    },
    changeState () {
      this.$store.commit('countAdd')
      this.$store.commit('dashboard/countAdd')
    },
    // 本地预览
    uploadImg (e) {
      console.log(e.target.files[0])
      let file = e.target.files[0]
      this.task.push(file)
      // URL
      let url = this.$func.getObjectURL(file)
      // console.log(url)
      this.imgTable.push({'src': url})
    },
    // 上传七牛
    uploadImgToQiniu () {
      // 判断
      this.task.forEach((file, idx) => {
        const that = this
        console.log(file, '_________________' + idx)
        let config = {
          useCdnDomain: true,
          region: qiniu.region.z0
        }
        // 上传过程的监听函数
        const observer = {
          next (res) {
            // ...
            console.log(res.total.percent)
          },
          error (err) {
            // ...
            console.log(err)
          },
          complete (res) {
            // ...
            if (idx + 1 === that.task.length) {
              that.task = []
              console.log('complete')
              console.log(res)
              // 拿回图片
            }
          }
        }
        const putExtra = {

        }
        // 获取 token
        axios.get('/api/uptoken').then(res => {
          if (res.status === 200) {
            console.log(res.data)
            that.token = res.data.uptoken
            that.domain = res.data.domain
            that.key.push(file.name)
            const observable = qiniu.upload(file, file.name, that.token, putExtra, config)
            observable.subscribe(observer) // 上传开始
          }
        })
      })
    }
  },
  mounted () {

  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgUpload{
  width: 98px;
  height: 40px;
  opacity:0;
  left: 0;
  bottom: 0;
}
</style>
