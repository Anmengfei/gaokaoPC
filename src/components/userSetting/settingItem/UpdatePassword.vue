<template>
    <div class="app-container">
      <div class="information_one">
        <span class="information_one_span">修改密码</span>
      </div>
      <el-divider></el-divider>
      <div>
        <el-form class="form-style-update" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="原始密码：" prop="oldPassword" class="form-item-style" >
            <el-input v-model.number="ruleForm.oldPassword" class="input-style" autocomplete="off" type="password" placeholder="请输入原始密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="pass" class="form-item-style">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="input-style" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="checkPass" class="form-item-style">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="input-style" placeholder="请再次输入新密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UpdatePassword",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var validatePass3 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入原始密码'));
          } else if (value.toString() !== localStorage.getItem('password')) {
            callback(new Error('请输入正确的原始密码'));
          } else {
            callback();
          }
        };
          return {
            ruleForm: {
              oldPassword: '',
              pass: '',
              checkPass: ''
            },
            rules: {
              pass: [
                { validator: validatePass, trigger: 'blur' }
              ],
              checkPass: [
                { validator: validatePass2, trigger: 'blur' }
              ],
              oldPassword: [
                {
                  validator: validatePass3, trigger: 'blur'
                }
              ]
            }
          }
      },
      mounted() {
          // console.log(localStorage.getItem('password'))
      },
      methods: {
        
        submitForm(formName) {
          console.log("用户名", localStorage.getItem('name'))
          this.$refs[formName].validate((valid) => {
            if (valid) {
              //var url = 'https://zhongkeruitong.top/towerImg/cms/user/resetPasswd?oldpassword=' + this.ruleForm.oldPassword + '&newpassword=' + this.ruleForm.pass + '&username=' + localStorage.getItem('name')
              var url = `http://58.119.112.14:11020/cms/system/user/profile/updatePwd?oldPassword=${this.ruleForm.oldPassword}&newPassword=${this.ruleForm.pass}`
              //var url = `http://58.119.112.14:11020/cms/user/resetPasswd?username=${localStorage.getItem('name')}&oldpassword=${this.ruleForm.oldPassword}&newpassword=${this.ruleForm.pass}`
              this.$axios({
                method: 'put',
                url: url,
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              }).then((res) => {
                if (res.data.code === 200) {
                  localStorage.setItem('password', this.ruleForm.pass)
                  this.$message({
                    type: 'success',
                    message: '密码修改成功！'
                  })
                  
                  this.resetForm(formName)
                } else {
                  this.$message({
                    type: 'danger',
                    message: '密码修改失败！'
                  })
                }
              })
              
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
.app-container {
  padding: 30px;
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
  .form-style-update {
    width: 500px;
    margin: 100px auto;
  }
.form-item-style >>> .el-form-item__label {
  font-size: 20px;
}
.input-style >>> .el-input__inner {
  height: 50px;
  font-size: 16px;
}
</style>
