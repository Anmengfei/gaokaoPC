<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div style="witdh: 100%; height: 40px">关注院校</div>
        <div>
          <ul class="school-list">
            <li
              class="school-item"
              v-for="(item, index) in AllFollowSchoolList.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )"
              :key="index"
            >
              <div class="schoolitemBox">
                <el-row>
                  <el-col :span="7">
                    <div class="Logo">
                      <img class="schoolLogo" :src="item.logo" alt="" />
                    </div>
                  </el-col>
                  <el-col :span="17">
                    <div class="desc">
                      <span class="name">{{ item.followName }}</span>
                      <span class="province">{{ item.province }}</span>
                    </div>
                    <div class="schooltags">
                      <span>教育部</span>
                      <span>{{ item.type }}</span>
                      <span>公办</span>
                      <!-- <span v-show="Is985">{{ jiubawu(item.f985) }}</span> -->
                      <span>{{ jiubawu(item.f985) }}</span>
                      <span>{{ eryaoyao(item.f211) }}</span>
                      <span v-show="isone">{{
                        doubleOneSchool(item.dualClassName)
                      }}</span>
                      <!-- <span v-show="Is211">{{
                              eryaoyao(item.f211)
                            }}</span>
                            <span v-show="IsOne">{{
                              shuangyiliu(item.dualClassName)
                            }}</span> -->
                    </div>
                  </el-col>
                </el-row>
              </div>
            </li>
          </ul>
          <div class="pagination">
            <el-pagination
              background
              layout="total,prev, pager, next"
              :total="AllFollowSchoolList.length"
              :current-page="currentPage"
              :page-size="pagesize"
              @current-change="handleCurrentChange"
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
import { getAllFollowSchool } from "@/api/index.js";
export default {
  name: "order",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      isRouterAlive: true, // 控制视图是否显示的变量
      input: "",
      isone: false,
      AllFollowSchoolList: [],
      pagesize: 4,
      currentPage: 1,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAllFollowSchool({ phoneNum: "13465631985" }).then((res) => {
        console.log("这是关注院校");
        this.AllFollowSchoolList = res.data;
        console.log(this.AllFollowSchoolList);
      });
    },
    jiubawu(date) {
      if (date == 1) {
        return 985;
      }
    },
    eryaoyao(date) {
      if (date == "1") {
        return "211";
      }
    },
    doubleOneSchool(date) {
      if (date === "") {
        this.Isone = false;
      } else if (date === "双一流") {
        this.isone = true;
        return "双一流";
      }
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
  },
};
</script>
<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
}
/deep/.shurukuang .el-input {
  border-color: red;
  width: 300px;
}
.grid-content {
  min-height: 0.6rem;
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
  /* background-color: pink; */
}
.school-list {
  width: 100%;
  /* height: 600px; */
  /* background-color: pink; */
}
li {
  list-style: none;
}
.schoolitemBox {
  border-top: 0.5px solid #99a9bf;
  /* border-bottom: 0.5px solid #99a9bf; */
  margin-bottom: 15px;
  height: 1.3rem;
}
.Logo {
  /* margin-top: 0.05rem; */
  height: 1.3rem;
  line-height: 1.3rem;
  padding-left: 1.6rem;
}
.schoolLogo {
  /* margin-top: 0.05rem; */
  width: 1rem;
  height: 1rem;
}
.desc {
  /* background-color: blue;
  margin-top: 0.05rem;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  padding-left: 0.4rem; */
  margin-top: 0.2rem;
}
.name {
  font-weight: 800;
}
.province {
  font-size: 0.15rem;
  margin-left: 0.2rem;
}
.schoolitemBox .schooltags {
  /* padding-bottom: 10px; */
  /* background-color: aqua; */
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
.bg-purple {
  /* background: #d3dce6; */
  /* background: #e5e9f2; */
}
.bg-purple-light {
  /* background: #e5e9f2; */
}
.pagination {
  padding-left: 35%;
  position: absolute;
  bottom: 0.1rem;
}
</style>
