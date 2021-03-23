<template>
  <div class="score">
    <h3 class="gaokaoTitle">模拟高考志愿填报</h3>
    <div class="sub-title">输入成绩信息，为您精准推荐</div>
    <div>
      <el-form ref="form" :model="form" class="form-style" :rules="rules">
        <el-row>
          <el-col :span="24">
            <el-form-item
              class="form-item-style"
              label="高考省份"
              prop="province"
            >
              <el-select
                placeholder="请选择高考省份"
                class="select-style"
                v-model="form.province"
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
              <el-form-item class="form-item-style" prop="zsType">
                <el-select
                  placeholder="请选择招生类型"
                  class="select-style fRight"
                  v-model="form.zsType"
                >
                  <el-option
                    v-for="item in zsTypeList"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <p class="provinceTs">高考地区一经确认不可修改</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item
              class="form-item-style"
              label="选择科目"
              prop="checkSubjectList"
            >
              <el-checkbox-group
                v-model="form.checkSubjectList"
                @change="selectSubject"
              >
                <el-checkbox-button
                  v-for="item in subjects"
                  :label="item"
                  :key="item"
                  >{{ item }}</el-checkbox-button
                >
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              class="form-item-style"
              label="高考总分"
              prop="totalScore"
            >
              <el-input
                placeholder="请填写高考总分"
                class="input-style"
                v-model="form.totalScore"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              class="form-item-style"
              label="本科排名"
              prop="ranking"
            >
              <el-input
                placeholder="请填写本科排名"
                class="input-style"
                v-model="form.ranking"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              class="form-item-style"
              label="语数外总分"
              prop="mainTotalScore"
            >
              <el-input
                placeholder="请填写语数外总分"
                class="input-style"
                v-model="form.mainTotalScore"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              class="form-item-style"
              label="专科排名"
              prop="zRanking"
            >
              <el-input
                placeholder="请填写专科排名"
                class="input-style"
                v-model="form.zRanking"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <div class="infoPro">
            依据历年数据进行推荐，最新招生计划将在6月更新，敬请关注
          </div>
        </el-row>
        <el-button type="primary" class="btn">确定</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "editScore",
  data() {
    return {
      placeholder1: false,
      form: {
        province: "",
        zsType: "",
        checkSubjectList: [],
        totalScore: "",
        ranking: "",
        mainTotalScore: "",
        zRanking: "",
      },
      rules: {
        province: [
          { required: true, message: "请选择高考省份", trigger: "blur" },
        ],
        checkSubjectList: [
          { required: true, message: "请选择科目", trigger: "blur" },
        ],
        totalScore: [
          { required: true, message: "请填写高考总分", trigger: "blur" },
        ],
        mainTotalScore: [
          { required: true, message: "请填写语数外总分", trigger: "blur" },
        ],
      },
      provinceList: ["河北", "山东", "北京", "上海", "广州", "深圳"],
      zsTypeList: ["普通招生", "自主招生"],
      subjects: ["物理", "化学", "生物", "政治", "历史", "地理"],
      checkSubjectList: [],
    };
  },
  methods: {
    selectSubject(val) {
      console.log(val);
      if (val.length > 3) {
        alert("不能超过3个");
        console.log(val.pop());
        console.log("val", val);
      }
    },
    handClick() {
      // document.getElementById("el-select").disabled = true;
      this.placeholder1 = true;
      console.log(this.placeholder1);
      // this.disabled = true;
    },
  },
};
</script>

<style scoped>
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
