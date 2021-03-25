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
          <i class="iconfont icon-15" @click="gotoEdit" title="修改"></i>
          <i class="iconfont icon-baocun" @click="gotoSave(zhiyuanTableList)" title="保存"></i>
<!--          <button @click="gotoSave(zhiyuanTableList)">保存</button>-->
          <i class="iconfont icon-daochu" title="导出"></i>
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
               <div class="op1">
                 <div class="btn1">
                   <el-button type="text" size="mini" :disabled="scope.$index===0" @click="goUp(scope.$index)"><i class="iconfont icon-top-btn-fill"></i></el-button>
                 </div>
                 <div class="btn2">
                   <el-button type="text" size="mini" :disabled="scope.$index===zhiyuanTableList.length-1" @click="goDown(scope.$index)"><i class="iconfont icon-bottom-btn-fill"></i></el-button>
                 </div>
               </div>
               <div class="op2">
                  <el-button type="text" size="mini" @click="handleDelete(scope.$index)">
                    <i class="iconfont icon-shanchu1"></i>
                  </el-button>
               </div>
             </div>
           </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import { addWishListPC } from '../../api/WishList'
export default {
  name: 'zhiyuanBiao',
  components: {TopHeader, HomeHeader, Footer},
  mounted () {
    this.getAllData()
  },
  data () {
    return {
      zhiyuanTableList: [],
      zhiyuanFormatList: [] // 保存传给接口的数据，调整数据格式
    }
  },
  methods: {
    set_cell_style () {
      return 'overflow: unset'
    },
    getAllData () {
      this.zhiyuanTableList = this.$route.params.zhiyuanTable
      console.log('志愿表单取得数据', this.zhiyuanTableList)
      window.sessionStorage.setItem('zhiyuanbiaodan', JSON.stringify(this.zhiyuanTableList))
      console.log('本地存储内容', JSON.parse(sessionStorage.getItem('zhiyuanbiaodan')))
    },
    indexMethod (index) {
      return index + 1
    },
    gotoEdit () { // 修改按钮，跳转回上一个界面
      window.sessionStorage.setItem('zhiyuanbiaodan', JSON.stringify(this.zhiyuanTableList))
      console.log('本地存储内容', JSON.parse(sessionStorage.getItem('zhiyuanbiaodan')))
      this.$router.push({
        name: 'SchoolRecommand',
        params: {
          zhiyuanTable: this.zhiyuanTableList
        }
      })
    },
    goUp (index) { // 上移
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
    goDown (index) { // 下移
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
    },
    gotoSave (zhiyuanTableList) {
      console.log('存储数据中。。。', zhiyuanTableList)
      if (zhiyuanTableList !== undefined) {
        for (let i = 0; i < zhiyuanTableList.length; i++) {
          const map = {
            'chance': zhiyuanTableList[i].risk,
            'id': 0,
            'listId': 0,
            'rank': i,
            'wishId': zhiyuanTableList[i].id,
            'wishNum': i}
          this.zhiyuanFormatList.push(map)
        }
        console.log('格式化规整数据', this.zhiyuanFormatList)
        var url = 'https://www.zytb.top/NEMT/gk/userPC/addWishListPC'
        axios.post(url, this.zhiyuanFormatList).then((res) => {
          console.log('成功了', res.data)
          if (res.data.msg === '成功') {
            sessionStorage.removeItem("zhiyuanbiaodan");
            console.log("sessionStorage内容清理",sessionStorage.getItem("zhiyuanbiaodan"))
            this.$router.push({
              name: 'addSucceed'
            })
          }
        })
      } else {
        this.$confirm('志愿表中缺少数据无法提交，即将跳转院校选择界面', '警告', {
          confirmButtonText: '跳转至院校优先',
          type: 'warning'
        }).then(() => {
          this.$router.push({
            name: 'SchoolRecommand',
            params: { tab: 'favoriteSchool' }
          })
        })
      }
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
  width: 100%;
}
.container .content .table_head{
  display: flex;
  width: 100%;
  height: 1rem;
  margin-bottom: .4rem;
  margin-left: .4rem;
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

.icon-15{
  cursor: pointer;
  font-size: .3rem;
  color: #fe9003;
  margin-right: .2rem;
}

.icon-baocun{
  cursor: pointer;
  font-size: .3rem;
  color: #27d272;
  margin-right: .2rem;
}
.icon-daochu{
  cursor: pointer;
  font-size: .3rem;

}

.container .content .tablecontent{
  width: 95%;
  text-align: center;
  margin: 0 auto;
  overflow: unset !important;
}
.operationBtn .iconfont{
  width: .2rem;
  height: .2rem;
  font-size: .35rem;
}

.operationBtn .icon-shanchu1{
  color: #1e1e1e;
}
.operationBtn {
  display: flex;
}
.operationBtn .op1{
  flex: 1;

}
.operationBtn .op2{
  flex: 3;
  display: flex;
  align-items: center;
  /*vertical-align: baseline;*/

}
.operationBtn .op1 .btn1{
  margin-bottom: .2rem;
}

</style>

<style>
/deep/ el-table{
  overflow: unset !important;
}

</style>
