<!--
  功能：拖拽列表
  作者：DDS
  时间：2020年09月02日 20:54:55
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
                <i class="el-icon-s-home"></i> 拖拽列表
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
      <el-cascader
        :show-all-levels="false"
        ref="cascaderAddr"
        class="el-cascader"
        :collapse-tags="true"
        expand-trigger="hover"
        :props="{multiple : true,checkStrictly : true}"
        :options="province"
        v-model="area"
        @active-item-change="handleItemChange"
        @change="handleChange"
      >
 </el-cascader>
    </div>
  </div>
</template>

<script>
export default {
  name: 'draglist',
  data () {
    return {
      province: [
        {
          label: '湖北',
          value: '998',
          level: 1,
          children: [
          ]
        },
        {
          label: '重庆',
          value: '333',
          level: 1,
          children: []
        }
      ],
      area: '',
      p1: '',
      p2: '',
      p3: ''
    }
  },
  computed: {},
  methods: {
    handleItemChange (val) {
      // this.province.forEach((item, index) => {
      //   this.$set(this.province[index], 'children', []) // 用this.$set刷新获取省时设置
      // })
      console.log(val)
      console.log(val[0])
      let value = ''
      let areaLevel = ''
      if (val.length === 1) {
        value = val[0]
        areaLevel = 2
        this.province.map((item, idx) => {
          if (item.value === value) {
            this.p1 = idx
          }
        })
      }
      if (val.length === 2) {
        value = val[1]
        areaLevel = 3
        this.province[this.p1].children.map((v, a) => {
          if (v.value === value) {
            this.p2 = a// 这里是取你选中第二层的第几个
          }
        })
      }

      if (val.length === 3) {
        value = val[2]
        areaLevel = 4
        // console.log(this.province[this.p1].children[this.p2].children)
        // debugger
        this.province[this.p1].children[this.p2].children.map((v, a) => {
          // console.log(v, value)
          // debugger
          if (v.value === value) {
            this.p3 = a// 这里是取你选中第三层的第几个
            console.log(this.p3)
          }
        })
      }
      // 查询参数
      // let param = {
      //   areaLevel: areaLevel,
      //   value: value
      // }
      console.log(areaLevel)
      if (areaLevel >= 2) {
        console.log(value)
        // 模拟数据
        let city = [{label: '恩施', value: '555'}]
        city.forEach((v, a) => {
          v['children'] = []// 如果想要下一级，这里要设置为[]
        })
        this.province.forEach((v, a) => {
          console.log(v.value, val)
          if (v.value === value) {
            console.log(city)
            v.children = city
            console.log(v)
          }
        })
        this.$set(this.province, 'province', this.province)
      }
      if (areaLevel >= 3) {
        console.log(value)
        let county = [{label: '利川', value: '666'}, {label: '来凤', value: '656'}]
        county.forEach((v, a) => {
          v['children'] = []// 如果想要下一级，这里要设置为[]
        })
        console.log(this.province[this.p1].children)
        this.province[this.p1].children.forEach((v, a) => {
          if (v.value === value) {
            v.children = county
            console.log(v)
          }
        })
        // this.province[this.p1].children[this.p2].children = county
        this.$set(this.province, 'province', this.province)
      }

      if (areaLevel === 4) {
        console.log(value)
        let town = [{label: '团报', value: '777'}]
        console.log(this.province[this.p1].children[this.p2].children[this.p3])
        // debugger
        this.province[this.p1].children[this.p2].children[this.p3].children = town
        console.log(this.province[this.p1].children[this.p2].children[this.p3])
        this.$set(this.province, 'province', this.province)
      }
    },
    // 操作选中的数据
    handleChange (val) {
      console.log(val)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
