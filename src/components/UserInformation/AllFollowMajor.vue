<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div class="major">我关注的专业</div>
        <div class="item">
          <ul>
            <li
              v-for="(item, index) in AllFollowMajorList.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
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
                  @click="deleteClick(index)"
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
              :page-size="pagesize"
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
    </div>
    <Footer class="homefooter"></Footer>
  </div>
</template>

<script>
import VolunteerTable from '@/components/zhiyuanForm/zhiyuanLeft'
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import { getUserInfo, getAllFollowMajor, unfollowMajor } from '@/api/index.js'
export default {
  name: 'install',
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data () {
    return {
      userInfoList: [],
      AllFollowMajorList: [],
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
          let params = {
            phoneNum: this.userInfoList.phoneNum
          }
          getAllFollowMajor(params).then((res) => {
            // console.log("这是关注专业");
            this.AllFollowMajorList = res.data
            // console.log(this.AllFollowMajorList);
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
        majorName: this.AllFollowMajorList[index].followName,
        phoneNum: this.phoneNum
      }
      unfollowMajor(params).then((res) => {
        // console.log(res);
        // console.log("删除成功");
        this.AllFollowMajorList.splice(index, 1)
      })
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
}
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
  /* height: 8rem; */
  background-color: #fff;
  padding: 0 0.3rem;
}
.box-right .major {
  width: 100%;
  height: 0.7rem;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.7rem;
  font-size: 0.25rem;
  color: #333;
  font-weight: 500;
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
.item .empty {
  text-align: center;
  padding-top: 1rem;
}
.pagination {
  padding-left: 35%;
}
.homefooter {
  margin-top: 2.2rem;
}
</style>
