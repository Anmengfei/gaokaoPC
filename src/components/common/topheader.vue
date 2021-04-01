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
              class="shouji"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/QQ.png" alt="" />
                <div>QQ扫一扫，惊喜更多</div>
              </div>
              <a class="a-erweima" href="" slot="reference">高考志愿填报QQ群</a>
            </el-popover>
            <el-popover
              placement="top-start"
              width="160"
              trigger="hover"
              class="shouji"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/QQ.png" alt="" />
                <div>下载智禾·考哪儿APP</div>
              </div>
              <a class="a-erweima" href="" slot="reference">手机APP</a>
            </el-popover>
            <el-popover
              placement="top-start"
              width="160"
              trigger="hover"
              class="shouji"
            >
              <div class="bg-logo">
                <img class="bg-QQ" src="../../assets/QQ.png" alt="" />
                <div>微信扫一扫，惊喜更多</div>
              </div>
              <a class="a-erweima" href="" slot="reference">微信公众号</a>
            </el-popover>
            <a
              class="a-erweima"
              slot="reference"
              @click="VIPClick()"
              v-if="vip == 0"
              >志愿VIP卡激活</a
            >
            <a class="a-erweima" slot="reference" v-else>志愿VIP卡已激活</a>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="secondRow">
      <el-row class="logo-search">
        <el-col :span="6">
          <div class="logo">
            <img src="../../assets/logo.jpg" class="img-logo" />
            <div class="plateName">智禾·考哪儿</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="e-input">
            <el-col :span="12">
              <el-autocomplete
                style="width: 320px"
                class="inline-input"
                v-model="collegename"
                :fetch-suggestions="querySearch"
                placeholder="查学校/查专业"
                :trigger-on-focus="false"
                @select="handleSelect"
              >
              </el-autocomplete>
            </el-col>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="desc">
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo" v-if="vip == 0" @click="gotoVIP"
              >开通VIP</span
            >
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
      vip: "",
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
      // const { href } = this.$router.resolve({
      //   name: "volunteerVIP",
      // });
      // window.open(href, "_blank");
      this.$router.push("/volunteerVIP");
    },
    gotoVIP() {
      this.$router.push("/volunteerVIP");
    },
    getInfo() {
      getUserInfo().then((res) => {
        this.userInfo = res.data;
        this.vip = this.userInfo.vip;
        console.log("1111", this.userInfo);
      });
    },
    querySearch(queryString, cb) {
      // 搜索框
      console.log("ceshi", queryString, cb);
      getsearchSchool({
        schoolName: queryString,
      }).then((res) => {
        console.log("mohu查询", res.data);
        this.schooladvice = res.data;
        cb(this.schooladvice);
      });
    },
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
  /* font-size: 100%; */
}

a {
  text-decoration: none;
  cursor: pointer;
}

.firstRow {
  width: 100%;
  height: 0.5rem;
  /* background-color: pink; */
  font-size: 0.17rem;
  line-height: 0.5rem;
}

.bg-logo {
  width: 100%;
  /* height: 100%; */
  /* background-color: pink; */
  text-align: center;
  font-weight: 700;
}

.bg-QQ {
  width: 100%;
  height: 50%;
  margin-bottom: 0.06rem;
}

.bg-left {
  /* background: #d3dce6; */
  height: 0.5rem;
  padding-left: 1rem;
  background-color: hsla(0, 0%, 61%, 0.3);
}

.bg-right {
  /* background: #e5e9f2; */
  height: 0.5rem;
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
}

.secondRow .plateName {
  display: inline;
  margin-left: 0.15rem;
  font-size: 0.4rem;
  font-family: monospace;
  font-weight: 800;
}

.selectProvinceStyle {
  margin-top: 0.1rem;
  margin-left: 1rem;
  /*width: 35%;*/
}

.secondRow .desc {
  margin-top: 0.1rem;
  padding-left: 0.8rem;
}

.tishiOne {
  border: 1px solid red;
  color: rgb(235, 16, 16);
}

.tishiTwo {
  cursor: pointer;
  border: 1px solid red;
  background-color: red;
  color: white;
}
</style>
