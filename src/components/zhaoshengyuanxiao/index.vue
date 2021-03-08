<template>
  <div class="content">
    <div class="wrapper">
      <div class="introduce-box">
        <div class="title-box">
          <span>专业招生院校</span>
          <el-dropdown class="lq-btn">
            <el-button class="btn" type="primary">
              文科<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>理科</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="box-content">
          <!-- <selectType></selectType> -->
          <div class="box1-content">
            <!-- gutter:格子之间的间隔 -->
            <!-- 所在区域 -->
            <el-row :gutter="20">
              <el-col :span="4"
                ><div class="grid-content bg-purple">所在区域</div></el-col
              >
              <el-col :span="16"
                ><div class="grid-content bg-purple-light">
                  <el-checkbox-group v-model="checkboxList">
                    <el-checkbox
                      v-for="(item, index) in originList"
                      :label="item"
                      :key="index"
                      :disabled="isVip"
                    ></el-checkbox>
                  </el-checkbox-group></div
              ></el-col>
            </el-row>
            <!-- 院校类型 -->
            <el-row :gutter="20">
              <el-col :span="4"
                ><div class="grid-content bg-purple">院校类型</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-checkbox-group v-model="schoolboxList">
                    <el-checkbox
                      v-for="(item, index) in schoolList"
                      :label="item"
                      :key="index"
                      :disabled="isVip"
                    ></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="!showAll">
              <div class="tiaojian" @click="zhakai">展开更多筛选条件</div>
            </el-row>
            <!-- 学历层次 -->
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="4"
                ><div class="grid-content bg-purple">学历层次</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-checkbox-group v-model="xueliboxList">
                    <el-checkbox
                      v-for="(item, index) in xueliList"
                      :label="item"
                      :key="index"
                      :disabled="isVip"
                    ></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <!-- 院校层次 -->
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="4"
                ><div class="grid-content bg-purple">院校层次</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-checkbox-group v-model="cengciboxList">
                    <el-checkbox
                      v-for="(item, index) in cengciList"
                      :label="item"
                      :key="index"
                      :disabled="isVip"
                    ></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <!-- 办学性质 -->
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="4"
                ><div class="grid-content bg-purple">办学性质</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-checkbox-group v-model="xingzhiboxList">
                    <el-checkbox
                      v-for="(item, index) in xingzhiList"
                      :label="item"
                      :key="index"
                      :disabled="isVip"
                    ></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-col>
            </el-row>
            <!-- 研究生点 -->
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="4"
                ><div class="grid-content bg-purple">研究生点</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-radio-group v-model="yjsPoint">
                    <el-radio :label="0" :disabled="isVip">不限</el-radio>
                    <el-radio :label="1" :disabled="isVip">有</el-radio>
                    <el-radio :label="2" :disabled="isVip">无</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
            <!-- 独立学院 -->
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="4"
                ><div class="grid-content bg-purple">独立学院</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-radio-group v-model="dlxueyuan">
                    <el-radio :label="0" :disabled="isVip">不限</el-radio>
                    <el-radio :label="1" :disabled="isVip">是</el-radio>
                    <el-radio :label="2" :disabled="isVip">否</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
            <el-row v-if="showAll">
              <div class="tiaojian" @click="zhedie">收起筛选条件</div>
            </el-row>
            <el-divider></el-divider>
            <!-- <p class="tishixinghao">
              “*”表示排名来源于一分一段表，否则源于录取数据。
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="tag">
      <div class="left-tag">
        共找到&nbsp;
        <span>15</span>
        &nbsp;学校
      </div>
      <div class="right-tag">
        <span>数据说明</span>
      </div>
    </div>
    <div class="school-list"></div>
  </div>
</template>
<script>
// import selectType from "../schoolRecommand/selectType";
export default {
  //   components: { selectType },
  data() {
    return {
      isVip: true,
      showAll: false,
      checkboxList: ["不限"],
      originList: [
        "不限",
        "北京",
        "天津",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "上海",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "山西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆",
        "台湾",
        "香港",
        "澳门",
      ],
      schoolList: [
        "不限",
        "综合",
        "工科",
        "农业",
        "林业",
        "医药",
        "师范",
        "语言",
        "财经",
        "政法",
        "体育",
        "艺术",
        "民族",
      ],
      cengciList: ["不限", "985", "211", "双一流"],
      xingzhiList: ["不限", "公立大学", "民办高校"],
      xueliList: ["不限", "本科", "专科"],
      schoolboxList: ["不限"],
      cengciboxList: ["不限"],
      xingzhiboxList: ["不限"],
      xueliboxList: ["不限"],
      yjsPoint: 0,
      dlxueyuan: 0,
    };
  },
  methods: {
    zhakai() {
      this.showAll = true;
    },
    zhedie() {
      this.showAll = false;
    },
  },
};
</script>
<style scoped>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.content {
  position: relative;
  width: 1200px;
  padding-bottom: 80px;
  margin: 0px auto;
}
.wrapper {
  position: relative;
}
.introduce-box {
  margin-top: 60px;
  padding-bottom: 30px;
  position: relative;
}
.title-box {
  height: 32px;
  padding-left: 22px;
  text-align: left;
  vertical-align: middle;
  /* margin-bottom: 30px; */
  /* background-color: blue; */
}
.title-box::after {
  position: absolute;
  top: 3px;
  left: 0;
  width: 6px;
  height: 24px;
  background: #00aff0;
  border-radius: 4px;
  content: "";
}
.title-box span {
  float: left;
  margin-right: 40px;
  display: inline-block;
  color: rgb(51, 51, 51);
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
}
.lq-btn {
  float: left;
  vertical-align: middle;
  /* margin-left: 50px; */
  height: 32px;
  vertical-align: middle;
}

.lq-btn .btn {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.box-content {
  padding-left: 0px;
  /* background-color: pink; */
}
/* .box1 {
  margin-top: 2%;
  background-color: #f3f5f7;
} */
/* .box2{
  margin-top: 2%;
  margin-bottom: 10px;

} */
.box1-content {
  margin: 1% 0 0 0;
}

.box1-content .tishixinghao {
  margin-top: 2px;
  font-size: 12px;
  color: rgb(124, 124, 124);
}
.mt05 {
  margin-top: 1px;
}
.tiaojian {
  margin-top: 1px;
  margin-left: 75px;
  cursor: pointer;
  font-size: 10px;
  color: #00aff0 !important;
}
.tag {
  margin-bottom: 10px;
  color: rgb(153, 153, 153);
  font-size: 14px;
  letter-spacing: 0px;
}
.left-tag {
  float: left;
}
.right-tag {
  float: right;
}
</style>