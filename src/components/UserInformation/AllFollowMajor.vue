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
            >
              <div class="major-box">
                <div class="majorspan1">{{ item.followName }}</div>
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
    <Footer class="homefooter"></Footer>
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
  font-size: 30px;
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
.pagination {
  padding-left: 35%;
}
.homefooter {
  margin-top: 1rem;
}
</style>
