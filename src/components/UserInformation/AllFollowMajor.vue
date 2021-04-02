<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div style="witdh: 100%; height: 40px">关注院校</div>
        <div class="item">
          <ul class="major-list">
            <li
              class="major-item"
              v-for="(item, index) in AllFollowMajorList.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )"
              :key="index"
            >
              <div class="major-box">
                <span class="majorspan1">{{ item.followName }}</span>
                <span class="majorspan">{{ item.level }}</span>
                <span class="majorspan">{{ item.category }}</span>
                <span class="majorspan">{{ item.subject }}</span>
              </div>
            </li>
          </ul>
          <div class="pagination">
            <el-pagination
              :current-page="currentPage"
              :page-size="pagesize"
              :total="AllFollowMajorList.length"
              @current-change="handleCurrentChange"
              background
              layout="total,prev, pager, next"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import VolunteerTable from "@/components/zhiyuanForm/zhiyuanLeft";
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import { getAllFollowMajor } from "@/api/index.js";
export default {
  name: "install",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      AllFollowMajorList: [],
      pagesize: 5,
      currentPage: 1,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAllFollowMajor({ phoneNum: "13465631985" }).then((res) => {
        console.log("这是关注专业");
        this.AllFollowMajorList = res.data;
        console.log(this.AllFollowMajorList);
      });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
  },
};
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
  width: 75%;
  height: 710px;
  background-color: #fff;
  top: 0rem;
  left: 3.8rem;
}
.major-box {
  border-top: 0.5px solid #99a9bf;
  margin-bottom: 15px;
  /* background: #e5e9f2; */
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
  position: absolute;
  bottom: 0.1rem;
}
</style>
