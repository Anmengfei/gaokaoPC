<template>
  <div class="score">
    <div>
      <el-form ref="form" :model="form" class="form-style" :rules="rules" :inline-message="true">
<!--        <el-row :gutter="10">-->
<!--            <el-form-item prop="userNickName">-->
<!--              <label slot="label">姓&emsp;&emsp;名:</label>-->
<!--              <el-input-->
<!--                style="width:195px"-->
<!--                placeholder="请填写姓名"-->
<!--                v-model="form.userNickName"-->
<!--              />-->
<!--            </el-form-item>-->
<!--        </el-row>-->
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="高考年份:"
              prop="examYear"
            >
              <el-date-picker
                v-model="form.examYear"
                type="year"
                style="width: 195px"
                value-format="yyyy"
                :picker-options="pickerOptions"
                placeholder="选择高考年份">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

            <el-form-item
              label="高考省份:"
              prop="examProvince"
            >
              <el-select
                placeholder="请选择高考省份"
                v-model="form.examProvince"
                style="width: 195px"
                @change="handClick()"
                :disabled="placeholder1"
              >
                <el-option
                  v-for="item in provinceList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <p class="provinceTs">高考地区一经确认不可修改</p>
            </el-form-item>
        </el-row>
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
                placeholder="请填写总分位次"
                v-model="form.rank"
              />
            </el-form-item>
        </el-row>
        <el-form-item
          class="form-item-style"
          label="选择科目:"
          prop="checkSubjectList"
        >
          <div v-if="form.examProvince == '河北' || form.examProvince == '辽宁' || form.examProvince == '江苏' || form.examProvince == '福建' || form.examProvince == '湖北' || form.examProvince == '湖南' || form.examProvince == '广东' || form.examProvince == '重庆' ">
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
              prop="checkSubjectList"
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
            <span class="hint" v-if="isShow1">高考选科3+1+2模式，物理历史必选一科，共需要选择三门学科</span>
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
          <div style="text-align: center"> <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button></div>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getAllprovinces } from "@/api/index";
import { completeInformation } from "@/api/login";

export default {

  inject:['reload'],
  data() {
    return {
      pickerOptions:{
        disabledDate(time) {
          return time.getTime() < Date.now()-8.64e7;
        },
      },
      isShow: false,
      isShow1: false,
      btnUser: true,
      placeholder1: false,
      form: {
        examYear: "2021",
        examProvince: "",
        rank: "",
        score: "",
        biology:'0',
        chemistry:'0',
        geography:'0',
        history:'0',
        physics:'0',
        politics:'0',
        checkSubjectList:[],
        checkSubjectList2:[]
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
        checkSubjectList2: [
          { required: true, message: "请选择科目", trigger: "change" },
        ],
        rank: [
          { required: true, message: "请填写总分位次", trigger: "blur" },
        ],
       score: [
          { required: true, message: "请填写高考总分", trigger: "blur" },
        ],
      },
      provinceList: [],
      subjects: ["物理", "化学", "生物", "政治", "历史", "地理"],
      subjects1: ["物理",  "历史"],
      subjects2: [ "化学", "生物", "政治",  "地理"],
      checkSubjectList: [],
    };
  },
  mounted() {
    this.getProvincesinit()
  },
  computed:{
    phoneNum() {
      return localStorage.getItem("phone")
    },
  },
  methods: {
    getProvincesinit() {
      getAllprovinces().then((res) => {
        this.provinceList = res.data;
      });
    },
    submitForm(formName) {

       var submit = this.form.checkSubjectList.concat(this.form.checkSubjectList2)
      console.log('学科',this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          completeInformation({
            biology: submit.includes('生物')?1:0,
            chemistry:submit.includes('化学')?1:0,
            examProvince:this.form.examProvince,
            examYear:this.form.examYear,
            geography:submit.includes('地理')?1:0,
            history:submit.includes('历史')?1:0,
            phoneNum:this.phoneNum,
            physics:submit.includes('物理')?1:0,
            politics:submit.includes('政治')?1:0,
            rank:this.form.rank,
            score:this.form.score,
          }).then( res => {
            if(res.code == 0){
              this.msgSuccess('提交成功')
              this.$store.dispatch('showuserInfo', false)
              this.$router.push("/");
              this.reload()
            }
            console.log('提交用户',res)
          })
        } else {
          this.$store.dispatch('showuserInfo', true)
          this.msgError('信息提交失败，请重新填写')
          // return false;
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
    selectSubject1(val) {
      this.form.checkSubjectList = val
      console.log('val',val)
      if (this.form.checkSubjectList.length < 1) {
        this.isShow1 = true;
      }else {
        this.isShow1 = false
      }
    },
    selectSubject2(val) {
      this.form.checkSubjectList2 = val
      console.log('val',val)
      if (this.form.checkSubjectList2.length < 2) {
        this.isShow1 = true;
      }else {
        this.isShow1 = false
      }
    },
    handClick() {
      this.form.checkSubjectList = []
      this.form.checkSubjectList2 = []
      // this.placeholder1 = true;
      // console.log(this.placeholder1);
    },

  },
};
</script>

<style scoped>
.hint {
  margin-left: 82px;
  font-size: 12px;
  line-height: 12px;
  color: rgb(255, 150, 31);
}
.score {
  box-sizing: border-box;
  width: 560px;
  /*padding: 20px 20px 30px;*/
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
}
.form-style {
  margin-top: 10px;
}
.select-style >>> .el-input__inner {
  border-radius: 10px;
  height: 50px;
}

.provinceTs {
  margin-top: 10px;
  margin-left: 82px;
  font-size: 12px;
  line-height: 12px;
  color: rgb(255, 150, 31);
}
.input-style {
  width: 180px;
}
.input-style >>> .el-input__inner {
  border-radius: 10px;
}


</style>
