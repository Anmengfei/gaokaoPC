<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <!-- <div class="box-left">
        <div class="top-box">
          <img src="../../assets/head.jpg" class="zhiyuanpng" />
          <div class="yeardiv">高考年份：2021</div>
          <el-avatar icon="el-icon-user-solid" class="touxiang"></el-avatar>
          <el-button type="danger" class="VIPbtn">开通VIP</el-button>
          <div class="user-count">
            <el-row>
              <el-col :span="8">
                <div class="left-content">
                  <span>关注院校<br />0</span>
                </div></el-col
              >
              <el-col :span="8"
                ><div class="bet-content">
                  <span>关注专业<br />0</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="right-content">
                  <span>成绩<br />600分</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <a href="#">应用广场</a>
          <a href="#">我的社区</a>
          <a href="#">我的预约</a>
          <a href="#">我的讲堂</a>
          <a href="#">我的选科</a>
          <a href="#">我的职业</a>
          <div class="ceDiv">测</div>
          <a href="#">我的测评</a>
          <div class="ceDiv">填</div>
          <a href="#">我的志愿表</a>
        </div>
      </div> -->
      <div class="box-right">
        <h2>我的志愿表</h2>
        <div class="zhiyuantable">
          <el-table
            :data="willTable"
            border
            style="width: 97%"
            :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
          >
            <el-table-column label="志愿表" width="60">
              <template slot-scope="scope">{{scope.$index+1}}</template>
            </el-table-column>
            <el-table-column prop="userInformation[2]" label="分数"> </el-table-column>
            <el-table-column prop="userInformation[1]" label="选课"> </el-table-column>
            <el-table-column prop="userInformation[3]" label="排名"> </el-table-column>
            <el-table-column prop="quantity" label="意向志愿数目"> </el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <span id="chakan" @click="gotoZhiyuanbiao(scope.row.id)">查看</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="moniBtn">
          <el-button type="danger" @click="gotoSchoolRecommand">模拟填报</el-button>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import VolunteerTable from '@/components/zhiyuanForm/zhiyuanLeft'
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import { getWishListByphoneNum, getWishListById } from '@/api/WishList'
export default {
  name: 'zhiyuanTable',
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data () {
    return {
      willTable: [], // 志愿表数据
      phoneNum: '15588556313',
      volform: [] // 查看按钮取得的数据
    }
  },
  mounted () {
    this.getWishTable(this.phoneNum)
  },
  methods: {
    getWishTable (phoneNum) {
      getWishListByphoneNum(phoneNum).then((res) => {
        console.log('res数据', res.data)
        if (res.msg === '成功') {
          for (let i = 0; i < res.data.length; ++i) {
            res.data[i].userInformation = res.data[i].userInformation.split('|')
          }
          this.willTable = res.data
        }
      })
    },
    gotoSchoolRecommand () {
      // 模拟填报按钮跳转至院校优先
      this.$router.push({
        name: 'SchoolRecommand',
        params: { tab: 'favoriteSchool' }
      })
    },
    gotoZhiyuanbiao (id) { // 查看志愿表
      console.log('id值', id)
      getWishListById(id).then(res => {
        console.log('数据来了', res)
        if (res.msg === '成功') {
          this.volform = res.data.wishes
          for (let i = 0; i < this.volform.length; ++i) {
            this.volform[i].risk = this.volform[i].chances
            this.volform[i].selectionRequirement = this.volform[i].selectSubject
          }
          console.log('8888888888888', this.volform)
          this.$router.push({
            name: 'zhiyuanBiao',
            params: {
              zhiyuanTable: this.volform
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
}
h2 {
  margin-left: 0.3rem;
  font-size: 24px;
  color: #333;
  font-weight: 500;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 0;
}
/deep/ .el-table-column thead.is-group th {
  background: blue;
}
a {
  display: block;
  text-decoration: none;
  height: 0.6rem;
  width: 100%;
  background-color: #fff;
  color: #666666;
  line-height: 0.6rem;
  padding-left: 0.6rem;
}
a:hover {
  background-color: #e5e9f2;
}
.box-left {
  /* width: 3.5rem; */
  width: 25%;
  /* height: 1000px; */
  /* background-color: aqua; */
}
.box-right {
  position: absolute;
  width: 75%;
  height: 100%;
  background-color: #fff;
  top: 0rem;
  left: 3.8rem;
}
.top-box {
  position: relative;
}
.ceDiv {
  height: 0.5rem;
  widows: 100%;
  background-color: #e5e9f2;
  line-height: 0.5rem;
  padding-left: 0.3rem;
}
/deep/ .el-avatar {
  width: 100px;
  height: 100px;
}
/deep/ .el-avatar--icon {
  font-size: 50px;
}
/deep/ .el-icon-user-solid {
  line-height: 2;
}
.touxiang {
  position: absolute;
  top: 1.5rem;
  left: 0.18rem;
}
.left-content {
  min-height: 0.8rem;
  /* background: #99a9bf; */
  border-right: 0.5px solid #99a9bf;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.left-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.bet-content {
  min-height: 0.8rem;
  /* background: #d3dce6; */
  border-right: 0.5px solid #99a9bf;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.bet-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.right-content {
  min-height: 0.8rem;
  /* background: #e5e9f2; */
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.right-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.user-count {
  margin-top: 0.2rem;
}
.container {
  width: 100%;
  padding: 0;
}
.table-container {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.VIPbtn {
  margin-top: 0.15rem;
  margin-left: 1.35rem;
}

.zhiyuanpng {
  width: 100%;
  height: 200px;
  opacity: 0.8;
}
.yeardiv {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1.71rem;
  left: 0;
  width: 100%;
  padding-left: 1.4rem;
  color: #fff;
}
.zhiyuantable {
  width: 100%;
  padding-left: 0.3rem;
}
.moniBtn {
  margin-top: 0.5rem;
  margin-left: 40%;
}
#chakan{
  display: inline-block;
  cursor: pointer;
}

#chakan:hover{
  display: inline-block;
  cursor: pointer;
  color:red
}
</style>
