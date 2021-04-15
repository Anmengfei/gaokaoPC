<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader class="homeheader"></HomeHeader>
    <div class="table-container">
      <VolunteerTable></VolunteerTable>
      <div class="box-right">
        <div class="app-container">
          <div class="information_one">
            <span class="information_one_span">修改密码</span>
          </div>
          <el-divider></el-divider>
          <div>
            <el-form
              class="form-style-update"
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
            >
              <el-form-item
                label="原始密码："
                prop="oldPassword"
                class="form-item-style"
              >
                <!-- v-model.number指的是只能输入整数 -->
                <el-input
                  v-model="ruleForm.oldPassword"
                  class="input-style"
                  autocomplete="off"
                  type="password"
                  placeholder="请输入原始密码"
                  onkeyup="this.value=this.value.replace(/[\W]/g,'');this.dispatchEvent(new Event('input'))"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="新密码："
                prop="pass"
                class="form-item-style"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  class="input-style"
                  placeholder="请输入新密码"
                  onkeyup="this.value=this.value.replace(/[\W]/g,'');this.dispatchEvent(new Event('input'))"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="确认密码："
                prop="checkPass"
                class="form-item-style"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  class="input-style"
                  placeholder="请再次输入新密码"
                  onkeyup="this.value=this.value.replace(/[\W]/g,'');this.dispatchEvent(new Event('input'))"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
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
  name: "openVIP",
  components: { TopHeader, HomeHeader, Footer, VolunteerTable },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原始密码"));
      } else {
        checkPassWord({ passWord: value }).then((res) => {
          if (res.msg === "密码正确") {
            // console.log("1");
            callback();
          } else {
            callback(new Error("请输入正确的原始密码"));
          }
        });
      }
    };
    return {
      ruleForm: {
        oldPassword: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        oldPassword: [
          {
            validator: validatePass3,
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    // console.log(localStorage.getItem('password'))
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setPassWord({ passWord: this.ruleForm.pass }).then((res) => {
            console.log(res.data);
            alert("密码设置成功");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.homeheader {
  margin-bottom: 0.5rem;
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
.app-container {
  padding: 0.3rem;
}
.information_one .information_one_span {
  padding-left: 0.5rem;
  border-left-style: solid;
  border-left-width: 4px;
  border-left-color: #a0b9ec;
  font-size: 0.25rem;
}
.form-style-update {
  width: 5rem;
  margin: 1rem auto;
}
.form-item-style >>> .el-form-item__label {
  font-size: 0.17rem;
}
.input-style >>> .el-input__inner {
  height: 0.5rem;
  font-size: 0.16rem;
}
</style>
