<template>
  <div class="container">
    <div class="header1">
      <div class="uzy-nav">
        <ul>
          <li @click="gotoAPPpage"><a>APP简介</a></li>
          <li @click="gotoHomepage"><a>首页</a></li>
          <li @click="gotoAllclasses"><a>院校优先</a></li>
          <li @click="gotoWork"><a>专业优先</a></li>
          <li @click="gotovoluntary"><a>志愿表</a></li>
          <li @click="gotoVIP"><a>志愿VIP</a></li>
<!--          <li @click="gotoOneToOne"><a>1V1专家</a></li>-->
        </ul>
      </div>
      <div class="user-info">
        <div class="user-login" v-if="!loginflag">
          <a title="登录考哪儿" @click="noLogin">登录</a>
        </div>
        <div class="logout" v-else>
          <el-dropdown @command="logout">
            <div class="user-head-img">
              <div class="user-head-img-wra">
                <img
                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eod5XoDYQzN4ib6CTytO2EwibibARW7IhUEo9L5ia5Ud8XRhShw7WWobOgvfTXibW92qNe9aSkpYdE4TqQ/132"
                  width="50"
                  height="50"
                />
              </div>
              <a
                href="/accounts/personInfo/modifyInfo"
                title="个人资料"
                id="username"
                >孙同学</a
              >
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info"
                ><i class="iconfont icon-gerenziliao" style="color: #e5623f"></i
                >个人资料</el-dropdown-item
              >
              <el-dropdown-item command="logout"
                ><i class="iconfont icon-icon-tuichu" style="color: #e5623f"></i
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div>
      <!--      <div class="login-style">-->
      <el-dialog :visible.sync="showlogin"  @close="closeDialog" width="30%">
        <div class="login-form-content">
          <div class="content-tags">
            <ul>
              <li>
                <div class="tagstext">登录</div>
                <div class="borderLine2"></div>
              </li>
            </ul>
          </div>
          <div class="register-forms" v-show="tagsShow === '登录'">
            <div v-if="tagsShow2 === '1'">
              <el-input
                placeholder="请输入登录手机号"
                class="forminput2"
                v-model="phoneNum"
                clearable
              >
                <template slot="prepend">+86</template>
              </el-input>
              <div class="input-course-text" v-show="showNum">
                <span>请填写手机号</span>
              </div>
              <el-input
                placeholder="请输入短信验证码"
                class="forminput3"
                v-model="duanxinNum"
                clearable
              >
                <template slot="append">
                  <div class="yanzheng-button">
                    <el-button type="text" @click="getCodes" v-if="showCountNum"
                      >获取验证码</el-button
                    >
                    <span v-else class="yanzheng-text">{{
                      "重新发送" + countNum + "s"
                    }}</span>
                  </div>
                </template>
              </el-input>
              <div class="login-button-style" @click="nextButton">立即登录</div>
            </div>
            <div v-if="tagsShow2 === '2'">
              <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules"
                ref="ruleForm2"
              >
                <div class="loginform2">
                  <el-form-item prop="username">
                    <el-row>
                      <el-col :span="4">
                        <i class="iconfont ymq-iconuser formicon"></i>
                      </el-col>
                      <el-col :span="20">
                        <el-input
                          placeholder="用户名"
                          class="forminput4"
                          v-model="ruleForm2.username"
                          clearable
                        ></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="password1" class="form-items">
                    <el-row>
                      <el-col :span="4">
                        <i class="iconfont ymq-iconlock formicon"></i>
                      </el-col>
                      <el-col :span="20">
                        <el-input
                          placeholder="请输入密码"
                          class="forminput4"
                          v-model="ruleForm2.password1"
                          type="password"
                          :show-password="showpassword"
                          autocomplete="off"
                          clearable
                        ></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="password2" class="form-items">
                    <el-row>
                      <el-col :span="4">
                        <i class="iconfont ymq-iconlock formicon"></i>
                      </el-col>
                      <el-col :span="20">
                        <el-input
                          placeholder="确认密码"
                          class="forminput4"
                          v-model="ruleForm2.password2"
                          type="password"
                          :show-password="showpassword"
                          autocomplete="off"
                          clearable
                        ></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="class_name" class="form-items">
                    <el-row>
                      <el-col :span="4">
                        <i class="iconfont ymq-iconchengshi formicon"></i>
                      </el-col>
                      <el-col :span="20">
                        <el-input
                          placeholder="学校"
                          class="forminput4"
                          v-model="ruleForm2.class_name"
                          clearable
                        ></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="class_name" class="form-items">
                    <el-row>
                      <el-col :span="4">
                        <i class="iconfont ymq-iconchengshi formicon"></i>
                      </el-col>
                      <el-col :span="20">
                        <el-input
                          placeholder="邮箱"
                          class="forminput4"
                          v-model="ruleForm2.email"
                          clearable
                        ></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <div
                    class="login-button-style"
                    @click="userregister('ruleForm2')"
                  >
                    完成
                  </div>
                  <!--<el-button type="primary" class="login-button" size="large" @click="userregister('ruleForm2')">注册</el-button>-->
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import userSettingPopover from '@/components/userSetting/userSettingPopover'
// import Logout from '@/components/userSetting/logout'
import md5 from 'js-md5'
import { withVerifyCodelogin, userLogout } from '@/api/login'
export default {
  name: 'header1',
  // components: { userSettingPopover, Logout },
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var checkClass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写学校名称'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写邮箱地址'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.password2 !== '') {
          this.$refs.ruleForm2.validateField('password2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.password1) {
        callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm1: {
        username: '',
        password: ''
      },
      tagsShow2: '1',
      phoneNum: '',
      timeCode: '',
      strCode: '',
      duanxinNum: '',
      tagsShow: '登录',
      // loginflag: false,
      loginflag11: false,
      radio: '2',
      showpassword: true,
      showCountNum: true,
      countNum: 60,
      ruleForm2: {
        username: '',
        password1: '',
        password2: '',
        class_name: '',
        email: ''
      },
      show1: true,
      rules: {
        password1: [{ validator: validatePass, trigger: 'blur' }],
        password2: [{ validator: validatePass2, trigger: 'blur' }],
        username: [{ validator: checkName, trigger: 'blur' }],
        class_name: [
          {
            validator: checkClass,
            trigger: 'blur'
          }
        ],
        email: [
          {
            validator: checkEmail,
            trigger: 'blur'
          }
        ]
      },
      flag_login: '未登录',
      flag_state: true
      // showlogin: false,
      // showlogin: true
    }
  },
  props: {
    flags: String,
    flagInfo: Boolean
  },
  created () {
    // this.flag_login = localStorage.getItem("flag_class");
    if (localStorage.getItem('token') != null) {
      // this.loginflag = true;
      this.$store.dispatch('getloginstate', true)
    } else {
      // this.loginflag = false;
      this.$store.dispatch('getloginstate', false)
    }
  },
  computed: {
    showlogin () {
      return this.$store.state.showlogin
    },
    loginflag () {
      return this.$store.state.loginflag
    },

    showNum () {
      if (this.phoneNum === '') {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {},
  methods: {
    closeDialog () {
      this.$store.dispatch('getShowLogin', false)
    },
    logout (command) {
      if (command == 'logout') {
        userLogout().then((res) => {
          if (res.code == 0) {
            this.msgSuccess('退出登录')
            console.log('退出登录成功')
            localStorage.clear()
            this.$router.push('/')
            this.loginflag = false
          } else {
            this.msgError('操作失败')
          }
        })
      }
    },
    noLogin () {
      // this.showlogin = true;
      this.$store.dispatch('getShowLogin', true)
    },
    getCodes () {
      if (this.phoneNum !== '') {
        var url =
          'https://www.zytb.top/NEMT/gk/userApp/getPhoneCode?phoneNum=' +
          this.phoneNum
        this.$axios.get(url).then((res) => {
          console.log('return', res.data)
          if (res.data.code == 0) {
            // this.timeCode = res.data.data.time
            // this.strCode = res.data.data.str
            this.$message.success('验证码发送成功！')
          } else {
            this.$message.success('验证码发送失败，一分钟后重试！')
          }
        })
        this.countNum = 60
        this.showCountNum = false
        setInterval(() => {
          this.countNum = this.countNum - 1
          if (this.countNum === -1) {
            // this.countNum = 0
            clearInterval()
            this.showCountNum = true
          }
        }, 1000)
      }
    },
    switchLogin () {
      this.tagsShow = '登录'
    },
    // switchRegister () {
    //   this.tagsShow = '注册'
    //   this.tagsShow2 = '1'
    // },
    returnlogin () {
      this.show1 = true
    },
    userregister (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.radio === '') {
            this.$message.warning('请选择需要注册的角色')
          } else {
            // var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/register?username=' + this.ruleForm2.username + '&password=' + this.ruleForm2.password1 + '&schoolname=' + this.ruleForm2.class_name + '&role=' + this.radio+ '&phone=' + this.phoneNum
            var url = `http://58.119.112.14:11020/cms/register?username=${this.ruleForm2.username}&password=${this.ruleForm2.password1}&schoolname=${this.ruleForm2.class_name}&phone=${this.phoneNum}&email=${this.ruleForm2.email}`
            this.$axios.post(url).then((res) => {
              if (res.data.code === 200) {
                this.$message.success('注册成功！请进行登录')
                this.tagsShow = '登录'
                this.tagsShow2 = '1'
              } else {
                this.$message.error(res.data.message)
              }
            })
          }
        }
      })
    },
    login () {
      console.log('token是', localStorage.getItem('token'))
      if (this.ruleForm1.username === '' || this.ruleForm1.password === '') {
        this.$message.warning('请输入用户名或密码！')
      } else {
        // var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/login?username=' + this.ruleForm1.username + '&password=' + this.ruleForm1.password
        var url = `http://58.119.112.14:11020/cms/login?username=${this.ruleForm1.username}&password=${this.ruleForm1.password}`
        this.$axios.post(url).then((res) => {
          if (res.data.code === 200) {
            this.$message.success('登录成功！')
            localStorage.setItem('flag_class', '已登录')
            localStorage.setItem('userId', res.data.userid)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('name', res.data.username)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('schoolname', this.ruleForm2.class_name)
            localStorage.setItem('password', this.ruleForm1.password)
            console.log('登录后的token是', localStorage.getItem('token'))
            this.$router.push('/')
            // this.$router.push({
            //   path: '/',
            //   query: {
            //     flag_class: 'yidenglu'
            //   }
            // })
          } else {
            this.$message.error(res.data.message)
          }
        })
      }
    },
    nextButton () {
      withVerifyCodelogin({
        phoneNum: this.phoneNum,
        verifyCode: this.duanxinNum
      }).then((res) => {
        if (res.code == 0) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          console.log('登录测试', res)
          localStorage.setItem('token', res.data.token)
          this.$store.dispatch('getShowLogin', false)
          this.$router.push({
            name: 'SchoolRecommand',
            params: { tab: 'favoriteSchool' }
          })
        } else if (res.code == 1) {
          // this.$notify.error({
          //   title: '验证码输入错误或已失效',
          //   message: '请重新获取验证码'
          // });
          this.$message.error('验证码输入错误或已失效，请重新获取')
        }
      })

      // var num = this.duanxinNum.toString() + this.timeCode.toString()
      // // console.log(num)
      // var str = md5(num)
      // // console.log(str)
      // // console.log(this.strCode)
      // if (this.strCode === str) {
      //   this.tagsShow2 = '2'
      // } else {
      //   alert('验证码输入错误！')
      // }
    },
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoAllclasses: function () {
      if (!this.loginflag) {
        this.$message({
          message: '登陆后，即可查看',
          type: 'warning',
          duration: 600,
          onClose: () => {
            this.$store.dispatch('getShowLogin', true)
          }
        })
      } else {
        this.$router.push({
          name: 'SchoolRecommand',
          params: { tab: 'favoriteSchool' }
        })
      }
    },
    openInfo () {
      this.$confirm('请尽快完善个人资料,完善个人资料后开放此模块', '提示信息', {
        confirmButtonText: '立即前往',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$router.push('/userSetting/personalInformation')
        })
        .catch(() => {})
    },
    gotoWork () {
      if (!this.loginflag) {
        this.$message({
          message: '登陆后，即可查看',
          type: 'warning',
          duration: 600,
          onClose: () => {
            this.$store.dispatch('getShowLogin', true)
          }
        })
      } else {
        this.$router.push({
          name: 'WorkIndex',
          params: { tab: 'favoriteMajor' }
        })
      }
      // this.$router.push({
      //   name: "WorkIndex",
      //   params: { tab: "favoriteMajor" },
      // });
      // }
    },
    gotoWorkUpdate () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        if (this.flagInfo === false) {
          this.openInfo()
        } else {
          this.$router.push('/WorkUpdate')
        }
      }
    },
    gotoHomepage () {
      // this.$router.push("/");
      this.$router.push('/homepage')
    },
    gotoAPPpage () {
      // this.$router.push("/appCon");
      this.$router.push('/')
    },
    gotovoluntary () {
      if (!this.loginflag) {
        this.$message({
          message: '登陆后，即可查看',
          type: 'warning',
          duration: 600,
          onClose: () => {
            this.$store.dispatch('getShowLogin', true)
          }
        })
      } else {
        this.$router.push('/zhiyuanTable')
      }
    },
    gotoVIP () {
      // if (!this.loginflag) {
      //   this.$message({
      //     message: "登陆后，即可查看",
      //     type: "warning",
      //     duration: 600,
      //     onClose: () => {
      //       this.showlogin = true;
      //     },
      //   });
      // } else {
      this.$router.push('/volunteerVIP')
      // }
    },
    gotoOnline () {
      // if (this.flag_state === true) {
      //   alert("请先登录！");
      //   this.$router.push("/login");
      // } else {
      //   this.$router.push("/OnlineTeach");
      // }
      // this.$router.push("/grade");
      // this.$router.push("/Recruit");
      // this.$router.push("/guanzhu");
      // this.$router.push("/article");
      this.$router.push('/zhiyuanTable')
    },
    gotoOneToOne () {
      if (!this.loginflag) {
        this.$message({
          message: '登陆后，即可查看',
          type: 'warning',
          duration: 600,
          onClose: () => {
            this.showlogin = true
          }
        })
      } else {
        this.$router.push('/onetoone')
      }
    },
    gotoStudy () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // this.$router.push("/StudyProject");
        this.$router.push('/zhiyuanVIP')
      }
    },
    gotoTeacher () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/ClassShowTen')
      }
    },
    gotoCompetition: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/competition')
      }
      // console.log('我要跳转界面了')
      // this.$router.push('/competition')
    },
    gotoAboutUs () {
      this.$router.push('/AboutUs')
    },
    gotocooperation () {
      this.$router.push('/cooperation')
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #e5623f;
  margin-top: 15px;
  width: 100%;
  height: 60px;
  font-size: 18px;
}
.container .header1 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  /*margin: 0 auto;*/
  list-style-type: none;
  position: relative;
}
.container .header1 .uzy-nav {
  width: 1200px;
  left: 20%;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  font-size: 18px;
  position: absolute;
}
.container .header1 .user-info {
  width: 200px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  right: 5%;
  position: absolute;
}
.container .header1 .user-info a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
.container .header1 .user-info a:hover {
  color: #4b4b4b;
  background-color: transparent;
}
.container .header1 .uzy-nav ul {
  display: block;
  list-style-type: none;
}
.container .header1 .uzy-nav ul li {
  list-style-type: none;
  float: left;
  margin-right: 0.8rem;
  line-height: 60px;
  height: 60px;
}
.container .header1 .uzy-nav ul li a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
.container .header1 .uzy-nav ul li a:hover {
  /*color: #16bcb4;*/
  color: #4b4b4b;
  /* font-weight: bolder; */
  background-color: transparent;
}
.nav li {
  margin-right: 1rem;
  /*text-align: center;*/
}
.nav li a {
  color: white;
  cursor: pointer;
}
.nav_moreList li a:hover {
  color: #16bcb4;
  /* font-weight: bolder; */
  background-color: transparent;
}
/*.nav_ul {*/
/*  !*margin-left: 10%;*!*/
/*  !*margin-left: 3rem;*!*/
/*}*/
.ul2_nav {
  margin-right: 0.5rem;
  float: right;
}
.ul2_nav li a:hover {
  background-color: transparent;
}

.nav_a {
  padding: 0;
  margin-top: 0.1rem;
}

.img-logo {
  height: 60%;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.navbar-brand {
  padding-left: 1.5rem;
}
.login-bg img {
  width: 100%;
  height: 100%;
}
.header-title {
  font-size: 50px;
  text-align: center;
  color: #16bcb4;
  letter-spacing: 3px;
  font-family: "STKaiti";
}
.header-title-mini {
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  font-family: "STKaiti";
  margin-top: 10px;
  color: black;
}
.login-content {
  width: 1100px;
  height: 600px;
  background-color: white;
  /*border-radius: 20px;*/
  box-shadow: -10px 10px 12px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.col-left {
  height: 600px;
  overflow: hidden;
  position: relative;
}
.left-icon {
  position: absolute;
  top: 90%;
  left: 5%;
}
.col-left:hover img {
  transform: scale(1.2);
}
.left-icon i {
  color: white;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.left-icon i:hover {
  color: #16bcb4;
}
.col-left img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.6s;
}
.login-form {
  padding: 20px;
}
.login-img {
  height: 95px;
  margin-top: 30px;
}
.login-img img {
  width: 100%;
  height: 100%;
}
.head_title {
  text-align: center;
  font-size: 40px;
  color: #3a8ee6;
  font-weight: bolder;
}
.login {
  width: 380px;
  background-color: white;
  height: 500px;
  /*margin: 0 auto;*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: all 0.5s;
}
.wordlogin {
  margin-top: 80px;
  font-size: 30px;
  font-weight: bold;
  /*color: black;*/
}
.forminput4 >>> .el-input__inner {
  border: 0;
  border-bottom: 1px solid #dcdfe6;
  /*border-radius: 10px;*/
  /*background-color: rgba(28,31,33,.06);*/
  /*height: 60px;*/
  /*line-height: 60px;*/
}
.forminput >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-radius: 10px;
  background-color: rgba(28, 31, 33, 0.06);
  height: 60px;
  line-height: 60px;
}
.forminput2 >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(28, 31, 33, 0.06);
  height: 60px;
  line-height: 60px;
}
.forminput2 >>> .el-input-group__prepend {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(28, 31, 33, 0.06);
  height: 60px;
  line-height: 60px;
}
.forminput3 >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(28, 31, 33, 0.06);
  height: 60px;
  line-height: 60px;
}
.forminput3 >>> .el-input-group__append {
  border: 0;
  /*border: 1px solid #DCDFE6;*/

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(28, 31, 33, 0.06);
  height: 60px;
  line-height: 60px;
}
.forminput >>> .el-input__clear {
  font-size: 20px;
}
.forminput2 >>> .el-input__clear {
  font-size: 20px;
}
.forminput3 >>> .el-input__clear {
  font-size: 20px;
}
.loginform {
  width: 250px;
  margin: 40px auto;
  line-height: 70px;
}
.loginform2 {
  width: 300px;
  margin: 40px auto;
  line-height: 40px;
}
.formicon {
  /*float: left;*/
  font-size: 28px;
  margin-right: 20px;
}
.forminput {
  /*float: left;*/
  width: 100%;
  font-size: 20px;
  line-height: 40px;
  margin-top: 40px;
}
.forminput4 {
  /*float: left;*/
  width: 100%;
  font-size: 20px;
  line-height: 40px;
}
.forminput2 {
  /*float: left;*/
  width: 100%;
  font-size: 20px;
  line-height: 40px;
  margin-top: 40px;
}
.forminput3 {
  width: 100%;
  font-size: 20px;
  line-height: 40px;
  margin-top: 40px;
}
.form-items {
  margin-top: 40px;
}
/*.spans2 {*/
/*margin-right: 20px*/
/*}*/
.spans {
  text-align: center;
}
.spans1 {
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
  color: black;
}
.spans1:hover {
  color: red;
}
.spans2 {
  font-size: 18px;
  cursor: pointer;
  color: black;
}
.spans2:hover {
  color: red;
}
.formlogins-enter-active,
.formlogins-leave-active {
  transition: all 1.5s;
}
.formlogins-enter,
.formlogins-leave-to {
  /*transform: translateX(-10px) translateY(-10px);*/
  opacity: 0;
}
.iconreturn {
  line-height: 0;
  float: left;
  transition: all 0.6s;
}
.iconreturn i {
  font-size: 32px;
}
.iconreturn:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
.hover_a:hover {
  cursor: pointer;
}
.login-button {
  width: 100%;
}
.login-style {
  width: 5rem;
}
.login-form-content {
  width: 5rem;
  margin: 0 auto;
  /*height: 600px;*/
  /*background-color: #00000;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%, -50%);*/
  border-radius: 10px;
  padding: 0px 20px 16px 20px;
}
.content-tags {
  /*text-align: center;*/
}
.content-tags li {
  display: inline-block;
  list-style: none;
  margin-right: 50px;
  font-size: 22px;
  color: #545c63;
  font-weight: 700;
}
.content-tags li:hover div {
  cursor: pointer;
  color: #f20d0d;
}
.content-tags li:hover .borderLine {
  display: block;
}
.tagstext {
  color: #f20d0d;
}
.borderLine {
  display: none;
  /*position: absolute;*/
  width: 20px;
  height: 3px;
  /*top: 40px;*/
  /*left: 50px;*/
  /*margin-left: -8px;*/
  background: #f20d0d;
  margin: 0 auto;
  margin-top: 12px;
}
.borderLine2 {
  display: block;
}
.login-forms {
  margin-top: 40px;
}
.login-button-style {
  height: 60px;
  width: 100%;
  color: #fff;
  background-color: #e5623f;
  border-radius: 40px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  margin-top: 40px;
  cursor: pointer;
}
.login-button-style:hover {
  border: #c20a0a;
  background-color: #c20a0a;
}
.yanzheng-button {
  padding-right: 10px;
  color: #1481b8;
}
.yanzheng-button:hover {
  color: #19a1e6;
}
.input-course-text {
  color: red;
  font-size: 14px;
}
.yanzheng-text {
  color: #9199a1;
  font-size: 18px;
}
/deep/ .el-dialog__body {
  /*background: transparent !important;*/
  background-color: transparent;
}
.logout {
  cursor: pointer;
  float: left;
  position: relative;
}
.logout .user-head-img .user-head-img-wra {
  /*border: 3px solid #de432b;*/
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  float: left;
  margin-right: 10px;
  margin-top: 5px;
}
.logout .user-head-img .user-head-img-wra img {
  display: inline-block;
  margin-top: -14px;
  border: 0;
  vertical-align: middle;
}
</style>
