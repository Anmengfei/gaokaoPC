<template>
  <div class="login-bg">
    <div class="login-form-content">
      <div class="content-tags">
        <ul>
          <li>
            <div :class="{tagstext : tagsShow === '登录'}" @click="switchLogin">登录</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '登录'}"></div>
          </li>
          <li>
            <div :class="{tagstext : tagsShow === '注册'}" @click="switchRegister">注册</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '注册'}"></div>
          </li>
        </ul>
      </div>
      <div class="login-forms" v-show="tagsShow === '登录'">
        <el-input  placeholder="请输入登录手机号" class="forminput" v-model="ruleForm1.username" clearable></el-input>
        <el-input  placeholder="密码" class="forminput" v-model="ruleForm1.password" type="password" :show-password="showpassword" @keyup.enter.native="login" clearable></el-input>
        <div class="login-button-style" @click="login">
          登录
        </div>
      </div>
      <div class="register-forms" v-show="tagsShow==='注册'">
        <div v-if="tagsShow2 === '1'">
          <el-input  placeholder="请输入注册手机号" class="forminput2" v-model="phoneNum" clearable>
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
            下一步
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
              <!--<el-radio-group v-model="radio">-->
              <!--<el-radio :label="2">学生</el-radio>-->
              <!--<el-radio :label="1">老师</el-radio>-->
              <!--</el-radio-group>-->
              <div class="login-button-style" @click="userregister('ruleForm2')">
                注册
              </div>
              <!--<el-button type="primary" class="login-button" size="large" @click="userregister('ruleForm2')">注册</el-button>-->
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <!--<div class="login-content">-->
      <!--<el-row>-->
        <!--<el-col :span="15">-->
          <!--<div class="col-left">-->
            <!--<img src="../../assets/bg-login1.jpg">-->
            <!--<div class="left-icon">-->
              <!--<i class="iconfont ymq-iconwechat-fill"></i>-->
              <!--<i class="iconfont ymq-iconQQ"></i>-->
              <!--<i class="iconfont ymq-iconweibo"></i>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="9">-->
          <!--<div class="login-form">-->
            <!--<div  class="iconreturn" v-if="!show1">-->
              <!--<i class="iconfont ymq-iconarrowleft" @click="returnlogin"></i>-->
            <!--</div>-->
            <!--<div class="login-img">-->
              <!--<img src="../../assets/logo34.png">-->
            <!--</div>-->
            <!--<div class="login-form-content">-->
              <!--<div class="loginform" v-if="show1">-->
                <!--<el-row>-->
                  <!--<el-col :span="4">-->
                    <!--<i class="iconfont ymq-iconuser formicon"></i>-->
                  <!--</el-col>-->
                  <!--<el-col :span="20">-->
                    <!--<el-input  placeholder="用户名" class="forminput" v-model="ruleForm1.username" clearable></el-input>-->
                  <!--</el-col>-->
                <!--</el-row>-->
                <!--<el-row>-->
                  <!--<el-col :span="4">-->
                    <!--<i class="iconfont ymq-iconlock formicon"></i>-->
                  <!--</el-col>-->
                  <!--<el-col :span="20">-->
                    <!--<el-input  placeholder="密码" class="forminput" v-model="ruleForm1.password" type="password" :show-password="showpassword" @keyup.enter.native="login" clearable></el-input>-->
                  <!--</el-col>-->
                <!--</el-row>-->
                <!--<div class="spans">-->
                  <!--<span class="spans1">忘记密码</span>-->
                  <!--<span class="spans2" @click="applyuser">新用户注册</span>-->
                <!--</div>-->
                <!--<el-button type="primary" size="large" @click.native.prevent="login" class="login-button">登录</el-button>-->
              <!--</div>-->
              <!--<div v-if="!show1">-->
                <!--<el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2">-->
                  <!--<div class="loginform2">-->
                    <!--<el-form-item prop="username">-->
                      <!--<el-row>-->
                        <!--<el-col :span="4">-->
                          <!--<i class="iconfont ymq-iconuser formicon"></i>-->
                        <!--</el-col>-->
                        <!--<el-col :span="20">-->
                          <!--<el-input  placeholder="用户名" class="forminput" v-model="ruleForm2.username" clearable></el-input>-->
                        <!--</el-col>-->
                      <!--</el-row>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item prop="password1" class="form-items">-->
                      <!--<el-row>-->
                        <!--<el-col :span="4">-->
                          <!--<i class="iconfont ymq-iconlock formicon"></i>-->
                        <!--</el-col>-->
                        <!--<el-col :span="20">-->
                          <!--<el-input  placeholder="请输入密码" class="forminput" v-model="ruleForm2.password1" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>-->
                        <!--</el-col>-->
                      <!--</el-row>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item prop="password2" class="form-items">-->
                      <!--<el-row>-->
                        <!--<el-col :span="4">-->
                          <!--<i class="iconfont ymq-iconlock formicon"></i>-->
                        <!--</el-col>-->
                        <!--<el-col :span="20">-->
                          <!--<el-input  placeholder="确认密码" class="forminput" v-model="ruleForm2.password2" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>-->
                        <!--</el-col>-->
                      <!--</el-row>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item prop="class_name" class="form-items">-->
                      <!--<el-row>-->
                        <!--<el-col :span="4">-->
                          <!--<i class="iconfont ymq-iconchengshi formicon"></i>-->
                        <!--</el-col>-->
                        <!--<el-col :span="20">-->
                          <!--<el-input  placeholder="学校" class="forminput" v-model="ruleForm2.class_name" clearable></el-input>-->
                        <!--</el-col>-->
                      <!--</el-row>-->
                    <!--</el-form-item>-->
                    <!--&lt;!&ndash;<el-radio-group v-model="radio">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-radio :label="2">学生</el-radio>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-radio :label="1">老师</el-radio>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-radio-group>&ndash;&gt;-->
                    <!--<el-button type="primary" class="login-button" size="large" @click="userregister('ruleForm2')">注册</el-button>-->
                  <!--</div>-->
                <!--</el-form>-->
              <!--</div>-->

            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->

  </div>
</template>

<script>
  import Footer from '@/components/common/footer1'
  import md5 from 'js-md5';
  import $ from 'jquery'
export default {
  name: 'index',
  components: { Footer },
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
      }
    }
  },
  computed: {
    showNum() {
      if (this.phoneNum === '') {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
  },
  methods: {
    applyuser () {
      this.show1 = false
    },
    getCodes() {
      if (this.phoneNum !== '') {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/getCode?phone='+this.phoneNum
        this.$axios.get(url).then((res)=> {
          if(res.data.code === 0) {
            this.timeCode = res.data.data.time
            this.strCode = res.data.data.str
            this.$message.success(res.data.msg)
          } else {
            this.$message.error(res.data.msg)
          }
          
        })
        this.countNum = 60
        this.showCountNum = false
        setInterval(()=> {
          this.countNum = this.countNum-1
          if (this.countNum === -1) {
            // this.countNum = 0
            clearInterval();
            this.showCountNum = true
          }
        }, 1000)
      }
    },
    switchLogin() {
      this.tagsShow = '登录'
    },
    switchRegister() {
      this.tagsShow = '注册'
      this.tagsShow2 = '1'
    },
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
      console.log('token是',localStorage.getItem('token'))
      if (this.ruleForm1.username === '' || this.ruleForm1.password === '') {
        this.$message.warning('请输入用户名或密码！')
      } else {
        //var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/login?username=' + this.ruleForm1.username + '&password=' + this.ruleForm1.password
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
            console.log("登录后的token是", localStorage.getItem('token'))
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
    nextButton() {
      var num = this.duanxinNum.toString()+this.timeCode.toString()
      // console.log(num)
      var str = md5(num)
      // console.log(str)
      // console.log(this.strCode)
      if (this.strCode === str) {
        this.tagsShow2 = '2'
      } else {
        alert('验证码输入错误！')
      }
    }
  }
}
</script>

<style scoped>
  .login-bg {
    height: 100%;
    width: 100%;
    background-image: url("../../assets/hot-work-img.png");
    background-size: 100% 100%;
    /*background-color: #33BA9A;*/
    position: relative;
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
    height: 600px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 30px 40px 30px 40px;
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
    background-color: #f20d0d;
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
