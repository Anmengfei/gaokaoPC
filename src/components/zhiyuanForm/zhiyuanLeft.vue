<template>
  <div class="box-left">
    <div class="top-box">
      <img src="../../assets/head.jpg" class="zhiyuanpng" />
      <div class="yeardiv">高考年份：2021</div>
      <el-avatar icon="el-icon-user-solid" class="touxiang"></el-avatar>
      <el-button type="danger" class="VIPbtn">开通VIP</el-button>
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
      <div class="ceDiv">功能区</div>
      <a @click="zhiyuanClick()">我的志愿</a>
      <a href="#">我的订单</a>
      <a href="#">我的关注</a>
      <a href="#">激活志愿卡</a>
      <!-- <a href="#">我的选科</a> -->
      <a @click="installClick()">设置</a>
      <!-- <div class="ceDiv">测</div>
      <a href="#">我的测评</a>
      <div class="ceDiv">填</div>
      <a href="#">我的志愿表</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "zhiyuanLeft",
  methods: {
    zhiyuanClick() {
      this.$router.push("/zhiyuanTable");
    },
    installClick() {
      this.$router.push("/install");
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
</style>
