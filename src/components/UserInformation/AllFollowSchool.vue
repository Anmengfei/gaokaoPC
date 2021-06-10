<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div class="school">我关注的大学</div>
        <div class="item">
          <ul>
            <li
              v-for="(item, index) in AllFollowSchoolList.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
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
                        @click="deleteClick(index)"
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
              :page-size="pagesize"
              @current-change="handleCurrentChange"
              v-show="AllFollowSchoolList.length > 0"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <Footer class="homefooter"></Footer>
  </div>
</template>

<script>
import VolunteerTable from '@/components/zhiyuanForm/zhiyuanLeft'
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import {
  getUserInfo,
  getAllFollowSchool,
  unfollowSchool
} from '@/api/index.js'
export default {
  name: 'order',
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data () {
    return {
      userInfoList: [],
      AllFollowSchoolList: [],
      pagesize: 5,
      currentPage: 1,
      phoneNum: ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      getUserInfo(localStorage.getItem('token')).then((res) => {
        if (res.code == 0) {
          this.userInfoList = res.data
          this.phoneNum = this.userInfoList.phoneNum
          // console.log("这是我的手机号", this.phoneNum);
          let params = {
            phoneNum: this.userInfoList.phoneNum
          }
          getAllFollowSchool(params).then((res) => {
            this.AllFollowSchoolList = res.data
          // console.log("这是关注院校aaaaaaaaa");
          // console.log(this.AllFollowSchoolList);
          // console.log(this.followName);
          })
        } else {
          localStorage.clear()
          this.$store.dispatch('getVip', '')
          this.$store.dispatch('resUserInfo', {})
          this.$router.push('/appCon')
          // this.loginflag = false;
          this.$store.dispatch('getloginstate', false)
        }
      })
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage); //点击第几页
    },
    deleteClick (index) {
      let params = {
        phoneNum: this.phoneNum,
        schoolName: this.AllFollowSchoolList[index].followName
      }
      unfollowSchool(params).then((res) => {
        // console.log(res);
        // console.log("删除成功");
        this.AllFollowSchoolList.splice(index, 1)
      })
    }
  }
}
</script>
<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
}
.table-container {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.box-right {
  position: absolute;
  top: 0rem;
  left: 3.8rem;
  width: 75%;
  background-color: #fff;
  padding: 0 0.3rem;
}
.box-right .school {
  width: 100%;
  height: 0.7rem;
  /* border-bottom: 1px solid #e5e5e5; */
  line-height: 0.7rem;
  font-size: 0.25rem;
  color: #333;
  font-weight: 500;
}
li {
  list-style: none;
}
.item .schoolitemBox {
  /* border-bottom: 1px dashed #e5e5e5; */
  border-bottom: 1px solid #e5e5e5;
  padding: 0.2rem 0;
}
.item .empty {
  text-align: center;
  padding-top: 1rem;
}
.schoolLogo {
  /* margin-top: 0.05rem; */
  width: 1.3rem;
  height: 1.3rem;
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
.major-box {
  border-bottom: 0.5px solid #99a9bf;
  margin-bottom: 15px;
  background: #e5e9f2;
  height: 100px;
  line-height: 100px;
  padding-left: 150px;
}
.majorspan1 {
  font-size: 20px;
  font-weight: 700;
}
.majorspan {
  font-size: 12px;
  padding-left: 20px;
  color: #99a9bf;
}

.pagination {
  padding-left: 35%;
  /* position: absolute; */
  bottom: 0.1rem;
}
.homefooter {
  margin-top: 4rem;
}
</style>
