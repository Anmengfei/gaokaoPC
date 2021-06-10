<template>
  <div class="score">
    <h3 class="gaokaoTitle">模拟高考志愿填报</h3>
    <div class="sub-title">输入成绩信息，为您精准推荐</div>
    <div>
      <el-form ref="form" :model="form" class="form-style" :rules="rules" :inline-message="true">
        <el-row :gutter="10">
          <el-form-item
            label="高考总分:"
            prop="score"
          >
            <el-input
              type="text"
              placeholder="请填写高考总分"
              v-model="form.score"
              maxlength="3"
              style="width: 200px"
              oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
              onafterpaste="value=value.replace(/^\.+|[^\d.]/g,'')"

            ></el-input>
            <!-- <span class="hint" v-if="type !='view'">限制长度，3个字符</span> -->
          </el-form-item>
        </el-row>
        <el-row :gutter="10">
          <el-form-item
            label="总分位次:"
            prop="rank"
          >
            <el-input
              style="width: 200px"
              placeholder="请填写排名"
              v-model="form.rank"
              @focus="getrank"
            />
            <span class="hint" >可输入的位次范围：{{lowRank}}~{{highRank}}</span>
          </el-form-item>
        </el-row>
        <el-form-item
          class="form-item-style"
          label="选择科目:"
          prop="checkSubjectList"
        >
          <div v-if="form.examProvince == '河北省'">
            <el-checkbox-group
              size="mini"
              :max="1"
              v-model="form.checkSubjectList"
              @change="selectSubject1"
            >
              <el-checkbox-button
                v-for="item in subjects1"
                :label="item"
                :key="item"
              >{{ item }}</el-checkbox-button>
            </el-checkbox-group>
            <el-form-item
              class="form-item-style"
              prop="checkSubjectList2"
            >
              <label slot="label">&nbsp;&emsp;&emsp;&emsp;&emsp;</label>
              <el-checkbox-group
                size="mini"
                :max="2"
                v-model="form.checkSubjectList2"
                @change="selectSubject2"
              >
                <el-checkbox-button
                  v-for="item in subjects2"
                  :label="item"
                  :key="item"
                >{{ item }}</el-checkbox-button>
              </el-checkbox-group>

            </el-form-item>
            <span class="hint">高考选科3+1+2模式，物理历史必选一科，需要选择三门学科</span>
          </div>

          <div v-else>
            <el-checkbox-group
              size="mini"
              :max="3"
              v-model="form.checkSubjectList"
              @change="selectSubject"
            >
              <el-checkbox-button
                v-for="item in subjects"
                :label="item"
                :key="item"
              >{{ item }}</el-checkbox-button>
            </el-checkbox-group>
            <span class="hint" v-if="isShow">高考选科3+3模式，需要选择三门学科</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-row>
            <div class="infoPro">
              依据历年数据进行推荐，最新招生计划将在6月更新，敬请关注
            </div>
          </el-row>
        </el-form-item>

        <el-form-item>
          <div style="text-align: center">
            <el-button type="primary" @click="submitForm('form')">提交修改</el-button>
            <el-button @click="resetForm('form')">重置</el-button></div>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getUserInfo, testRank} from '@/api/index'
import {completeInformation} from '@/api/login'
export default {
  name: 'editScore',
  inject: ['reload'],
  data () {
    var checkRank = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('位次不能为空'))
      }
      setTimeout(() => {
        if (value < this.highRank) {
          callback(new Error('请输入正确位次'))
        } else if (value > this.lowRank) {
          callback(new Error('请输入正确位次'))
        } else {
          callback()
        }
      }, 500)
    }
    return {
      isShow: false,
      isShow1: false,
      btnUser: true,
      placeholder1: false,
      form: {
        examYear: '',
        examProvince: '',
        examCounty: '',
        examCity: '',
        rank: '',
        score: '',
        biology: '0',
        schoolName: '',
        className: '',
        phoneNum: '',
        chemistry: '0',
        geography: '0',
        history: '0',
        physics: '0',
        politics: '0',
        checkSubjectList: [],
        checkSubjectList2: []

      },
      rules: {
        examYear: [
          { required: true, message: '请选择高考年份', trigger: 'change' }
        ],
        examProvince: [
          { required: true, message: '请选择高考省份', trigger: 'change' }
        ],
        checkSubjectList: [
          { required: true, message: '请选择科目', trigger: 'change' }
        ],
        checkSubjectList2: [
          { required: true, message: '请选择科目', trigger: 'change' }
        ],
        rank: [
          { validator: checkRank, trigger: 'blur' }
        ],
        score: [
          { required: true, message: '请填写高考总分', trigger: 'blur' }
        ]

      },
      provinceList: [],
      subjects: ['物理', '化学', '生物', '政治', '历史', '地理'],
      subjects1: ['物理', '历史'],
      subjects2: [ '化学', '生物', '政治', '地理'],
      highRank: '',
      lowRank: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      getUserInfo().then(res => {
        if (res.code == 0) {
        // console.log(res)
          this.form.score = res.data.score
          this.form.rank = res.data.rank
          this.form.phoneNum = res.data.phoneNum
          this.form.examYear = res.data.examYear
          this.form.schoolName = res.data.schoolName
          this.form.className = res.data.className
          this.form.examProvince = res.data.examProvince
          this.form.examCounty = res.data.examCounty
          this.form.examCity = res.data.examCity
          if (this.form.examProvince == '河北省') {
            res.data.biology == 1 ? this.form.checkSubjectList2.push('生物') : ''
            res.data.chemistry == 1 ? this.form.checkSubjectList2.push('化学') : ''
            res.data.geography == 1 ? this.form.checkSubjectList2.push('地理') : ''
            res.data.history == 1 ? this.form.checkSubjectList.push('历史') : ''
            res.data.physics == 1 ? this.form.checkSubjectList.push('物理') : ''
            res.data.politics == 1 ? this.form.checkSubjectList2.push('政治') : ''
          } else {
            res.data.biology == 1 ? this.form.checkSubjectList.push('生物') : ''
            res.data.chemistry == 1 ? this.form.checkSubjectList.push('化学') : ''
            res.data.geography == 1 ? this.form.checkSubjectList.push('地理') : ''
            res.data.history == 1 ? this.form.checkSubjectList.push('历史') : ''
            res.data.physics == 1 ? this.form.checkSubjectList.push('物理') : ''
            res.data.politics == 1 ? this.form.checkSubjectList.push('政治') : ''
          }
          this.getrank()
        } else {
          localStorage.clear()
          this.$store.dispatch('getVip', '')
          this.$store.dispatch('resUserInfo', {})
          this.$router.push('/appCon')
          // this.loginflag = false;
          this.$store.dispatch('getloginstate', false)
        }
      })
    },
    submitForm (formName) {
      // console.log('学科',this.form)
      // console.log('学科',this.form.checkSubjectList)
      var submit = this.form.checkSubjectList.concat(this.form.checkSubjectList2)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          completeInformation({
            biology: submit.includes('生物') ? 1 : 0,
            chemistry: submit.includes('化学') ? 1 : 0,
            examProvince: this.form.examProvince,
            examCity: this.form.examCity,
            examCounty: this.form.examCounty,
            className: this.form.className,
            schoolName: this.form.schoolName,
            examYear: this.form.examYear,
            geography: submit.includes('地理') ? 1 : 0,
            history: submit.includes('历史') ? 1 : 0,
            phoneNum: this.form.phoneNum,
            physics: submit.includes('物理') ? 1 : 0,
            politics: submit.includes('政治') ? 1 : 0,
            rank: this.form.rank,
            score: this.form.score
          }).then(res => {
            // this.form.checkSubjectList.splice(0,3)
            // this.form.checkSubjectList2.splice(0,2)
            // console.log('删除后',this.form.checkSubjectList2,this.form.checkSubjectList)
            if (res.code == 0) {
              getUserInfo().then((res) => {
                this.$store.dispatch('resUserInfo', res.data).then(() => {
                  this.msgSuccess('提交修改成功')
                  this.$router.push('/')
                  this.reload()
                })
              })
              // this.msgSuccess('提交修改成功')
              // this.$router.push("/");
              // this.reload()
              // console.log('选科',this.form)
            } else {
              this.msgError('提交修改失败，一天内仅可更改一次')
            }
            // console.log('提交用户',res)
          })
        } else {
          this.msgError('提交修改失败')
          return false
        }
      })
    },
    getrank () {
      var submit = this.form.checkSubjectList.concat(this.form.checkSubjectList2)
      testRank({
        physics: submit.includes('物理') ? 1 : 0,
        province: this.form.examProvince,
        score: this.form.score
      }).then(res => {
        console.log(res)
        this.highRank = res.data.highRank
        this.lowRank = res.data.lowRank
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    selectSubject (val) {
      this.form.checkSubjectList = val
      // console.log('val',val)
      if (val.length < 3) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    selectSubject1 (val) {
      console.log(val)
      this.form.checkSubjectList.splice(0, val.length, ...val)
      console.log('eee', this.form.checkSubjectList)
    },
    selectSubject2 (val) {
      this.form.checkSubjectList2.splice(0, val.length, ...val)
      console.log('eee', this.form.checkSubjectList2)
      // this.form.checkSubjectList2 = val
    },
    handClick () {
      // this.placeholder1 = true;
      // console.log(this.placeholder1);
    }

  }
}
</script>
<style scoped>
.hint {
  /* margin-top: 2px; */
  margin-left: 82px;
  font-size: 12px;
  line-height: 12px;
  color: rgb(255, 150, 31);
}
.score {
  box-sizing: border-box;
  width: 580px;
  padding: 20px 20px 30px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
}
h3 .jsx-3804238702 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}
.gaokaoTitle {
  text-align: center;
}
.sub-title {
  text-align: center;
  margin-top: 10px;
  overflow: auto;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.5);
}
.select-style {
  width: 180px;

  border-radius: 10px;
}
.form-style {
  margin-top: 10px;
}
.select-style >>> .el-input__inner {
  border-radius: 10px;
  height: 50px;
}
.fRight {
  float: right;
  margin-top: -50px;
}
.provinceTs {
  margin-top: 10px;
  margin-left: 82px;
  font-size: 12px;
  line-height: 12px;
  color: rgb(255, 150, 31);
}
.input-style {
  width: 150px;
}
.input-style >>> .el-input__inner {
  border-radius: 10px;
}
.infoPro {
  /* margin-top: 10px; */
  text-align: center;
  font-size: 12px;
  line-height: 17px;
  color: rgb(30, 30, 30);
}
.btn {
  margin-left: 60px;
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  text-align: center;
  width: 420px;
  height: 45px;
  linght-height: 45px;
  cursor: pointer;
}

</style>
