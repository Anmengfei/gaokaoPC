<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <h2>关注专业</h2>
        <div>
          <el-table
            :data="
              AllFollowMajorList.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )
            "
            style="width: 100%"
          >
            <el-table-column prop="followName" label="专业名称" width="180">
            </el-table-column>
            <el-table-column prop="level" label="学历" width="180">
            </el-table-column>
            <el-table-column prop="category" label="专业工种">
            </el-table-column>
            <el-table-column prop="subject" label="专业类别"> </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination
            :current-page="currentPage"
            :page-size="pagesize"
            :total="AllFollowMajorList.length"
            @current-change="handleCurrentChange"
            background
            layout="total,prev, pager, next"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import VolunteerTable from "@/components/zhiyuanForm/zhiyuanLeft";
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import { getAllFollowMajor } from "@/api/index.js";
export default {
  name: "AllFollowMajor",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      touxiangURL:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eod5XoDYQzN4ib6CTytO2EwibibARW7IhUEo9L5ia5Ud8XRhShw7WWobOgvfTXibW92qNe9aSkpYdE4TqQ/132",
      imageUrl: "",
      input: "",
      AllFollowMajorList: [],
      currentPage: 1,
      pagesize: 5,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAllFollowMajor({ phoneNum: "13465631985" }).then((res) => {
        // console.log(res.data);
        // this.AllFollowMajorList = res.data;
        console.log("这是关注的专业");
        // console.log(this.AllFollowMajorList);
        for (var i = 0; i < res.data.length; i++) {
          this.AllFollowMajorList.push({
            followName: res.data[i].followName,
            level: res.data[i].level,
            category: res.data[i].category,
            subject: res.data[i].subject,
          });
        }
        console.log(this.AllFollowMajorList);
      });
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
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
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
