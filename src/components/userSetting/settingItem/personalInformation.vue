<template>
  <div class="app-container">
    <div class="information_container">
      <div class="information_item">
        <div class="information_title">
          <div class="information_one">
            <span class="information_one_span">个人信息</span>
            <!-- <div class="icon-edit" @click="edit_info">
              <i class="iconfont ymq-iconbianjisekuai icon-i"></i>
              <span class="style_edit">编辑</span>
            </div> -->
          </div>
        </div>
        <el-divider></el-divider>
        <div class="information_content">
          <div class="information_content_div">
            <div class="title-text">
              姓名
            </div>
            <div class="title-text2">
              {{gettext(form.username)}}
            </div>
            <div class="clearfloat"></div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              手机号
            </div>
            <div class="title-text2">
             {{gettext(form.phonenumber)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              邮箱
            </div>
            <div class="title-text2">
              {{gettext(form.email)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              学校
            </div>
            <div class="title-text2">
              {{gettext(form.remark)}}
            </div>
          </div>
          <!-- <div class="information_content_div">
            <div class="title-text">
              城市
            </div>
            <div class="title-text2">
              {{gettext(form.province) + ' '+ gettext(form.city) + ' '+ gettext(form.district)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              学校
            </div>
            <div class="title-text2">
              {{schoolname}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              性别
            </div>
            <div class="title-text2">
              {{gettext(form.sex)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              邮箱
            </div>
            <div class="title-text2">
              {{gettext(form.mail)}}
            </div>
          </div> -->

        </div>
      </div>
    </div>
    <el-dialog
      title="编辑个人信息"
      :visible.sync="dialogVisible"
      width="35%">
      <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="form-style-info">
          <el-form-item label="昵称：" prop="nickname" class="form-item-style">
            <el-input v-model="form.nickname" class="input-style" placeholder="请填写昵称"></el-input>
          </el-form-item>
          <el-form-item label="职位：" prop="profession" class="form-item-style">
            <el-select placeholder="请选择职位" class="select-style input-style" v-model="form.profession">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历：" prop="education" class="form-item-style">
            <el-select placeholder="请选择学历" class="select-style input-style" v-model="form.education">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区：" prop="area" class="form-item-style">
            <v-distpicker :province="form.province" :city="form.city" :area="form.district" @selected="onSelected"></v-distpicker>
          </el-form-item>
          <el-form-item label="性别：" prop="sex" class="form-item-style">
            <el-radio v-model="form.sex" label="男" class="radio-style">男</el-radio>
            <el-radio v-model="form.sex" label="女" class="radio-style">女</el-radio>
          </el-form-item>
          <el-form-item label="邮箱：" prop="mail" class="form-item-style">
            <el-input v-model="form.mail" class="input-style" placeholder="请填写邮箱"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="onSubmit_info('ruleForm')">保 存</el-button>
      </span>
    </el-dialog>
    <!-- <el-dialog
      title="绑定手机号"
      :visible.sync="dialogVisible2"
      width="35%">
      <div class="register-forms">
        <div>
          <el-input  placeholder="请输入手机号" class="forminput2" v-model="phoneNum" clearable>
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
            确 定
          </div>
        </div>
      </div>

    </el-dialog> -->
    <!--<div class="distpickerss">-->
     <!---->
    <!--</div>-->

  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import md5 from 'js-md5'
export default {
  inject: ['reload'],
  name: 'personalInformation',
  components: { VDistpicker },
  data () {
    var validatePass = (rule, value, callback) => {
      if (this.form.province === null || this.form.city === null || this.form.district === null) {
        callback(new Error('请选择所在地区'))
      } else {
        callback()
      }
    }
    return {
      username: localStorage.getItem('name'),
      schoolname: localStorage.getItem('schoolname'),
      form: {
        username: '',
        nickname: '',
        sex: '',
        education: '',
        profession: '',
        province: '',
        city: '',
        district: '',
        mail: ''
      },
      phoneNum: '',
      duanxinNum: '',
      showCountNum: true,
      countNum: 60,
      timeCode: '',
      strCode: '',
      rules: {
        nickname: [{required: true, message: '请输入昵称', trigger: 'blur' }],
        profession: [{
          required: true, message: '请选择职位', trigger: 'change'
        }],
        education: [
          {
            required: true, message: '请选择学历', trigger: 'change'
          }
        ],
        area: [
          {
            validator: validatePass, trigger: 'change'
          }
        ],
        sex: [
          {
            required: true, message: '请选择性别', trigger: 'change'
          }
        ],
        mail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      },
      options1: [{
        value: '教师',
        label: '教师'
      }, {
        value: '学生',
        label: '学生'
      }, {
        value: '其他',
        label: '其他'
      }],
      options2: [{
        value: '小学',
        label: '小学'
      }, {
        value: '初中',
        label: '初中'
      }, {
        value: '高中',
        label: '高中'
      }, {
        value: '本科',
        label: '本科'
      }, {
        value: '硕士',
        label: '硕士'
      }, {
        value: '博士',
        label: '博士'
      }],
      dialogVisible: false,
      dialogVisible2: false
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
    this.getInfo()
  },
  methods: {
    getInfo () {
      var url = `http://58.119.112.14:11020/cms/system/user/profile`
      this.$axios.get(url, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then((res) => {
        this.form.username = res.data.data.userName
        this.form.email = res.data.data.email
        this.form.remark = res.data.data.remark
        this.form.phonenumber = res.data.data.phonenumber
        this.form.userId = res.data.data.userId
      })
    },
    showDis () {
      this.dialogVisible2 = true
    },
    getCodes () {
      if (this.phoneNum !== '') {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/getCode?phone=' + this.phoneNum
        this.$axios.get(url, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          this.timeCode = res.data.data.time
          this.strCode = res.data.data.str
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

    gettext (item) {
      if (item === null) {
        return '未设置'
      } else {
        return item
      }
    },
    edit_info () {
      this.dialogVisible = true
    },
    onSelected (data) {
      console.log(data)
      this.form.province = data.province.value
      this.form.city = data.city.value
      this.form.district = data.area.value
    },
    onSubmit_info (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var url = 'https://zhongkeruitong.top/towerImg/cms/user/updateUserInfo?username=' + this.username + '&nickname=' + this.form.nickname + '&sex=' + this.form.sex + '&education=' + this.form.education + '&profession=' + this.form.profession + '&province=' + this.form.province + '&city=' + this.form.city + '&district=' + this.form.district + '&mail=' + this.form.mail
          this.$axios.post(url, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then((res) => {
            if (res.data.code === 200) {
              this.$message.success('修改成功！')
              this.dialogVisible = false
              this.getInfo()
              this.reload()
            }
          })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    nextButton () {
      var num = this.duanxinNum.toString() + this.timeCode.toString()
      // console.log(num)
      var str = md5(num)
      // console.log(str)
      // console.log(this.strCode)
      if (this.strCode === str) {
        this.resetPhone()
      } else {
        alert('验证码输入错误！')
      }
    },
    resetPhone () {
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/resetPhone?phone=' + this.phoneNum + '&username=' + this.username
      this.$axios.post(url, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then((res) => {
        if (res.data.code === 200) {
          this.$message.success('手机号绑定成功')
          this.dialogVisible2 = false
          this.reload()
        } else {
          this.$message.warning('系统繁忙，请稍后再试！')
        }
      })
    }
  }
}
</script>

<style scoped>
  .app-container {
    padding:30px;
  }
  .information_title {
    /*height: 50px;*/
  }
  .information_one .information_one_span {
    /*display: block;*/
    /*height: 50px;*/
    /*width: 200px;*/
    /*line-height: 50px;*/
    padding-left: 50px;
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: #a0b9ec;
    font-size: 20px;
  }
  .style_edit {
    color: #9397a2;
  }
  .icon-edit {
    float: right;
    font-size: 20px;
    cursor: pointer;
  }
  .icon-i {
    color: #008CC8;
  }
  .icon-edit:hover .style_edit {
    color: #008CC8;
  }
  .information_content {
    padding: 20px 0 20px 50px;
  }
  .title-text {
    height: 80px;
    width: 150px;
    background-color: #F3F5F7;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    display: inline-block;
  }
  .title-text2 {
    height: 80px;
    width: 650px;
    border-bottom: #D9DDE1 solid 1px;
    display: inline-block;
    line-height: 80px;
    font-size: 20px;
    padding-left: 30px;
    color: black;
  }
  .information_content_div {
    margin-bottom: 20px;
  }
  .form-style-info {
    width: 500px;
    margin: 0 auto;
  }
  .form-item-style >>> .el-form-item__label {
    font-size: 20px;
  }
  .input-style >>> .el-input__inner {
    height: 50px;
    font-size: 16px;
  }
  .select-style {
    width: 100%;
  }
  .el-select-dropdown__item {
    font-size: 18px;
  }
  .radio-style >>> .el-radio__label {
    font-size: 18px;
  }
  .radio-style {
    margin-right: 30px;
  }
  .radio-style >>> .el-radio__inner {
    width: 20px;
    height: 20px;
  }
  .form-item-style >>> .distpicker-address-wrapper select {
    font-size: 18px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    line-height: 40px;
  }
  .text-button {
    /*float: right;*/
    font-size: 16px;
    margin-left: 50px;
  }
  .clearfloat {
    clear: both;
  }
  .forminput2 {
    /*float: left;*/
    width: 100%;
    font-size: 20px;
    line-height: 40px;
    margin-top: 40px;
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
  .forminput2 >>> .el-input__inner {
    border: 0;
    /*border: 1px solid #DCDFE6;*/
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgba(28,31,33,.06);
    height: 60px;
    line-height: 60px;
  }
  .input-course-text {
    color: red;
    font-size: 14px;
  }
  .forminput3 {
    width: 100%;
    font-size: 20px;
    line-height: 40px;
    margin-top: 40px;
  }
  .forminput2 >>> .el-input__clear {
    font-size: 20px;
  }
  .forminput3 >>> .el-input__clear {
    font-size: 20px;
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
  .yanzheng-button {
    padding-right: 10px;
    color: #1481b8;
  }
  .yanzheng-button:hover {
    color: #19a1e6;
  }
  .yanzheng-text {
    color: #9199a1;
    font-size: 18px;
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
  .register-forms {
    width: 450px;
    margin: 0 auto;
  }
</style>
