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
    <div class="container" style="height:100%;">
        <el-table
          :data="ad_url_list"
          style="width: 100%"
          height="300px"
          >
          <el-table-column
            label="图片"
            width="180">
              <template slot-scope="scope">
                <img style="width:60px;height:60px;" :src="scope.row.url" alt="">
              </template>
          </el-table-column>
          <el-table-column
          prop="name"
          label="名称"
          >
          </el-table-column>
          <el-table-column
            label="图片"
            >
              <template slot-scope="scope">
                <el-button @click="delete(scope.row,scope.$index)" type="text" size="small">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
        <el-upload
            class="upload-demo mg-t-5"
            ref="upload"
            :action="upload_url"
            :show-file-list= "false"
            :multiple="true"
            :http-request="uploadSectionFile">
            <i class="el-icon-upload"></i>
            <div>点击上传</div>
        </el-upload>
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
      upload_url: '', // 上传URL
      upload_name: '', // 图片或视频名称
      ad_url: '', // 上传后的图片或视频URL
      ad_url_list: [], // 预览列表
      token: ''

    }
  },
  computed: {
  },
  methods: {
    uploadSectionFile (params) {
      let file = params.file
      let url = this.$func.getObjectURL(file)
      this.ad_url_list.push({
        name: file.name,
        url: url
      })
      console.log('***')
      console.log(this.ad_url_list)
      let fileType = file.type
      let isImage = fileType.indexOf('image') !== -1
      var isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        alert('上传图片或视频大小不能超过 2MB!', '提示', { type: 'error' })
        console.log(this.$refs.upload)
        this.$refs.upload.uploadFiles = []
        return
      }
      if (!isImage) {
        alert('请选择图片!', '提示', { type: 'error' })
        this.$refs.upload.uploadFiles = []
        return
      }
      if (isImage) {
        // 获取 token
        axios.get('/api/uptoken').then(res => {
          if (res.status === 200) {
            console.log(res.data)
            this.upload_url = res.data.domain
            this.token = res.data.uptoken
          }
          this.uploadFile(file, this.token, '')
        })
        // 图片上传
        // }
      }
    },
    // 上传文件
    uploadFile (file, token) {
      const config = {
        useCdnDomain: true,
        // 对应哪个区
        region: qiniu.region.z0
      }
      const putExtra = {

      }
      const observer = {
        next (res) {
          console.log(res)
        },
        error (err) {
          console.log(err)
        },
        complete (res) {
          console.log(res)
        }
      }
      const observable = qiniu.upload(file, file.name, token, putExtra, config)
      observable.subscribe(observer) // 上传开始
      // url:http://qgjerlg6c.hd-bkt.clouddn.com/ajax封装_axios.png
    },
    // 删除
    delete (item, idx) {
      this.ad_url_list.splice(idx, 1)
      // 需要后台联调
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
.upload-demo {
  width:100px;
  height:30px;
  text-align:center;
  line-height:15px;
  border: 1px dashed #ddd;
}
</style>
