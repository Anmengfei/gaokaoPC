<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <h2>修改密码</h2>
        <div>
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="11"
              ><div>
                <el-row>
                  <el-col :span="5"
                    ><div class="grid-content">原密码:</div></el-col
                  >
                  <el-col :span="19"
                    ><div class="grid-content shurukuang">
                      <el-input
                        placeholder="请输入密码"
                        v-model="originpassword"
                        show-password
                        @blur="originClick()"
                      ></el-input></div
                  ></el-col>
                </el-row></div
            ></el-col>
            <el-col :span="10"><div class="grid-content"></div></el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="11"
              ><div>
                <el-row>
                  <el-col :span="5"
                    ><div class="grid-content">新密码:</div></el-col
                  >
                  <el-col :span="19"
                    ><div class="grid-content shurukuang">
                      <el-input
                        placeholder="请输入密码"
                        v-model="newpassword"
                        show-password
                      ></el-input></div
                  ></el-col>
                </el-row></div
            ></el-col>
            <el-col :span="10"><div class="grid-content"></div></el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="11"
              ><div>
                <el-row>
                  <el-col :span="5"
                    ><div class="grid-content">确认密码:</div></el-col
                  >
                  <el-col :span="19"
                    ><div class="grid-content shurukuang">
                      <el-input
                        placeholder="请输入密码"
                        v-model="secondpassword"
                        show-password
                      ></el-input></div
                  ></el-col>
                </el-row></div
            ></el-col>
            <el-col :span="10"><div class="grid-content"></div></el-col>
          </el-row>
        </div>
        <div class="OKbtn">
          <el-button type="danger" @click="enterClick()">确认修改</el-button>
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
import { getPassWord } from "@/api/index.js";
import { checkPassWord } from "@/api/index.js";
export default {
  name: "install",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    return {
      isRouterAlive: true, // 控制视图是否显示的变量
      originpassword: "",
      newpassword: "",
      secondpassword: "",
    };
  },
  mounted() {
    // this.initData();
  },
  methods: {
    originClick() {
      console.log("执行了");
      // let _this = this;
      checkPassWord({ passWord: this.originpassword }).then((res) => {
        console.log("kkk");
      });
    },
    // initData() {
    //   let _this = this;
    //   getPassWord().then(function (response) {
    //     console.log(response.data);
    //   });
    // },
    enterClick() {
      if (this.newpassword === this.secondpassword) {
        console.log("两次密码完全一致");
      } else {
        console.log("两次密码输入不一致，请重新输入");
      }
    },
  },
};
</script>
<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
}
/deep/.shurukuang .el-input {
  border-color: red;
  width: 300px;
}
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
  margin-top: 10px;
  padding-left: 25%;
}
</style>
