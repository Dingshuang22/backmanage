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

         <el-table :data="tableData" border stripe style="width: 100%;">
          <el-table-column prop="item" label="item">
            <template slot-scope="scope">
              <el-input v-if="scope.row.edit" v-model="scope.row.item" placeholder="item"></el-input>
              <span v-else>{{scope.row.item}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="text" size="medium" @click="confirmAdd(scope.row)">
                <i class="el-icon-check" aria-hidden="true"></i>
              </el-button>
              <div v-else>
                <el-button type="text" size="medium" @click="editData(scope.row)">
                  <i class="el-icon-edit" aria-hidden="true"></i>
                </el-button>
                <el-button type="text" size="medium" @click="deleteData(scope.row,scope.$index)">
                  <i class="el-icon-delete" aria-hidden="true"></i>
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="text" @click="addData">添加数据</el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'basetable',
  data () {
    return {
      tableData: []
    }
  },
  computed: {},
  methods: {
    // 添加
    addData () {
      this.tableData.push({
        edit: true
      })
    },
    // 确认添加
    confirmAdd (row) {
      row.edit = false
      console.log(this.tableData)
    },
    // 修改
    editData (row) {
      row.edit = true
    },
    // 删除
    deleteData (row, index) {
      this.tableData.splice(index, 1)
    }
  },
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
