<template>
  <div class="middle">
    <div class="jumortron">
      <div class="image">123</div>
    </div>
    <div class="page">
      <div class="page-box">
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
            <el-tab-pane label="专业概况" name="first">
              <div>
                <majorInfo></majorInfo>
              </div>
            </el-tab-pane>
            <el-tab-pane label="招生院校" name="second">
              <div>
                <schoolListContent></schoolListContent>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="bottom-page"></div>
    </div>
  </div>
</template>
<script>
import majorInfo from "../zhaoshengyuanxiao/majorInfo";
import schoolListContent from "../zhaoshengyuanxiao/schoolListContent";
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    majorInfo,
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
.meddle {
  position: relative;
}
.jumortron {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-size: 100% 100%;
  background-image: linear-gradient(to right, #00aff0b3, #00aff0);
}
.image {
  height: 100%;
}
.page {
  width: 1800px;
  margin: 0 auto;
  height: 1200px;
  position: relative;
  top: 150px;
  background-color: pink;
  padding-top: 0.5rem;
}
.page-box {
  width: 100%;
}
.introduce {
  width: 100%;
}
.mytab {
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: yellow;
}
.rg-box {
  height: 200px;
  background: #d3dce6;
}
.lf-box {
  width: 200px;
  height: 200px;
  margin-left: 0.5rem;
  background: #e5e9f2;
}
.img-logo {
  width: 200px;
  height: 200px;
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
</style>
