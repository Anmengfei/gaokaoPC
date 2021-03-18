<template>
  <div class="container">
    
  </div>
</template>

<script>
import Footer from '@/components/common/footer1'
import md5 from 'js-md5'
// import $ from 'jquery'
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
    showNum () {
      if (this.phoneNum === '') {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
  },
  methods: {
    applyuser () {
      this.show1 = false
    },
    getCodes () {
      if (this.phoneNum !== '') {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/getCode?phone=' + this.phoneNum
        this.$axios.get(url).then((res) => {
          if (res.data.code === 0) {
            this.timeCode = res.data.data.time
            this.strCode = res.data.data.str
            this.$message.success(res.data.msg)
          } else {
            this.$message.error(res.data.msg)
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
    switchRegister () {
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
      var num = this.duanxinNum.toString() + this.timeCode.toString()
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

</style>

