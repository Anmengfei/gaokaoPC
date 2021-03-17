<template>
  <div class="container">
    <nav>
        <div class="navbar-header">
          <a class="navbar-brand" href="#" @click="gotoHomepage">
<!--            <img src="../../assets/logo.png" class="img-logo" />-->
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse nav_ul">
          <ul class="nav navbar-nav nav_moreList">
            <li @click="gotoHomepage"><a>首页</a></li>
            <li @click="gotoAllclasses"><a>院校优先</a></li>
            <li @click="gotoWork"><a>专业优先</a></li>
            <li @click="gotoOnline"><a>志愿表</a></li>
            <li @click="gotoStudy"><a>志愿VIP</a></li>
            <li @click="gotoPlat"><a>1V1专家</a></li>
          </ul>
          <ul class="nav navbar-nav ul2_nav">
            <li>
              <a v-if="flag_state === true" class="nav_a">
                <user-setting-popover></user-setting-popover>
              </a>
              <a v-else class="nav_logout">
                <Logout></Logout>
              </a>
            </li>
          </ul>
        </div>
    </nav>
<div>
  <el-dialog  :visible.sync="showlogin" width="550px">
    <div class="login-form-content">
      <div class="content-tags">
        <ul>
<!--          <li>-->
<!--            <div :class="{tagstext : tagsShow === '登录'}" @click="switchLogin">登录</div>-->
<!--            <div class="borderLine" :class="{borderLine2: tagsShow === '登录'}"></div>-->
<!--          </li>-->
          <li>
            <div class="tagstext" >登录</div>
            <div class="borderLine2"></div>
          </li>
        </ul>
      </div>
<!--      <div class="login-forms" v-show="tagsShow === '注册'">-->
<!--        <el-input  placeholder="请输入登录手机号" class="forminput" v-model="ruleForm1.username" clearable></el-input>-->
<!--        <el-input  placeholder="密码" class="forminput" v-model="ruleForm1.password" type="password" :show-password="showpassword" @keyup.enter.native="login" clearable></el-input>-->
<!--        <div class="login-button-style" @click="login">-->
<!--          登录-->
<!--        </div>-->
<!--      </div>-->
      <div class="register-forms" v-show="tagsShow==='登录'">
        <div v-if="tagsShow2 === '1'">
          <el-input  placeholder="请输入登录手机号" class="forminput2" v-model="phoneNum" clearable>
            <template slot="prepend">+86</template>
          </el-input>
          <div class="input-course-text" v-show="showNum">
            <span>请填写手机号</span>
          </div>
          <el-input placeholder="请输入短信验证码" class="forminput3" v-model="duanxinNum" clearable>
            <template slot="append">
              <div class="yanzheng-button">
                <el-button type="text" @click="getCodes" v-if="showCountNum">获取验证码</el-button>
                <span v-else class="yanzheng-text">{{'重新发送'+countNum+ 's'}}</span>
              </div>
            </template>
          </el-input>
          <div class="login-button-style" @click="nextButton">
            立即登录
          </div>
        </div>
        <div v-if="tagsShow2 === '2'">
          <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2">
            <div class="loginform2">
              <el-form-item prop="username">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconuser formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="用户名" class="forminput4" v-model="ruleForm2.username" clearable></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item prop="password1" class="form-items">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconlock formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="请输入密码" class="forminput4" v-model="ruleForm2.password1" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item prop="password2" class="form-items">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconlock formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="确认密码" class="forminput4" v-model="ruleForm2.password2" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item prop="class_name" class="form-items">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconchengshi formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="学校" class="forminput4" v-model="ruleForm2.class_name" clearable></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item prop="class_name" class="form-items">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconchengshi formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="邮箱" class="forminput4" v-model="ruleForm2.email" clearable></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <div class="login-button-style" @click="userregister('ruleForm2')">
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
import userSettingPopover from '@/components/userSetting/userSettingPopover'
import Logout from '@/components/userSetting/logout'
import md5 from "js-md5";
import {withVerifyCodelogin} from "@/api/login"
export default {
  name: 'header1',
  components: { userSettingPopover, Logout },
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
      loginflag: false,
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
        password1: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkName, trigger: 'blur' }
        ],
        class_name: [
          {
            validator: checkClass, trigger: 'blur'
          }
        ],
        email: [
          {
            validator: checkEmail, trigger: 'blur'
          }
        ]
      },
      flag_login: '未登录',
      flag_state: true,
      showlogin:false
    }
  },
  props: {
    flags: String,
    flagInfo: Boolean
  },
  created () {
    this.flag_login = localStorage.getItem('flag_class')
    if (localStorage.getItem('flag_class') === null) {
      this.loginflag = false
    } else {
      this.loginflag = true

    }
    this.flag_state = false
  },
  computed: {
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
    getCodes () {
      if (this.phoneNum !== '') {
        var url = 'https://www.zytb.top/NEMT/gk/userApp/getPhoneCode?phoneNum=' + this.phoneNum
        this.$axios.get(url).then((res) => {
          console.log('return',res.data)
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
        phoneNum:this.phoneNum,
        verifyCode: this.duanxinNum
      }).then( res => {
        if(res.code == 0){
          this.$message({
            message: '登录成功',
            type: 'success',

          });
          localStorage.setItem('flag_class', '已登录')
          this.showlogin =false
          this.loginflag =true
          this.$router.push({ name: 'SchoolRecommand', params: { tab: 'favoriteSchool' }})
        }else if( res.code == 1) {
          // this.$notify.error({
          //   title: '验证码输入错误或已失效',
          //   message: '请重新获取验证码'
          // });
          this.$message.error('验证码输入错误或已失效，请重新获取');
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
      // if (this.flag_state == true) {
      if (!this.loginflag) {
        this.$message({
          message: '登陆后，即可查看',
          type: 'warning',
          duration:600,
          onClose:() => {
            this.showlogin =true
          }
        })

        // this.$router.push('/login')
      } else {
        // this.$router.push('/AllCourses')
        this.$router.push({ name: 'SchoolRecommand', params: { tab: 'favoriteSchool' }})
      }
      // this.$router.push('/SchoolRecommand')

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
      // if (this.flag_state === true) {
      //   alert('请先登录！')
      //   this.$router.push('/login')
      // } else {
      //   this.$router.push('/WorkIndex')
      this.$router.push({ name: 'WorkIndex', params: { tab: 'favoriteMajor' }})
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
      this.$router.push('/')
    },
    gotoStudy () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/StudyProject')
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
    gotoOnline () {
      // if (this.flag_state === true) {
      //   alert("请先登录！");
      //   this.$router.push("/login");
      // } else {
      //   this.$router.push("/OnlineTeach");
      // }
      this.$router.push('/Recruit')
    },
    gotoPlat () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        var role = localStorage.getItem('role')
        if (role === '0') {
          this.$message.warning('没有权限访问该功能，请申请升级权限!')
        } else {
          window.location.href = `http://58.119.112.14:11013?userId=${localStorage.getItem(
            'userId'
          )}`
        }
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
*{
  padding: 0;
  margin: 0;
}
.container{
  height: 100%;
  width: 100%;
  font-size: 100%;
}
.nav li {
  margin-right: 1rem;
  text-align: center;
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
.nav_ul {
  /*margin-left: 10%;*/
  margin-left: 3rem;
}
.ul2_nav {
  margin-right: .5rem;
  float: right;
}
.ul2_nav li a:hover {
  background-color: transparent;
}

.nav_a {
  padding: 0;
  margin-top: .1rem;
}

.img-logo {
  height: 60%;
  margin-top: .2rem;
  margin-left: .2rem;
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
  font-family: 'STKaiti';
}
.header-title-mini {
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  font-family: 'STKaiti';
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
.col-left img{
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
  border-bottom: 1px solid #DCDFE6;
  /*border-radius: 10px;*/
  /*background-color: rgba(28,31,33,.06);*/
  /*height: 60px;*/
  /*line-height: 60px;*/
}
.forminput >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-radius: 10px;
  background-color: rgba(28,31,33,.06);
  height: 60px;
  line-height: 60px;
}
.forminput2 >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(28,31,33,.06);
  height: 60px;
  line-height: 60px;
}
.forminput2 >>> .el-input-group__prepend {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(28,31,33,.06);
  height: 60px;
  line-height: 60px;
}
.forminput3 >>> .el-input__inner {
  border: 0;
  /*border: 1px solid #DCDFE6;*/
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(28,31,33,.06);
  height: 60px;
  line-height: 60px;
}
.forminput3 >>> .el-input-group__append {
  border: 0;
  /*border: 1px solid #DCDFE6;*/

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(28,31,33,.06);
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
  width: 250px; margin: 40px auto;
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
  margin-right: 20px
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
  margin-top: 40px
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
.formlogins-enter-active, .formlogins-leave-active {
  transition: all 1.5s;
}
.formlogins-enter, .formlogins-leave-to {
  /*transform: translateX(-10px) translateY(-10px);*/
  opacity: 0;
}
.iconreturn {
  line-height: 0;float: left;
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
.login-form-content {
  width: 500px;
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
  background-color: #f95e5a;
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
</style>
