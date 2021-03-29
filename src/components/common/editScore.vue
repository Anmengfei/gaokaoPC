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
            label="排名:"
            prop="rank"
          >
            <label slot="label">排&emsp;&emsp;名:</label>
            <el-input
              style="width: 200px"
              placeholder="请填写排名"
              v-model="form.rank"
            />
          </el-form-item>
        </el-row>
        <el-form-item
          class="form-item-style"
          label="选择科目:"
          prop="checkSubjectList"
        >
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
          <span class="hint" v-if="isShow">需要选择三门学科</span>
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
import {getUserInfo} from "@/api/index"
import {completeInformation} from "@/api/login"
export default {
  name: "editScore",
  inject:['reload'],
  data() {
    return {
      isShow: false,
      btnUser: true,
      placeholder1: false,
      form: {
        examYear: "",
        examProvince: "",
        rank: "",
        score: "",
        biology:'0',
        phoneNum:'',
        chemistry:'0',
        geography:'0',
        history:'0',
        physics:'0',
        politics:'0',
        checkSubjectList:[]
      },
      rules: {
        examYear:[
          { required: true, message: "请选择高考年份", trigger: "change" },
        ],
        examProvince: [
          { required: true, message: '请选择高考省份', trigger: "change" }
        ],
        checkSubjectList: [
          { required: true, message: "请选择科目", trigger: "change" },
        ],
        rank: [
          { required: true, message: "请填写高考排名", trigger: "blur" },
        ],
        score: [
          { required: true, message: "请填写高考总分", trigger: "blur" },
        ],
      },
      provinceList: [],
      subjects: ["物理", "化学", "生物", "政治", "历史", "地理"],
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      getUserInfo().then(res => {
        console.log(res)
        this.form.score = res.data.score
        this.form.rank = res.data.rank
        this.form.phoneNum = res.data.phoneNum
        this.form.examYear = res.data.examYear
        this.form.examProvince = res.data.examProvince
        res.data.biology == 1?this.form.checkSubjectList.push('生物'):'';
        res.data.chemistry == 1?this.form.checkSubjectList.push('化学'):'';
        res.data.geography == 1?this.form.checkSubjectList.push('地理'):'';
        res.data.history == 1?this.form.checkSubjectList.push('历史'):'';
        res.data.physics == 1?this.form.checkSubjectList.push('物理'):'';
        res.data.politics == 1?this.form.checkSubjectList.push('政治'):'';
      })
    },
    submitForm(formName) {
      console.log('学科',this.form)
      console.log('学科',this.form.checkSubjectList)

      this.$refs[formName].validate((valid) => {
        if (valid) {
          completeInformation({
            biology: this.form.checkSubjectList.includes('生物')?1:0,
            chemistry:this.form.checkSubjectList.includes('化学')?1:0,
            examProvince:this.form.examProvince,
            examYear:this.form.examYear,
            geography:this.form.checkSubjectList.includes('地理')?1:0,
            history:this.form.checkSubjectList.includes('历史')?1:0,
            phoneNum:this.form.phoneNum,
            physics:this.form.checkSubjectList.includes('物理')?1:0,
            politics:this.form.checkSubjectList.includes('政治')?1:0,
            rank:this.form.rank,
            score:this.form.score,
          }).then( res => {
            if(res.code == 0){
              this.msgSuccess('提交修改成功')
              this.$router.push("/");
              this.reload()
            }
            console.log('提交用户',res)
          })
        } else {
            this.msgError('提交修改失败')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    selectSubject(val) {
      this.form.checkSubjectList = val
      console.log('val',val)
      if (val.length < 3) {
        this.isShow = true;
      }else {
        this.isShow = false
      }
    },
    handClick() {
      // this.placeholder1 = true;
      // console.log(this.placeholder1);
    },

  },
};
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
