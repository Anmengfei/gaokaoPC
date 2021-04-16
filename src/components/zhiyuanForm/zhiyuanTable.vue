<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <h2>我的志愿表</h2>
        <div class="zhiyuantable11">
          <el-table
            :data="willTable"
            border
            style="width: 97%"
            :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
          >
            <el-table-column label="志愿表" align="center">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column
              prop="userInformation[2]"
              label="分数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="userInformation[1]"
              label="选科"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="userInformation[3]"
              label="排名"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="quantity"
              label="意向志愿数目"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="address" label="操作" align="center">
              <template slot-scope="scope">
                <!-- <span id="chakan" @click="gotoZhiyuanbiao(scope.row.id)">查看</span> -->
                <span id="chakan" @click="gotoZhiyuanbiao()">查看</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="moniBtn">
          <el-button type="danger" @click="gotoSchoolRecommand"
            >模拟填报</el-button>
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
import { getWishListByphoneNum } from "@/api/WishList";
import { getAllHandleWishId } from "@/api/index";
// import { getWishListById } from "@/api/WishList";
export default {
  name: "zhiyuanTable",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      willTable: [], // 志愿表数据
      phoneNum: "",
      volform: [], // 查看按钮取得的数据
      listId:0
    };
  },
  mounted() {
    this.phoneNum = localStorage.getItem("phone");
    this.getWishTable(this.phoneNum);
  },
  methods: {
    initData(){
        let params={
        phoneNum:localStorage.getItem("phone")
      }
        getAllHandleWishId(params).then((res) => {
        this.listId=res.data;
        })
    },
    getWishTable(phoneNum) {
      getWishListByphoneNum(phoneNum).then((res) => {
        if (res.data.msg === "成功") {
          for (let i = 0; i < res.data.data.length; ++i) {
            res.data.data[i].userInformation = res.data.data[i].userInformation.split(
              "|"
            );
          }
          this.willTable = res.data.data;
        }
      });
    },
    gotoSchoolRecommand() {
      // 模拟填报按钮跳转至院校优先
      this.$router.push({
        name: "SchoolRecommand",
        params: { tab: "favoriteSchool" },
      });
    },
    gotoZhiyuanbiao(){
      this.$router.push('/zhiyuanBiao')
    }
    // gotoZhiyuanbiao(id) {
      // 查看志愿表
      // console.log("iddddddddddddddddddddddddddddddd值", id);
      // let params={
      //     listId:id,
      //   }
      // getAllWishByListId2(params).then((res) => {
      //   console.log("数据来了", res);
      //   if (res.msg === "成功") {
      //     // wish存放的就是表单数据
      //     this.volform = res.data.wishes;
      //     console.log(this.volform);
      //     for (let i = 0; i < this.volform.length; ++i) {
      //       this.volform[i].risk = this.volform[i].chances;
      //       this.volform[i].selectionRequirement = this.volform[
      //         i
      //       ].selectSubject;
      //     }
      //     this.$router.push({
      //       name: "zhiyuanBiao",
      //       params: {
      //         zhiyuanTable: this.volform,
      //       },
      //     });
      //   }
      // });
      // this.$router.push('/zhiyuanBiao')
    // },
  },
};
</script>

<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
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
/deep/ .el-table-column thead.is-group th {
  background: blue;
}
a {
  display: block;
  text-decoration: none;
  height: 0.6rem;
  width: 100%;
  background-color: #fff;
  color: #666666;
  line-height: 0.6rem;
  padding-left: 0.6rem;
}
a:hover {
  background-color: #e5e9f2;
}
.box-left {
  /* width: 3.5rem; */
  width: 25%;
  /* height: 1000px; */
  /* background-color: aqua; */
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
  width: 100%;
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

.zhiyuanpng {
  width: 100%;
  height: 200px;
  opacity: 0.8;
}
.yeardiv {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1.7rem;
  left: 0;
  width: 100%;
  padding-left: 1.4rem;
  color: #fff;
}
.zhiyuantable11 {
  width: 100%;
  padding-left: 0.3rem;
}
.moniBtn {
  margin-top: 0.5rem;
  margin-left: 40%;
}
#chakan {
  display: inline-block;
  cursor: pointer;
}

#chakan:hover {
  display: inline-block;
  cursor: pointer;
  color: red;
}
</style>
