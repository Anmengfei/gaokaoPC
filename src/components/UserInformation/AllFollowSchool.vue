<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <div class="box-left">
        <div class="top-box">
          <img src="../../assets/head.jpg" class="zhiyuanpng" />
          <div class="yeardiv">高考年份：2021</div>
          <div @click="headImgClick()">
            <el-avatar
              icon="el-icon-user-solid"
              class="touxiang"
              :src="touxiangURL"
            ></el-avatar>
          </div>

          <el-button type="danger" class="VIPbtn" @click="VIPClick()"
            >开通VIP</el-button
          >
          <div class="user-count">
            <el-row>
              <el-col :span="8"
                ><div class="left-content">
                  <span>关注院校<br />0</span>
                  <!-- <div class="alltop-span">关注院校</div>
                  <div class="allbtm-span">0</div> -->
                </div></el-col
              >
              <el-col :span="8"
                ><div class="bet-content">
                  <span>关注专业<br />0</span>
                </div></el-col
              >
              <el-col :span="8"
                ><div class="right-content">
                  <span>成绩<br />600分</span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="ceDiv">个人资料</div>
          <a @click="zhiyuanClick()">我的志愿</a>
          <a @click="orderClick()">我的订单</a>
          <a @click="followClick()">我的关注</a>
          <a @click="openVIPClick()">激活志愿卡</a>
          <!-- <a href="#">我的选科</a> -->
          <a @click="installClick()">修改密码</a>
          <!-- <div class="ceDiv">测</div>
      <a href="#">我的测评</a>
      <div class="ceDiv">填</div>
      <a href="#">我的志愿表</a> -->
        </div>
      </div>
      <div class="box-right">
        <h2>关注院校</h2>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="学校头像" width="180">
              <!-- <a href="">123</a> -->
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
export default {
  name: "AllFollowingSchool",
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      //   isRouterAlive: true, // 控制视图是否显示的变量
      //   input: "",
      touxiangURL:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eod5XoDYQzN4ib6CTytO2EwibibARW7IhUEo9L5ia5Ud8XRhShw7WWobOgvfTXibW92qNe9aSkpYdE4TqQ/132",
      imageUrl: "",
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    headImgClick() {
      console.log("headImgClick执行了");
      this.$router.push("/touxiang");
    },
    VIPClick() {
      this.$router.push("/volunteerVIP");
    },
    zhiyuanClick() {
      this.$router.push("/zhiyuanTable");
    },
    installClick() {
      this.$router.push("/install");
    },
    orderClick() {
      this.$router.push("/order");
    },
    followClick() {
      this.$router.push("/follow");
    },
    openVIPClick() {
      this.$router.push("/openVIP");
    },
  },
};
</script>
<style scoped>
a {
  display: block;
  text-decoration: none;
  height: 0.6rem;
  width: 100%;
  background-color: #fff;
  color: #666666;
  line-height: 0.6rem;
  padding-left: 0.6rem;
  cursor: pointer;
}
a:hover {
  background-color: #e5e9f2;
}
.box-left {
  /* width: 3.5rem; */
  width: 25%;
  /* height: 1000px; */
  /* background-color: aqua; */
  margin-bottom: 50px;
}
.box-right {
  position: absolute;
  width: 75%;
  height: 100%;
  background-color: #fff;
  top: 0rem;
  left: 3.8rem;
}
.top-box {
  position: relative;
}
.ceDiv {
  height: 0.5rem;
  widows: 100%;
  background-color: #e5e9f2;
  line-height: 0.5rem;
  padding-left: 0.3rem;
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
  cursor: pointer;
}
.left-content {
  min-height: 0.8rem;
  /* background: #99a9bf; */
  border-right: 0.5px solid #99a9bf;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.left-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.bet-content {
  min-height: 0.8rem;
  /* background: #d3dce6; */
  border-right: 0.5px solid #99a9bf;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.bet-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.right-content {
  min-height: 0.8rem;
  /* background: #e5e9f2; */
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}
.right-content :hover {
  color: #e5623f;
  cursor: pointer;
}
.user-count {
  margin-top: 0.2rem;
}
.container {
  width: 100%;
  padding: 0;
}
.table-container {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.VIPbtn {
  margin-top: 0.15rem;
  margin-left: 1.35rem;
}

.zhiyuanpng {
  width: 100%;
  height: 200px;
  opacity: 0.8;
}
.yeardiv {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1.71rem;
  left: 0;
  width: 100%;
  padding-left: 1.4rem;
  color: #fff;
}
.zhiyuantable {
  width: 100%;
  padding-left: 0.3rem;
}
.moniBtn {
  margin-top: 0.5rem;
  margin-left: 40%;
}
.el-row {
  margin-bottom: 20px;
}
/deep/.el-input .el-input__inner {
  height: 53px;
}
/deep/ input.el-upload__input {
  display: none;
}
.touxiangload {
  /* background: #d3dce6; */
  height: 190px;
  text-align: center;
  line-height: 190px;
}
.touxiangbox {
  /* position: relative; */
  /* height: 200px; */
  /* background: #e5e9f2; */
}
.touxiangWords {
  position: absolute;
  width: 190px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  bottom: 0rem;
}
.nameload {
  /* background: #d3dce6; */
  text-align: center;
  height: 53px;
  line-height: 53px;
}
.namebox .el-input {
  width: 50%;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
  /* height: 200px; */
}
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  /* border: 1px dashed pink; */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 190px;
  height: 190px;
  line-height: 190px;
  text-align: center;
}
.avatar {
  width: 190px;
  height: 190px;
  display: block;
}
.homeheader {
  margin-bottom: 0.5rem;
}
/* /deep/.shurukuang .el-input {
  border-color: red;
  width: 300px;
} */
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
h2 {
  margin-left: 0.3rem;
  font-size: 24px;
  color: #333;
  font-weight: 500;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 0;
}
.OKbtn {
  margin-top: 30px;
  padding-left: 21%;
}
</style>
