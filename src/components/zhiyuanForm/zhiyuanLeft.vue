<template>
  <div class="box-left">
    <div class="top-box">
      <img src="../../assets/head.jpg" class="zhiyuanpng" />
      <div class="yeardiv">
        <span>高考年份:</span>
        <span>{{ userInfoList.examYear }}</span>
      </div>
      <div>
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
              <!-- <button @click="AllFollowSchoolClick()">关注院校</button> -->
              <span style="font-size: 15px; color: #333">关注院校<br /></span>
              <span style="font-size: 14px; font-weight: 700; color: #333">{{
                SchoolLength
              }}</span>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="bet-content">
              <!-- <button @click="AllFollowMajorClick()">关注专业</button> -->
              <span style="font-size: 15px; color: #333">关注专业<br /></span>
              <span style="font-size: 14px; font-weight: 700; color: #333">{{
                MajorLength
              }}</span>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="right-content">
              <span style="font-size: 15px; color: #333">成绩<br /></span>
              <span style="font-weight: 700; color: #f56c6c">{{
                userInfoList.score
              }}</span>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="ceDiv"></div>
      <a @click="zhiyuanClick()">我的志愿表</a>
      <a @click="AllFollowSchoolClick()">关注院校</a>
      <a @click="AllFollowMajorClick()">关注专业</a>
      <a @click="installClick()">修改密码</a>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/index.js";
import { getAllFollowMajor } from "@/api/index.js";
import { getAllFollowSchool } from "@/api/index.js";
export default {
  name: "zhiyuanLeft",
  data() {
    return {
      userInfoList: [],
      AllFollowMajorList: [],
      AllFollowSchoolList: [],
      vipbtn: false,
      MajorLength: "",
      SchoolLength: "",
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        if (this.userInfoList.vip == 0) {
          this.vipbtn = false;
        } else {
          this.vipbtn = true;
        }
        let params = {
          phoneNum: parseInt(this.userInfoList.phoneNum),
        };
        getAllFollowMajor(params).then((res) => {
          this.AllFollowMajorList = res.data;
          this.MajorLength = this.AllFollowMajorList.length;
        });
        getAllFollowSchool(params).then((res) => {
          this.AllFollowSchoolList = res.data;
          this.SchoolLength = this.AllFollowSchoolList.length;
        });
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
      // this.$router.push("/install");
      this.$router.push("/updatePassword");
    },
    // orderClick() {
    //   this.$router.push("/order");
    // },
    followClick() {
      this.$router.push("/follow");
    },
    // followClick() {
    //   this.$router.push("/updatePassword");
    // },
    openVIPClick() {
      this.$router.push("/openVIP");
    },
    AllFollowMajorClick() {
      this.$router.push("/AllFollowMajor");
    },
    AllFollowSchoolClick() {
      this.$router.push("/AllFollowSchool");
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
  color: #333;
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
  height: 0.2rem;
  widows: 100%;
  /* background-color: #e5e9f2; */
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
}
.left-content {
  min-height: 0.8rem;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}

.bet-content {
  min-height: 0.8rem;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
}

.right-content {
  min-height: 0.8rem;
  /* background: #e5e9f2; */
  text-align: center;
  line-height: 0.4rem;
  color: #666666;
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
