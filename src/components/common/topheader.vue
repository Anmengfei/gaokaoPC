<template>
  <!--  包含内容：欢迎来到大数据智能高考志愿填报平台-->
  <!--  考哪儿   选择省份   搜大学-->
  <div class="app-header">
    <div class="bgGrey">
      <el-row :gutter="20">
        <el-col :span="8" class="welcomeWord">
          <span class="ml50">欢迎来到大数据智能高考志愿填报平台</span>
        </el-col>
        <el-col :span="7"> &nbsp; </el-col>
        <el-col :span="9">
          <el-row :gutter="20">
            <el-col :span="7">
              <el-popover
                placement="top-start"
                width="150"
                trigger="hover"
                class="shouji"
              >
                <div class="erweima">
                  <img class="qq" src="../../assets/QQ.png" alt="" />
                  <div>QQ扫一扫，一键入群</div>
                </div>
                <el-button class="phone-btn" slot="reference"
                  >高考志愿填报QQ群</el-button
                >
              </el-popover>
            </el-col>
            <el-col :span="5">
              <!-- <span>手机APP</span> -->
              <el-popover
                placement="top-start"
                width="150"
                trigger="hover"
                class="shouji"
              >
                <div class="erweima">
                  <img class="qq" src="../../assets/QQ.png" alt="" />
                  <div>QQ扫一扫，一键入群</div>
                </div>
                <el-button class="phone-btn" slot="reference"
                  >手机APP</el-button
                >
              </el-popover>
            </el-col>
            <el-col :span="6">
              <el-popover
                placement="top-start"
                width="150"
                trigger="hover"
                class="shouji"
              >
                <div class="erweima">
                  <img class="qq" src="../../assets/QQ.png" alt="" />
                  <div>QQ扫一扫，一键入群</div>
                </div>
                <el-button class="phone-btn" slot="reference"
                  >微信公众号</el-button
                >
              </el-popover>
            </el-col>
            <el-col :span="6">
              <div class="vipSpan">
                <span>志愿VIP卡激活</span>
              </div>
            </el-col>
          </el-row>
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
          <el-col :span="12">
            <el-select
              v-model="selectProvince"
              placeholder="请选择报考省份"
              clearable
              class="selectProvinceStyle"
            >
              <el-option
                v-for="dict in provincesList"
                :key="dict"
                :label="dict"
                :value="dict"
              ></el-option> </el-select
          ></el-col>
          <el-col :span="12"
            ><el-input
              v-model="searchValue"
              placeholder="搜大学/查专业"
              suffix-icon="el-icon-search"
              class="search"
            ></el-input
          ></el-col>
        </el-col>
        <el-col :span="6">
          <div class="desc">
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo">开通VIP</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getAllprovinces } from "@/api/index";
export default {
  name: "top-header",
  data() {
    return {
      selectProvince: "",
      searchValue: "",
      provincesList: [],
    };
  },
  mounted() {
    this.getProvincesinit();
  },
  methods: {
    getProvincesinit() {
      getAllprovinces().then((res) => {
        this.provincesList = res.data;
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.phone-btn {
  background-color: hsla(0, 0%, 90%, 0.3);
  /* background-color: #dcdfe6; */
  border: none;
}
.welcomeWord {
  /* text-align: center; */
  /* line-height: 1; */
  margin-top: 0.09rem;
}
.vipSpan {
  margin-top: 0.09rem;
}
.erweima {
  /* margin: 0 auto; */
  margin-top: 7%;
  margin-left: 10%;
  width: 100%;
  height: 100%;
}
.erweima .qq {
  width: 80%;
}

.app-header {
  width: 100%;
  font-size: 100%;
}
.welcome {
  margin-left: 0.2rem;
}
.bgGrey {
  background-color: rgba(155, 155, 155, 0.3);
  font-size: 0.15rem;
}
.bgGrey .el-rows {
  padding: 0.02rem 0.01rem;
}
.secondRow {
  height: 50px;
  line-height: 50px;
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
}

.tishiOne {
  border: 1px solid red;
  color: rgb(235, 16, 16);
}
.tishiTwo {
  border: 1px solid red;
  background-color: red;
  color: white;
}
</style>
