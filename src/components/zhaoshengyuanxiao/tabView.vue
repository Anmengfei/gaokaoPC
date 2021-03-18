<template>
  <div class="content">
    <div class="header-box">
      <div class="introduce">
        <el-row>
          <el-col :span="4"
            ><div class="lf-box">
              <img src="../../assets/logo.png" class="img-logo" /></div
          ></el-col>
          <el-col :span="20"
            ><div class="rg-box">
              <div class="name">法学</div>
              <div>
                <span class="tag">法学-法学类</span>
                <span class="tag">本科</span>
                <span class="tag">四年制</span>
                <span class="tag">学位法学学士</span>
              </div>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="mytab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="专业概况" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="招生院校" name="second">
            <div>
              <schoolListContent></schoolListContent>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="box-content"></div>
  </div>
</template>
<script>
import schoolListContent from "../zhaoshengyuanxiao/schoolListContent";
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    schoolListContent,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.tab {
  background-color: tomato;
}
.content {
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  background-color: pink;
}
.header-box {
  background-color: yellow;
  border-radius: 20px;
  padding-top: 40px;
  /* padding-left: 30px; */
}
.name {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
}
.tag {
  display: inline-block;
  height: 28px;
  margin-right: 10px;
  padding: 0px 16px;
  font-size: 12px;
  line-height: 28px;
  background: rgb(238, 238, 238);
  border-radius: 14px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.rg-box {
  height: 130px;
  background: #d3dce6;
}
.lf-box {
  width: 130px;
  height: 130px;
  background: #e5e9f2;
}
.img-logo {
  width: 130px;
  height: 130px;
}
.mytab >>> .el-tabs__item {
  padding: 0 0.2rem;
  height: 0.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 0.4rem;
  display: inline-block;
  list-style: none;
  font-size: 0.64rem;
  font-weight: 500;
  color: #303133;
  position: relative;
}
</style>
