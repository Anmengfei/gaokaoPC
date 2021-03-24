<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="table-container">
      <el-row>
        <el-col :span="7">
          <div class="grid-content bg-purple left-table">
            <img src="../../assets/logo66.png" class="zhiyuanpng" />
            <div class="yeardiv">高考年份：2021</div>
            <div class="headImage">
              <div class="avatar">
                <el-avatar
                  icon="el-icon-user-solid"
                  class="head-avatar"
                  size="50"
                ></el-avatar>
              </div>

              <el-button type="danger">危险按钮</el-button>
            </div>
          </div></el-col
        >
        <el-col :span="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple right-table">
            <div style="margin-bottom: 20px">
              <h1>我的志愿表</h1>
            </div>
            <div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="志愿表"> </el-table-column>
                <el-table-column prop="name" label="批次"> </el-table-column>
                <el-table-column prop="address" label="分数"> </el-table-column>
                <el-table-column prop="address" label="选测"> </el-table-column>
                <el-table-column prop="address" label="操作"> </el-table-column>
              </el-table>
            </div>
            <el-button type="danger" class="moniBtn">
              <i class="icon-plus"></i>
              模拟填报</el-button
            >
            <el-pagination
              background
              layout="prev, pager, next"
              :total="100"
              class="pagiantion"
            >
            </el-pagination></div
        ></el-col>
      </el-row>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
export default {
  name: "zhiyuanTable",
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
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
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
}
.table-container {
  width: 1400px;
  margin: 0 auto;
}
.left-table {
  height: 800px;
  position: relative;
}
.right-table {
  height: 800px;
  padding-top: 20px;
}
.el-row {
  margin-bottom: 20px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: pink;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.icon-plus {
}

.moniBtn {
  margin-top: 20px;
  margin-left: 45%;
}
.pagiantion {
  margin-top: 20px;
  margin-left: 30%;
}
.zhiyuanpng {
  width: 100%;
  height: 150px;

  /* top: 0;
  left: 0; */
  opacity: 0.8;
}
.yeardiv {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 125px;
  left: 0;
  /* z-index: 9; */
  /* position: absolute; */
}
.headImage {
  position: relative;
  width: 60px;
  height: 30px;
}
.head-avatar {
  position: absolute;
  top: -20px;
}
.avatar.style {
  height: 70px;
  width: 50px;
  line-height: 50px;
}
</style>
