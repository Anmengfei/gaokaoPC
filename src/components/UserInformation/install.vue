<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <h2>修改密码</h2>
        <div class="w">
          <el-row>
            <el-col :span="5"><div class="left-content">原密码:</div></el-col>
            <el-col :span="19">
              <el-row>
                <el-col :span="10"
                  ><div class="right-leftContent">
                    <el-input
                      v-model="originpassword"
                      show-password
                      @blur="originClick()"
                    ></el-input></div
                ></el-col>
                <el-col :span="14"
                  ><div class="right-rightContent">
                    <p class="message" id="message1">请输入6-16位密码</p>
                  </div></el-col
                >
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="w">
          <el-row>
            <el-col :span="5"><div class="left-content">新密码:</div></el-col>
            <el-col :span="19">
              <el-row>
                <el-col :span="10"
                  ><div class="right-leftContent">
                    <el-input
                      v-model="newpassword"
                      show-password
                      @blur="newClick()"
                    ></el-input></div
                ></el-col>
                <el-col :span="14"
                  ><div class="right-rightContent">
                    <p class="message" id="message2">请输入6-16位密码</p>
                  </div></el-col
                >
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="w">
          <el-row>
            <el-col :span="5"><div class="left-content">确认密码:</div></el-col>
            <el-col :span="19">
              <el-row>
                <el-col :span="10"
                  ><div class="right-leftContent">
                    <el-input
                      v-model="secondpassword"
                      show-password
                      @blur="secondClick()"
                    ></el-input></div
                ></el-col>
                <el-col :span="14"
                  ><div class="right-rightContent">
                    <p class="message" id="message3">请输入6-16位密码</p>
                  </div></el-col
                >
              </el-row>
            </el-col>
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
import { setPassWord } from "@/api/index.js";
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
      enter: "",
    };
  },
  mounted() {
    // this.initData();
  },
  methods: {
    // 判断是否是6-16位的字母或数字
    isNum(str) {
      return /^[a-z0-9]{6,16}$/.test(str);
    },
    originClick() {
      console.log("执行了");
      var message1 = document.getElementById("message1");
      if (this.originpassword !== "") {
        checkPassWord({ passWord: this.originpassword }).then((res) => {
          if (res.msg === "密码正确") {
            console.log("1");
            message1.className = "right message";
            message1.innerHTML = "原密码输入正确";
          } else {
            message1.className = "wrong message";
            message1.innerHTML = "原密码输入错误,请重新输入";
          }
        });
      } else {
        message1.className = "message";
        message1.innerHTML = "请输入6-16位密码";
      }
    },
    newClick() {
      var message2 = document.getElementById("message2");
      if (this.newpassword !== "") {
        if (
          this.newpassword.length <= 6 ||
          this.isNum(this.newpassword) == false
        ) {
          console.log("请输入6-16位的数字或密码");
          message2.className = "wrong message";
          message2.innerHTML = "请输入6-16位的数字或密码";
        } else {
          message2.className = "right message";
          message2.innerHTML = "密码输入正确";
          console.log("密码输入正确");
        }
      } else {
        message2.className = "message";
        message2.innerHTML = "请输入6-16位密码";
      }
    },
    secondClick() {
      var message3 = document.getElementById("message3");
      if (this.secondpassword !== "") {
        if (
          this.newpassword.length <= 6 ||
          this.isNum(this.newpassword) == false
        ) {
          console.log("请输入6-16位的数字或密码");
          message3.className = "wrong message";
          message3.innerHTML = "请输入6-16位的数字或密码";
        } else if (this.newpassword !== this.secondpassword) {
          message3.className = "rong message";
          message3.innerHTML = "两次密码输入不一致，请重新输入";
          console.log("两次密码输入不一致，请重新输入");
        } else {
          message3.className = "right message";
          message3.innerHTML = "密码输入正确";
          this.enter = "true";
        }
      } else {
        message3.className = "message";
        message3.innerHTML = "请输入6-16位密码";
      }
    },
    // initData() {
    //   let _this = this;
    //   getPassWord().then(function (response) {
    //     console.log(response.data);
    //   });
    // },
    enterClick() {
      if (this.enter == "true") {
        setPassWord({ passWord: this.secondpassword }).then((res) => {
          console.log(res.data);
          alert("密码设置成功");
        });
      }
    },
  },
};
</script>
<style scoped>
.w {
  height: 70px;
}
.w .el-input {
  width: 96%;
}
.w >>> .el-input__inner {
  height: 0.5rem;
  line-height: 0.5rem;
}
.left-content {
  /* background: #d3dce6; */
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 1.2rem;
}
.right-leftContent {
  /* background: #e5e9f2; */
}
.right-rightContent {
  /* background: #d3dce6; */
  height: 0.5rem;
  line-height: 0.5rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.homeheader {
  margin-bottom: 0.5rem;
}
/* .grid-content {
  min-height: 0.6rem;
  background-color: pink;
} */

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
.message {
  display: inline-block;
  font-size: 12px;
  color: #999;
  background: url("../../assets/mess.png") no-repeat left center;
  padding-left: 25px;
}
.right {
  color: green;
  background-image: url("../../assets/success.png");
  padding-left: 30px;
}
.wrong {
  color: red;
  background-image: url("../../assets/error.png");
  padding-left: 30px;
}
.OKbtn {
  margin-top: 10px;
  padding-left: 25%;
}
</style>
