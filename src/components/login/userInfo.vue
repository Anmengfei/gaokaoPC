<template>
  <div class="score">
    <div>
      <el-form ref="form" :model="form" class="form-style" :rules="rules" :inline-message="true">
        <el-row :gutter="10">
            <el-form-item prop="userNickName">
              <label slot="label">姓&emsp;&emsp;名:</label>
              <el-input
                style="width:195px"
                placeholder="请填写姓名"
                v-model="form.userNickName"
              />
            </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="高考年份:"
              prop="examYear"
            >
              <el-date-picker
                style="width: 200px"
                v-model="form.examYear"
                type="year"
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
  name: "editScore",
  inject:['reload'],
  data() {
    return {
      isShow: false,
      btnUser: true,
      placeholder1: false,
      form: {
        userNickName: "",
        examYear: "",
        checkSubjectList: [],
        examProvince: "",
        rank: "",
        score: "",
      },
      rules: {
        userNickName:[
          { required: true, message: "请填写姓名", trigger: "blur" },
        ],
        examProvince: [
          { required: true, message: '请选择活动区域', trigger: "change" }
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
      checkSubjectList: [],
    };
  },
  mounted() {
    this.getProvincesinit()
  },
  methods: {
    getProvincesinit() {
      getAllprovinces().then((res) => {
        this.provinceList = res.data;
      });
    },
    submitForm(formName) {
      console.log('学科',this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('showuserInfo', false)
          this.reload()
         // if(res.code == 0){
         //   this.msgSuccess('提交成功')
         //   this.$store.dispatch('showuserInfo', true)
         // }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    selectSubject(val) {
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
