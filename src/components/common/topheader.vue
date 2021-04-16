<template>
  <!--  包含内容：欢迎来到大数据智能高考志愿填报平台-->
  <!--  考哪儿   选择省份   搜大学-->
  <div class="app-header">
    <div class="firstRow">
      <el-row>
        <el-col :span="12">
          <div class="bg-left">欢迎来到大数据智能高考志愿填报平台</div>
        </el-col>
        <el-col :span="12">
          <div class="bg-right">
            <el-popover
              placement="top-start"
              width="160"
              trigger="hover"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/QQ.png" alt="" />
                <div>QQ扫一扫，惊喜更多</div>
              </div>
              <a class="a-erweima"  slot="reference">高考志愿填报QQ群</a>
            </el-popover>
            <el-popover
              placement="top-start"
              width="160"
              trigger="hover"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/QQ.png" alt="" />
                <div>下载智禾·考哪儿APP</div>
              </div>
              <a class="a-erweima" slot="reference">手机APP</a>
            </el-popover>
            <el-popover
              placement="top-start"
              width="160"
              trigger="hover"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/erweima.jpg" alt="" />
                <div>微信扫一扫,惊喜更多</div>
              </div>
              <a class="a-erweima" slot="reference">微信公众号</a>
            </el-popover>
            <a
              class="a-erweima"
              slot="reference"
              @click="VIPClick()"
              v-show="vip == 0"
              >志愿VIP卡激活</a>
            <a style="color:#e5623f;" slot="reference" v-show="vip == 1">志愿VIP卡已激活</a>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="secondRow">
      <el-row class="logo-search">
        <el-col :span="6">
          <div class="logo">
            <img src="../../assets/logo.png" class="img-logo" />
            <img src="../../assets/logo-word.png" class="img-logo-word" />
          </div>
        </el-col>
        <el-col  :span="8">
          <el-col :span="12">
            <el-autocomplete
              style="width: 320px"
              class="inline-input"
              v-model="collegename"
              :fetch-suggestions="querySearch"
              placeholder="查学校"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
              <i class="el-icon-search" slot="suffix"> </i>
              <template slot-scope="{ item }">
                <el-row>
                  <el-col :span="22">
                    <span>{{ item.schoolName }}</span>
                  </el-col>
                </el-row>
              </template>
            </el-autocomplete>
          </el-col>
        </el-col>
        <el-col :span="10">
          <div class="desc">
            <span class="top-hotline">全国服务热线:</span>
            <span class="hotline">400-168-6292</span>
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo" v-if="vip == 0" @click="VIPClick">开通VIP</span>
            <span class="tishiTwo" v-else>VIP会员</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getAllprovinces, getUserInfo, getsearchSchool } from "@/api/index";
export default {
  name: "top-header",
  data() {
    return {
      selectProvince: "",
      searchValue: "",
      userInfo: {},
      vip: this.$store.state.vip,
      provincesList: [],
      collegename: "",
      schooladvice: [],
    };
  },
  mounted() {
    this.getProvincesinit();
    this.getInfo();
  },
  methods: {
    getProvincesinit() {
      getAllprovinces().then((res) => {
        this.provincesList = res.data;
      });
    },
    VIPClick() {
      this.$router.push("/volunteerVIP");
    },
    getInfo() {
      getUserInfo().then((res) => {
        this.userInfo = res.data;
        this.vip = this.userInfo.vip;
        // console.log("1111", this.userInfo);
      });
    },
    querySearch(queryString, cb) {
      // 搜索框
      // console.log("ceshi", queryString, cb);
      getsearchSchool({
        schoolName: queryString,
      }).then((res) => {
        // console.log("mohu查询", res.data);
        this.schooladvice = res.data;
        cb(this.schooladvice);
      });
    },
    handleSelect(item) {
      // console.log("这是item");
      // console.log(item);
      this.$router.push({
        path: "/SchoolInfo",
        query: {
          SchoolName: item.schoolName,
        },
      });
    },
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.firstRow {
  width: 100%;
  font-size: 0.17rem;
}

.bg-logo {
  width: 100%;
  text-align: center;
  font-weight: 700;
}

.bg-QQ {
  width: 100%;
  height: 50%;
  margin-bottom: 0.06rem;
}

.bg-left {
  padding-left: 1rem;
  background-color: hsla(0, 0%, 61%, 0.3);
}

.bg-right {
  background-color: hsla(0, 0%, 61%, 0.3);
}

.bg-right a {
  padding: 0 0.6rem;
  color: black;
}

.bg-right a:hover {
  color: #e5623f;
}

.secondRow {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.e-input {
  margin-top: 0.06rem;
}
.secondRow .logo-search {
  margin-left: 0.2rem;
}

.secondRow .logo-search .search {
  margin-top: 0.1rem;
  width: 80%;
}

.secondRow .logo {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 0.8rem;
}

.secondRow .img-logo {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 10px;
}
.secondRow .img-logo-word {
  width: 300px;
  height: 0.5rem;
  border-radius: 10px;
}

.secondRow .plateName {
  display: inline;
  margin-left: 0.15rem;
  font-size: 0.4rem;
  font-family: monospace;
  font-weight: 800;
}
/deep/ .el-input__inner {
  height: 0.5rem;
  line-height: 0.5rem;
}
.inline-input {
  margin-top: 0.065rem;
}
.selectProvinceStyle {
  margin-top: 0.1rem;
  margin-left: 1rem;
  /*width: 35%;*/
}

.secondRow .desc {
  margin-top: 0.1rem;
  /* padding-left: 1.1rem; */
}
.secondRow .desc .top-hotline {
  padding-left: 0.1rem;
  font-size: 0.2rem;
}
.secondRow .desc .hotline {
  color: rgb(235, 16, 16);
  font-size: 0.2rem;
  font-weight: bold;
}
.tishiOne {
  margin-left: 0.8rem;
  border: 1px solid red;
  color: rgb(235, 16, 16);
}

.tishiTwo {
  cursor: pointer;
  border: 1px solid red;
  background-color: red;
  color: white;
}
.a-erweima-active {
  color:#e5623f;
}
</style>
