<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="content">
      <div class="table_head">
        <div class="title">
          <h3>志 愿 表 1</h3>
          <span>我的成绩：1段 613分</span><span>物理,化学,生物</span>
        </div>
        <div class="operation">
          <i class="iconfont icon-15" @click="gotoEdit" title="修改">修改</i>
          <i class="iconfont icon-baocun" @click="gotoSave(zhiyuanTableList)" title="保存">保存</i>
<!--          <button @click="gotoSave(zhiyuanTableList)">保存</button>-->
          <i class="iconfont icon-daochu" title="导出" @click="exportExcle">导出</i>
        </div>
      </div>
      <div class="tablecontent">
        <table class="bordered" ref="tables">
          <thead>
          <tr ref="tr1">
            <th>序号</th>
            <th>录取指标</th>
            <th>学校名称</th>
            <th>专业名称</th>
            <th>选课要求</th>
            <th>2020年招生计划</th>
            <th>2021年招生计划</th>
            <th>操作</th>
          </tr>
          </thead>
          <tr v-for="(item,index) in zhiyuanTableList" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{item.risk}}</td>
            <td>{{ item.schoolName }}{{item.schoolCode}}</td>
            <td>{{item.majorName}}</td>
            <td>{{item.selectionRequirement}}</td>
            <td>{{item.enrollNum}}</td>
            <td>暂无数据</td>
            <td>
              <div class="Btn">
                <div class="Btn1">
                  <i class="iconfont icon-top-btn-fill" @click="goUp(index)"></i>
                  <i class="iconfont icon-bottom-btn-fill" @click="goDown(index)"></i>
                </div>
                <div class="Btn2"><i class="iconfont icon-shanchu1" @click="handleDelete(index)"></i></div>
              </div>
<!--               <template>-->
<!--                 <el-button type="text" size="mini" :disabled="scope.$index===0" @click="goUp(scope.$index)"><i class="iconfont icon-top-btn-fill"></i></el-button>-->
<!--                 <el-button type="text" size="mini" :disabled="scope.$index===zhiyuanTableList.length-1" @click="goDown(scope.$index)"><i class="iconfont icon-bottom-btn-fill"></i></el-button>-->
<!--                 <el-button type="text" size="mini" @click="handleDelete(scope.$index)"><i class="iconfont icon-shanchu1"></i></el-button>-->
<!--               </template>-->
            </td>
          </tr>
        </table>
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
import { getToken } from '@/utils/auth.js'
import { addWishListPC } from '../../api/WishList'
import header1 from '../common/header1'
export default {
  name: 'zhiyuanBiao',
  components: {TopHeader, HomeHeader, Footer},
  mounted () {
    this.getAllData()
    this.setTableColor()
  },
  data () {
    return {
      zhiyuanTableList: [],
      zhiyuanFormatList: [] // 保存传给接口的数据，调整数据格式
    }
  },
  methods: {
    getAllData () {
      console.log("router信息",this.$route.params.zhiyuanTable)
      this.zhiyuanTableList = this.$route.params.zhiyuanTable
      window.sessionStorage.setItem('zhiyuanbiaodan', JSON.stringify(this.zhiyuanTableList))
      console.log('本地存储内容', JSON.parse(sessionStorage.getItem('zhiyuanbiaodan')))
      for (let i = 0; i < this.zhiyuanTableList.length; ++i) {
        this.zhiyuanTableList[i].xuhao = (i + 1)
      }
      console.log('志愿表单取得数据', this.zhiyuanTableList)
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
          zhiyuanTable: this.zhiyuanTableList,
          tab: 'favoriteSchool'
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
    gotoSave (zhiyuanTableList) { // 保存数据
      console.log('存储数据中。。。', zhiyuanTableList)
      if (zhiyuanTableList !== undefined) {
        for (let i = 0; i < zhiyuanTableList.length; i++) {
          const map = {}
          map.chance = zhiyuanTableList[i].risk
          map.id = 0
          map.listId = 0
          map.rank = i
          map.wishId = zhiyuanTableList[i].id
          map.wishNum = i
          this.zhiyuanFormatList.push(map)
        }
        console.log('格式化规整数据', this.zhiyuanFormatList)
        // addWishListPC({
        //   phoneNum: '15588556313',
        //   wishList: this.zhiyuanFormatList
        // }).then(res => {
        //   console.log('555555555555555555', res)
        // })
        var url = 'https://www.zytb.top/NEMT/gk/userPC/addWishListPC'

        axios.post(url, JSON.stringify(this.zhiyuanFormatList),
          {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "token": localStorage.getItem("token")
            }
          }

          // {
          //   headers: {
          //     token: localStorage.getItem('token')
          //
          //   }}
        ).then((res) => {
          console.log('成功了', res.data)
          if (res.data.msg === '成功') {
            sessionStorage.removeItem('zhiyuanbiaodan')
            console.log('sessionStorage内容清理', sessionStorage.getItem('zhiyuanbiaodan'))
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
    },
    setTableColor () { // 设置表格标题背景颜色
      var table = this.$refs.tables
      console.log('table', table)
      var tr = this.$refs.tr1
      console.log('tr', tr)
      tr.style.backgroundColor = '#f1f3f4'
    },
    exportExcle () { // 导出table为excle
      this.downloadLoading = true
      import('@/utils/Export2Excel').then((excel) => {
        const tHeader = ['序号', '录取指标', '学校名称', '专业名称', '选课要求', '2020年招生计划', '2021年招生计划']
        const filterVal = ['xuhao', 'risk', 'schoolName', 'majorName', 'selectionRequirement', 'enrollNum']
        const list = this.zhiyuanTableList
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader, // 必填   导出数据的表头
          data, // 必填   导出具体数据
          filename: '志愿表1', // 非必填   导出文件名
          autoWidth: true, // 非必填   单元格是否自动适应宽度
          bookType: 'xlsx' // 非必填   导出文件类型
        })
        this.downloadLoading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]))
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
  margin-right: .2rem;
}

.icon-baocun{
  cursor: pointer;
  font-size: .3rem;
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
.iconfont{
  width: .2rem;
  height: .2rem;
  font-size: .35rem;
  cursor: pointer;
}

.icon-top-btn-fill{
  display: block;
}
.icon-bottom-btn-fill{
  margin-top: .18rem;
  display: block;
}

.icon-shanchu1{
  color: #1e1e1e;
  cursor: pointer;

}

table {
  margin: .4rem auto;
  width: 15rem;
  border-spacing: 0;
  overflow: hidden;
  font-size: .25rem;
}

.bordered {
  border: .01rem solid #ccc;
}
.bordered td, .bordered th {
  padding:.2rem;
  border: .02rem solid #ccc;
  text-align: center;
}

.bordered th {
  border-top: none;
  height: .5rem;
}
.bordered td:first-child, .bordered th:first-child {
  border-left: none;
}

.Btn{
  display: flex;

}
.Btn1{
  flex: 1;
}
.Btn2{
  flex: 1;
  margin-left: .2rem;
  margin-top: .15rem;
}

</style>
