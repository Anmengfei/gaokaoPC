<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="Tab" :style="{ minHeight: minHeight + 'px'}">
        <div class="top-box">
          <img src="../../assets/head.jpg" class="zhiyuanpng" />
          <div class="yeardiv">
            <span>高考年份:</span>
            <span>{{ userInfoList.examYear }}</span>
          </div>
          <div>
            <el-avatar
              icon="el-icon-user-solid"
              class="touxiang"
              src=""
            ></el-avatar>
          </div>
          <el-button v-show="!vipbtn" class="VIPbtn" type="danger" @click="VIPClick()" v-text="vipword"></el-button>
          <div v-show="vipbtn" class="VIPbtn">
            <span class="VIP">VIP会员</span>&nbsp;&nbsp;
            <span class="date">{{endtime}}</span>
          </div>
          <div class="user-count">
            <el-row>
              <el-col :span="8">
                <div class="left-content">
                  <!-- <button @click="AllFollowSchoolClick()">关注院校</button> -->
                  <span style="font-size: 15px; color: #333">收藏院校<br /></span>
                  <span style="font-size: 14px; font-weight: 700; color: #333">{{ SchoolLength }}</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bet-content">
                  <!-- <button @click="AllFollowMajorClick()">关注专业</button> -->
                  <span style="font-size: 15px; color: #333">收藏专业<br /></span>
                  <span style="font-size: 14px; font-weight: 700; color: #333">{{ MajorLength }}</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="right-content">
                  <span style="font-size: 15px; color: #333">成绩<br /></span>
                  <span style="font-weight: 700; color: #f56c6c">{{ userInfoList.score }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="我的志愿表">
                <div class="volunteer">
                  <!-- <div>12345</div> -->
                  <!-- <span>我的志愿表</span> -->
                  <div class="zhiyuantable11">
                    <el-table
                      :data="willTable"
                      border
                      style="width: 97%"
                      :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
                    >
                      <el-table-column label="志愿表" align="center">
                        <template slot-scope="scope">
                          <span style="font-size:.12rem ; color:#409eff" v-if="willTable[scope.$index].wishNum==2">{{ '一键填报表' }}</span>
                          <span style="font-size:.12rem ; color:#409eff" v-else>{{ '智能填报表' }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="userInformation[2]"
                        label="分数"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="userInformation[1]"
                        label="选科"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="userInformation[3]"
                        label="排名"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="quantity"
                        label="意向志愿数目"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column prop="address" label="操作" align="center">
                        <template slot-scope="scope">
                          <!-- <span id="chakan" @click="gotoZhiyuanbiao(scope.row.id)">查看</span> -->
                          <span id="chakan" @click="gotoZhiyuanbiao(willTable[scope.$index].wishNum)">查看</span>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                  <!-- <div class="moniBtn">
                    <el-button type="danger" @click="gotoSchoolRecommand"
                      >模拟填报</el-button>
                  </div> -->
                </div>
            </el-tab-pane>
            <el-tab-pane label="收藏院校">
               <div class="volunteer">
                  <!-- <span>我关注的大学</span> -->
                  <div class="item">
                    <ul>
                      <li
                        v-for="(item, index) in AllFollowSchoolList.slice(
                          (currentPage - 1) * pageSchoolsize,
                          currentPage * pageSchoolsize
                        )"
                        :key="index"
                        v-show="AllFollowSchoolList.length > 0"
                      >
                        <div class="schoolitemBox">
                          <el-row>
                            <el-col :span="4">
                              <div class="Logo">
                                <img class="schoolLogo" :src="item.logo" alt="" />
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="desc">
                                <span class="name">{{ item.followName }}</span>
                                <span class="province">{{ item.province }}</span>
                                <el-button
                                  class="deleteBtn"
                                  type="danger"
                                  @click="deleteSchoolClick(index)"
                                  >删除</el-button
                                >
                              </div>
                              <div class="schooltags">
                                <span>{{ item.type }}</span>
                                <!-- <span v-show="Is985">{{ jiubawu(item.f985) }}</span> -->
                                <span v-if="item.f985 === 1">985</span>
                                <span v-if="item.f211 === 1">211</span>
                                <span v-if="item.dualClassName === '双一流'">双一流</span>
                                <!-- <span v-show="isone">{{
                                  doubleOneSchool(item.dualClassName)
                                }}</span> -->
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </li>
                    </ul>
                    <div class="empty" v-show="AllFollowSchoolList == 0">
                      <!-- <span style="font-size: 0.3rem">暂无关注</span> -->
                      <img src="@/assets/empty.png" alt="" />
                    </div>
                    <div class="pagination">
                      <el-pagination
                        background
                        layout="total,prev, pager, next"
                        :total="AllFollowSchoolList.length"
                        :current-page="currentPage"
                        :page-size="pageSchoolsize"
                        @current-change="handleCurrentChange"
                        v-show="AllFollowSchoolList.length > 0"
                      >
                      </el-pagination>
                    </div>
                  </div>
               </div>
            </el-tab-pane>
            <el-tab-pane label="收藏专业">
              <div class="volunteer">
                <!-- <span>我关注的专业</span> -->
                <div class="item">
                  <ul>
                    <li
                      v-for="(item, index) in AllFollowMajorList.slice(
                        (currentPage - 1) * pageMajorsize,
                        currentPage * pageMajorsize
                      )"
                      :key="index"
                      v-show="AllFollowMajorList.length > 0"
                    >
                      <div class="major-box">
                        <div class="majorspan1">{{ item.followName }}</div>
                        <span class="majorspan">{{ item.level }}</span>
                        <span class="majorspan">{{ item.category }}</span>
                        <span class="majorspan">{{ item.subject }}</span>
                        <el-button
                          class="deleteBtn"
                          type="danger"
                          @click="deleteMajorClick(index)"
                          >删除</el-button
                        >
                      </div>
                    </li>
                  </ul>
                  <div class="empty" v-show="AllFollowMajorList == 0">
                    <!-- <span style="font-size: 0.3rem">暂无关注</span> -->
                    <img class="emptyImg" src="@/assets/empty.png" alt="" />
                  </div>
                  <div class="pagination">
                    <el-pagination
                      :current-page="currentPage"
                      :page-size="pageMajorsize"
                      :total="AllFollowMajorList.length"
                      @current-change="handleCurrentChange"
                      background
                      layout="total,prev, pager, next"
                      v-show="AllFollowMajorList.length > 0"
                    >
                    </el-pagination>
                  </div>
                </div>
              </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import { getUserInfo } from "@/api/index.js";
import { getAllFollowMajor } from "@/api/index.js";
import { getAllFollowSchool } from "@/api/index.js";
import { getWishListByphoneNum } from "@/api/WishList";
// import { getAllHandleWishId } from "@/api/index";
import { unfollowSchool } from "@/api/index.js";
import { unfollowMajor } from "@/api/index.js";
export default {
  name: "zhiyuan",
  components: { TopHeader, HomeHeader, Footer},
  data() {
    return {
        tabPosition: 'left',
        userInfoList: [],
        AllFollowMajorList: [],
        AllFollowSchoolList: [],
        MajorLength: 0,
        SchoolLength: 0,
        vipbtn: false,
        vipword: "开通vip",
        endTime:[],
        endtime:[],
        willTable: [], // 志愿表数据
        phoneNum: "",
        volform: [], // 查看按钮取得的数据
        listId:0,
        pageSchoolsize: 4,
        pageMajorsize: 5,
        currentPage: 1,
        phoneNum: "",
        minHeight:0,
    };
  },
  mounted() {
    // 动态设置内容高度，让footer始终居于底部
    this.minHeight=document.documentElement.clientHeight-150
    // 监听浏览器窗口变化
    window.onresize=function(){
      this.minHeight=document.documentElement.clientHeight-150
    }
    this.initData();
    this.phoneNum = localStorage.getItem("phone");
    this.getWishTable(this.phoneNum);
  },
  methods: {
    initData() {
      // let params={
      //     phoneNum:localStorage.getItem("phone")
      // }
      // getAllHandleWishId(params).then((res) => {
      //     this.listId=res.data;
      // }),
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        if (this.userInfoList.vip == 0) {
          this.vipbtn = false;
        } else {
          this.vipbtn = true;
          // this.endTime=this.userInfoList.endTime.split("")
          this.endTime=this.userInfoList.endTime.replace(/\"/g, "")
          this.endtime=this.endTime.slice(0,11)
          // this.vipword = "已开通VIP";
        }
        let params = {
          phoneNum: parseInt(this.userInfoList.phoneNum),
        };
        getAllFollowMajor(params).then((res) => {
          this.AllFollowMajorList=res.data;
          if(res.data === null){
            this.AllFollowMajorList=[];
            this.MajorLength = 0;
          }else{
            this.MajorLength = this.AllFollowMajorList.length;
          }
          
        });
        getAllFollowSchool(params).then((res) => {
          this.AllFollowSchoolList=res.data
          // console.log('查看一下获取学校的数量',this.AllFollowSchoolList)
          if(res.data === null){
            this.AllFollowSchoolList=[];
            this.SchoolLength=0;
          }else{
            this.SchoolLength= this.AllFollowSchoolList.length;
          }
        });
      });
    },
    getWishTable(phoneNum) {
      getWishListByphoneNum(phoneNum).then((res) => {
        if (res.data.msg === "成功") {
          for (let i = 0; i < res.data.data.length; ++i) {
            res.data.data[i].userInformation = res.data.data[i].userInformation.split(
              "|"
            );
          }
          this.willTable = res.data.data;
          if(this.willTable[0].wishNum<this.willTable[1].wishNum){
            let a=this.willTable[0];
            this.willTable[0]=this.willTable[1];
            this.willTable[1]=a
          }
        }
      });
    },
     // 模拟填报按钮跳转至院校优先
    // gotoSchoolRecommand() {
    //   this.$router.push({
    //     name: "SchoolRecommand",
    //     params: { tab: "favoriteSchool" },
    //   });
    // },
    gotoZhiyuanbiao(wishNum){
      // console.log('id',id)
      // this.$router.push('/zhiyuanBiao')
      if(wishNum===2){
        // this.$router.push('/zhiyuanBiao')
        this.$router.push({
          path: "/zhiyuanBiao",
          query: {
            wishNum: 2,
            listId:this.willTable[0].id
          },
        });
      }else{
        this.$router.push({
          path: "/zhiyuanBiao",
          query: {
            wishNum: 1,
            listId:this.willTable[1].id
          },
        });
      }
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage); //点击第几页
    },
    deleteSchoolClick(index) {
      let params = {
        phoneNum: this.phoneNum,
        schoolName: this.AllFollowSchoolList[index].followName,
      };
      unfollowSchool(params).then((res) => {
        // console.log(res);
        // console.log("删除成功");
        this.AllFollowSchoolList.splice(index, 1);
      });
    },
    deleteMajorClick(index) {
      console.log("删除成功",index);
      let params = {
        majorName: this.AllFollowMajorList[index].followName,
        phoneNum: this.phoneNum,
      };
      unfollowMajor(params).then((res) => {
        // console.log(res);
        console.log("删除成功");
        this.AllFollowMajorList.splice(index, 1);
      });
    }, 
    VIPClick(){
      this.$router.push('/volunteerVIP')
    } 
  },
};
</script>
<style scoped>

.Tab{
    position: relative;
    height: 7.5rem;
    width: 14.5rem;
    margin: 0 auto;
    margin-top: .8rem;
    /* background-color: pink; */
}

.volunteer{
    width: 10rem;
    /* background-color: pink; */
}

/deep/ .el-tabs--left .el-tabs__header.is-left {
    float: left;
    /* margin-bottom: 0; */
    margin-top: 3.7rem;
    margin-right: .1rem;
}

/deep/ .el-tabs__nav-scroll {
  width: 3.5rem;
  /* background-color: pink; */
}

/deep/ .el-tabs--left .el-tabs__nav-wrap.is-left{
  height: 2.4rem;

}

/deep/ .el-tabs__item {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.18rem;

}

/deep/ .el-tabs__item.is-active {

    background-color:#e5e9f2;
}

/deep/ .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
}

/deep/ .el-tabs__content {
  left: .5rem;
}

.zhiyuanpng {
  position: absolute;
  width: 3.5rem;
  height: 2rem;
  /* opacity: 0.8; */
}

.top-box .yeardiv{
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1.7rem;
  left: 0;
  width: 3.5rem;
  padding-left: 1.4rem;
  font-size:.2rem;
  color: #fff;
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

.VIPbtn {
  position: absolute;
  top: 2.05rem;
  left: 1.33rem;
}

.VIPbtn .VIP{
  font-size:.18rem;
  color: darkgoldenrod;
  font-weight: 700;
}

.VIPbtn .date{
  font-size:.16rem;
  color: darkgoldenrod;

}

.user-count{
  position: absolute;
  width: 3.5rem;
  top: 2.8rem;

}

.left-content {
  min-height: 0.8rem;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}

.bet-content {
  min-height: 0.8rem;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}

.right-content {
  min-height: 0.8rem;
  /* background: #e5e9f2; */
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}

.volunteer span{
    font-size: .24rem;
    color: #333;
    font-weight: 500;
}

.zhiyuantable11 {
  margin-top: .3rem;
  padding-left: 0.3rem;
}

/* .volunteer .moniBtn {
  margin-top: 0.5rem;
  margin-left: 45%;
} */

#chakan {
  display: inline-block;
  color: #409eff;
  font-size: .16rem;
  cursor: pointer;
}

#chakan:hover {
  display: inline-block;
  cursor: pointer;
  color: red;
}

.item .empty {
  text-align: center;
  padding-top: 1rem;
}

.item .schoolitemBox {
  /* border-bottom: 1px dashed #e5e5e5; */
  border-bottom: 1px solid #e5e5e5;
  padding: 0.1rem 0;
}

.schoolLogo {
  /* margin-top: 0.05rem; */
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 1rem;
}

.schoolitemBox .desc {
  margin-top: 0.15rem;
  padding: 0.07rem 0;
  border-bottom: 1px dashed #e5e5e5;
  /* background-color: pink; */
}

.schoolitemBox .desc .name {
  font-size: 0.25rem;
  font-weight: 600;
}

.schoolitemBox .desc .province {
  font-size: 0.15rem;
  margin-left: 0.2rem;
}

.schoolitemBox .desc .deleteBtn {
  float: right;
  margin-top: 0.5rem;
  /* margin-left: 5rem; */
}

.schooltags span {
  display: inline-block;
  margin-right: 0.25rem;
  margin-top: 0.1rem;
  padding: 0.1rem 0.15rem;
  color: #999;
  font-size: 0.05rem;
  border: 0.02rem solid #e4e4e4;
  border-radius: 0.15rem;
}

.pagination {
  padding-left: 35%;
  /* position: absolute; */
  bottom: 0.1rem;
}

.item .major-box {
  border-bottom: 1px dashed #e5e5e5;
  padding: 0.2rem 0;
}

.item .major-box .majorspan1 {
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
}

.item .major-box .majorspan {
  font-size: 12px;
  color: #99a9bf;
}

.item .major-box .deleteBtn {
  float: right;
  margin-top: -0.4rem;
}


</style>
