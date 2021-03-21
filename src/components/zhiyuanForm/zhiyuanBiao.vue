<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="content">
      <div class="table_head">
        <div class="title">
          <h3>志 愿 表 1</h3>
          <span>我的成绩：1段 613分 物理,化学,生物</span>
        </div>
        <div class="operation">
          <button>修改</button>
          <button>保存</button>
          <button>导出</button>
          <button>打印</button>
          <button>分享</button>
        </div>
      </div>
      <div class="tablecontent">
        <el-table
          :data="zhiyuanTableList"
          max-width="50px"
          :cell-style="set_cell_style"
          style="overflow: unset!important;"
          :header-cell-style="{background:'#f0f9eb',fontSize:'20px',height:'35px'}"
          :row-style="{fontSize:'20px',color:'#666',height: '150px',overflow: 'unset'}"
        >
          <el-table-column
            type="index"
            label="序号"
            :index="indexMethod"
            width="60">
          </el-table-column>
          <el-table-column
            prop="risk"
            label="录取指标"
            width="180">
          </el-table-column>
          <el-table-column
            prop="schoolName"
            label="学校名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="majorName"
            label="专业名称">
          </el-table-column>
          <el-table-column
            prop="enrollNum"
            label="2021年招生计划">
          </el-table-column>
          <el-table-column
            label="操作">
           <template slot-scope="scope">
             <div class="operationBtn">
               <el-button type="text" size="mini" :disabled="scope.$index===0" @click="goUp(scope.$index,scope.row)">上移</el-button>
               <el-button type="text" size="mini" :disabled="scope.$index===zhiyuanTableList.length-1" @click="goDown(scope.$index,scope.row)">下移</el-button>
             </div>
             <el-button type="text" size="mini" @click="handleDelete(scope.$index)">删除</el-button>
           </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
export default {
  name: 'zhiyuanBiao',
  components: {TopHeader, HomeHeader, Footer},
  mounted () {
    this.getAllData()
  },
  data () {
    return {
      zhiyuanTableList: []
    }
  },
  methods: {
    set_cell_style () {
      return 'overflow: unset'
    },
    getAllData () {
      this.zhiyuanTableList = this.$route.params.zhiyuanTable
      console.log('志愿表单取得数据', this.zhiyuanTableList)
    },
    indexMethod (index) {
      return index + 1
    },
    goUp (index, row) { // 上移
      console.log('row的信息', row)
      console.log('index的信息', index)
      var that = this
      if (index > 0) {
        // 获取当前点击的上一条数据
        const upDate = that.zhiyuanTableList[index - 1]
        console.log(upDate)
        // 移除上一条数据
        that.zhiyuanTableList.splice(index - 1, 1)
        // 把上一条数据插入当前点击的位置
        that.zhiyuanTableList.splice(index, 0, upDate)
      }
    },
    goDown (index, row) { // 下移
      var that = this
      const downDate = that.zhiyuanTableList[index + 1]
      that.zhiyuanTableList.splice(index + 1, 1)
      that.zhiyuanTableList.splice(index, 0, downDate)
    },
    handleDelete (index) { // 删除
      // 设置类似于console类型的功能
      this.$confirm('从志愿表单删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.zhiyuanTableList.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }

  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
/deep/ .el-table .cell {
  overflow: unset;
}
.container{
  background-color: white;
  width: 100%;
}
.homeheader {
  width: 100%;
  margin-top: .2rem;
  height: .7rem;
  background-color: #ff5a38 !important;
}
.container .content .table_head{
  background-color: #00aff0;
  display: flex;
  width: 100%;
  height: 1rem;
  margin-bottom: .4rem;
}
.content .table_head .title{
  flex:5;
  padding-left: .3rem;
  margin-top: .2rem;
}
.content .table_head .operation {
  flex: 2;
  padding-left: .5rem;
  margin-top: .3rem;
}

.container .content .tablecontent{
  width: 95%;
  text-align: center;
  margin: 0 auto;
  overflow: unset !important;
}

</style>

<style>
/deep/ el-table{
  overflow: unset !important;
}

</style>
