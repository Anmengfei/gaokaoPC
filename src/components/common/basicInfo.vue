<template>
  <div class="form">
    <div class="form-content">
      <div class="firstRow">模拟高考志愿</div>
      <div class="secondRow">输入成绩信息，为您精准推荐</div>
      <div class="gkfs">
        <el-row>
          <el-col :span="8"><span>高考省份</span></el-col>
          <el-col :span="8"
            ><el-dropdown
              ><el-button type="primary"
                >更多菜单<i class="el-icon-arrow-down el-icon--right"></i
              ></el-button> </el-dropdown
          ></el-col>
          <el-col :span="8"
            ><el-dropdown
              ><el-button type="primary"
                >更多菜单<i class="el-icon-arrow-down el-icon--right"></i
              ></el-button> </el-dropdown
          ></el-col>
        </el-row>
      </div>
      <div class="fourRow">
        <span>科目类型</span>
        <div>
          <el-radio v-model="radio" label="1">文科</el-radio>
          <el-radio v-model="radio" label="2">理科</el-radio>
        </div>
      </div>
      <div class="zonghe">
        <div class="zongfen">
          <span>高考总分</span>
          <el-input v-model="input" placeholder="600"></el-input>
        </div>
        <div class="paiming">
          <span>全省排名</span>
          <el-input v-model="input" placeholder="请输入全省排名"></el-input>
        </div>
      </div>
      <div class="lastRow">
        依据历年数据进行推荐，最新招生计划将在6月更新，敬请关注
      </div>
      <div class="btn">
        <el-button type="primary" round>主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
  // name: "header",
  // data() {
  //   return {
  //     form: {
  //       name: "",
  //       region: "",
  //       date1: "",
  //       date2: "",
  //       delivery: false,
  //       type: [],
  //       resource: "",
  //       desc: "",
  //     },
  //   };
  // },
  // methods: {
  //   onSubmit() {
  //     console.log("submit!");
  //   },
  // },
};
</script>

<style scoped>
.form {
  width: 600px;
  height: 700px;
  background-color: pink;
  border-radius: 15px;
}
.form-content {
  padding: 40px;
}
.firstRow {
  font-size: 30px;
}
.secondRow {
  font-size: 20px;
  color: #a5a5a5;
}
.fourRow span {
  float: left;
}
.fourRow div {
  float: left;
  margin-left: 30px;
}
</style>