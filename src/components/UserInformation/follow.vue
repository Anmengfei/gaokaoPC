<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div class="tab">
          <div class="tab_list">
            <ul>
              <li class="current" id="1" index="0" @click="handleClick1()">
                商品介绍
              </li>
              <li id="2" index="1" @click="handleClick2()">关注院校</li>
              <li id="3" index="2" @click="handleClick3()">关注专业</li>
              <li id="4" index="3" @click="handleClick4()">商品评价</li>
              <li id="5" index="4" @click="handleClick5()">手机社区</li>
            </ul>
          </div>
          <div class="tab_con">
            <div class="item" style="display: block">商品介绍模块内容</div>
            <div class="item">
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
                      <el-col :span="7"
                        ><div class="grid-content bg-purple">
                          <div class="Logo">
                            <img class="schoolLogo" :src="item.logo" alt="" />
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="17"
                        ><div class="grid-content bg-purple-light">
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
                        </div></el-col
                      >
                    </el-row>
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
              <!-- <div class="hezi">123</div> -->
            </div>
            <div class="item">
              <ul class="major-list">
                <li
                  class="major-item"
                  v-for="(item, index) in AllFollowMajorList"
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
            <div class="item">商品评级模块内容</div>
            <div class="item">手机社区模块内容</div>
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
import { getAllFollowMajor } from "@/api/index.js";
export default {
  name: "follow",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      isRouterAlive: true, // 控制视图是否显示的变量
      input: "",
      AllFollowSchoolList: [],
      AllFollowMajorList: [],
      // Is985: false,
      // is211: false,
      isone: false,
      pagesize: 5,
      currentPage: 1,
    };
  },
  // mounted() {
  //   this.initData();
  // },
  computed: {},
  mounted() {
    this.initData();
  },
  methods: {
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
    initData() {
      getAllFollowSchool({ phoneNum: "13465631985" }).then((res) => {
        // console.log(res.data);
        this.AllFollowSchoolList = res.data;
        console.log(this.AllFollowSchoolList);
      });
      getAllFollowMajor({ phoneNum: "13465631985" }).then((res) => {
        // console.log(res.data);
        this.AllFollowMajorList = res.data;
        console.log("这是关注的专业");
        console.log(this.AllFollowMajorList);
      });
    },
    handleClick1() {
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      var id_1 = document.getElementById("1");
      getAllFollowSchool({ phoneNum: "13465631985" }).then((res) => {
        // console.log(res.data);
        this.AllFollowSchoolList = res.data;
        console.log(this.AllFollowSchoolList);
      });
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
      }
      id_1.className = "current";
      var index = id_1.getAttribute("index");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[index].style.display = "block";
    },
    handleClick2() {
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      var id_1 = document.getElementById("2");
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
      }
      id_1.className = "current";
      var index = id_1.getAttribute("index");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[index].style.display = "block";
    },
    handleClick3() {
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      var id_1 = document.getElementById("3");
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
      }
      id_1.className = "current";
      var index = id_1.getAttribute("index");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[index].style.display = "block";
    },
    handleClick4() {
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      var id_1 = document.getElementById("4");
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
      }
      id_1.className = "current";
      var index = id_1.getAttribute("index");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[index].style.display = "block";
    },
    handleClick5() {
      var tab_list = document.querySelector(".tab_list");
      var lis = tab_list.querySelectorAll("li");
      var items = document.querySelectorAll(".item");
      var id_1 = document.getElementById("5");
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
      }
      id_1.className = "current";
      var index = id_1.getAttribute("index");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[index].style.display = "block";
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
  },
};
</script>
<style scoped>
/* .hezi {
  width: 900px;
  height: 600px;
  background-color: pink;
} */
.school-list {
  width: 100%;
  /* height: 600px; */
  /* background-color: pink; */
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
  background: #e5e9f2;
}
.bg-purple-light {
  background: #e5e9f2;
}
.tab_con {
  margin-top: 2px;
  width: 978px;
}
/* .item1 {
  width: 978px;
  background-color: yellow;
} */
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
  height: 100%;
  background-color: #fff;
  top: 0rem;
  left: 3.8rem;
}
/* 关注部分 */
li {
  list-style: none;
}
.schoolitemBox {
  border-bottom: 0.5px solid #99a9bf;
  margin-bottom: 15px;
}
.tab {
  width: 978px;
  margin: 0 auto;
  background-color: pink;
  height: 39px;
}
.tab_list {
  height: 39px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.tab_list li {
  float: left;
  height: 39px;
  line-height: 39px;
  padding: 0 40px;
  text-align: center;
  cursor: pointer;
}
.tab_list .current {
  background-color: #c81623;
  color: #fff;
}
.item {
  display: none;
}
.Logo {
  margin-top: 0.05rem;
  padding-left: 1.6rem;
}
.schoolLogo {
  margin-top: 0.05rem;
  width: 1rem;
  height: 1rem;
}
.desc {
  margin-top: 0.05rem;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  padding-left: 0.4rem;
}
.name {
  font-weight: 800;
}
.province {
  font-size: 0.15rem;
  margin-left: 0.2rem;
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
}
</style>
