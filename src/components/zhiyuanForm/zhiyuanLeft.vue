<template>
  <div class="box-left">
    <div class="top-box">
      <img src="../../assets/head.jpg" class="zhiyuanpng" />
      <div class="yeardiv">
        <span>高考年份:</span>
        <span>{{ userInfoList.examYear }}</span>
      </div>
      <div @click="headImgClick()">
        <el-avatar
          icon="el-icon-user-solid"
          class="touxiang"
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eod5XoDYQzN4ib6CTytO2EwibibARW7IhUEo9L5ia5Ud8XRhShw7WWobOgvfTXibW92qNe9aSkpYdE4TqQ/132"
        ></el-avatar>
      </div>

      <el-button
        type="danger"
        class="VIPbtn"
        @click="VIPClick()"
        :disabled="vipbtn"
        >开通VIP</el-button
      >
      <div class="user-count">
        <el-row>
          <el-col :span="8"
            ><div class="left-content">
              <button @click="AllFollowSchoolClick()">关注院校</button>

              <!-- <span>关注院校<br />0</span> -->
              <!-- <div class="alltop-span">关注院校</div>
                  <div class="allbtm-span">0</div> -->
            </div></el-col
          >
          <el-col :span="8"
            ><div class="bet-content">
              <!-- <span>关注专业<br />0</span> -->
              <button @click="AllFollowMajorClick()">关注专业</button>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="right-content">
              <span>成绩<br /></span>
              <span>{{ userInfoList.score }}</span>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="ceDiv"></div>
      <a @click="zhiyuanClick()">我的志愿</a>
      <a @click="orderClick()">关注院校</a>
      <!-- <a @click="followClick()">我的关注</a> -->
      <a @click="AllFollowMajorClick()">关注专业</a>
      <a @click="installClick()">修改密码</a>
      <!-- <a href="#">我的选科</a> -->
      <!-- <div class="ceDiv">测</div>
      <a href="#">我的测评</a>
      <div class="ceDiv">填</div>
      <a href="#">我的志愿表</a> -->
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/index.js";
export default {
  name: "zhiyuanLeft",
  data() {
    return {
      userInfoList: [],
      vipbtn: false,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        // console.log("这是用户信息");
        // console.log(res.data);
        this.userInfoList = res.data;
        if (this.userInfoList.vip == 0) {
          this.vipbtn = false;
        } else {
          this.vipbtn = true;
        }
        // console.log("这是userInfoList用户信息");
        // console.log(this.userInfoList);
      });
    },
    headImgClick() {
      // console.log("headImgClick执行了");
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
    AllFollowMajorClick() {
      this.$router.push("/AllFollowMajor");
    },
    AllFollowSchoolClick() {
      this.$router.push("/order");
    },
  },
};
</script>

<style scoped>
a {
  display: block;
  text-decoration: none;
  height: 0.76rem;
  width: 100%;
  background-color: #fff;
  color: #666666;
  line-height: 0.76rem;
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
  height: 710px;
  margin-bottom: 50px;
  /* background-color: pink; */
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
.left-content button {
  min-height: 0.8rem;
  width: 100%;
  font-size: 22px;
  border: none;
  background-color: #fff;
}
.bet-content {
  min-height: 0.8rem;
  /* background: #d3dce6; */
  border-right: 0.5px solid #99a9bf;
  /* text-align: center; */
  /* line-height: 0.4rem; */
  color: #666666;
}
.bet-content button {
  min-height: 0.8rem;
  width: 100%;
  font-size: 22px;
  border: none;
  background-color: #fff;
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
  background-color: #fff;
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
  top: 1.72rem;
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
</style>
