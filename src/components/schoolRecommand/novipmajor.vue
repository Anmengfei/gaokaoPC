<template>
  <div class="app-container">
    <el-tabs type="border-card" v-model="selectedtag" @tab-click="getFlag">
      <el-tab-pane label="冲刺" name="冲">
        <div class="container">
          <ul>
            <li v-for="(item, index) in majorList" :key="index">
              <el-row>
                <el-col :span="3">
                  <div class="icon">
                    <img class="schoologo" :src="item.logoPath" />
                  </div>
                </el-col>
                <el-col :span="17">
                  <div class="desc">
                    <div>
                      <span class="name">{{ item.majorName }}</span>
                      <span class="province">{{ item.schoolName }}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="chooseBtn">
                    <button
                      type="button"
                      class="chooseMajor"
                      v-if="item.flag === -1"
                      @click="btnShow(index, item)"
                    >
                      <span>加入意向</span>
                    </button>
                    <button
                      type="button"
                      class="chooseNoMajor"
                      disabled="disabled"
                      v-if="item.flag === index"
                    >
                      <span>已加意向</span>
                    </button>
                  </div>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="稳妥" name="稳">
        <div class="container">
          <ul>
            <li v-for="(item, index) in majorList" :key="index">
              <el-row>
                <el-col :span="3">
                  <div class="icon">
                    <img class="schoologo" :src="item.logoPath" />
                  </div>
                </el-col>
                <el-col :span="17">
                  <div class="desc">
                    <div>
                      <span class="name">{{ item.majorName }}</span>
                      <span class="province">{{ item.schoolName }}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="chooseBtn">
                    <button
                      type="button"
                      class="chooseMajor"
                      v-if="item.flag === -1"
                      @click="btnShow(index, item)"
                    >
                      <span>加入意向</span>
                    </button>
                    <button
                      type="button"
                      class="chooseNoMajor"
                      disabled="disabled"
                      v-if="item.flag === index"
                    >
                      <span>已加意向</span>
                    </button>
                  </div>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="保底" name="保">
        <div class="container">
          <ul>
            <li v-for="(item, index) in majorList" :key="index">
              <el-row>
                <el-col :span="3">
                  <div class="icon">
                    <img class="schoologo" :src="item.logoPath" />
                  </div>
                </el-col>
                <el-col :span="17">
                  <div class="desc">
                    <div>
                      <span class="name">{{ item.majorName }}</span>
                      <span class="province">{{ item.schoolName }}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="chooseBtn">
                    <button
                      type="button"
                      class="chooseMajor"
                      v-if="item.flag === -1"
                      @click="btnShow(index, item)"
                    >
                      <span>加入意向</span>
                    </button>
                    <button
                      type="button"
                      class="chooseNoMajor"
                      disabled="disabled"
                      v-if="item.flag === index"
                    >
                      <span>已加意向</span>
                    </button>
                  </div>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div>
      <el-row>
        <el-col :span="24"
          ><div class="grid-content bg-purple-dark"></div
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAllMajor } from "../../api/schoolInfo";
import { getUserInfo } from "../../api/index";
export default {
  name: "majorList",
  props: ["selected", "volform"],
  mounted() {
    this.getAllMajorData(this.pageInfo.pagenum, this.riskFlag);
  },
  data() {
    return {
      selectedtag: "冲",
      majorList: [], // 保存专业信息
      pageInfo: {
        pagenum: 0, // 当前页数
        pagesize: 10, // 每页条数
        pagetotal: 100, // 总条目数
      },
      pageRecord: 0, // 用于记录每次点击的页号
      addWillFlagofSchool: "",
      addWillFlag: -1, // 判断加入志愿按钮是否变灰
      riskFlag: "冲", // 点击tag,拿取“冲，稳，保”数据
      userInfoList: [],
    };
  },
  watch: {
    selected: {
      handler() {
        this.getAllMajorData(this.pageInfo.pagenum, this.riskFlag);
      },
      immediate: true,
      deep: true,
    },
    volform: {
      handler(newValue, oldvalue) {
        // 1.向志愿表单添加数据（新数据长度>旧数据长度）--不执行操作  2.从志愿表单删除或清空数据（新数据长度<=旧数据长度）--执行操作
        if (newValue.length <= oldvalue.length) {
          // 将已经加入志愿表单的学校的按钮状态置为灰色
          this.getAllMajorData(this.pageRecord, this.riskFlag);
        }
      },
    },
  },
  methods: {
    btnShow(id, item) {
      item.flag = id;
      this.$emit("addform", item);
      // this.$forceUpdate()
    },
    getAllMajorData(pagenum, riskflag) {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        getAllMajor({
          // feature: this.selected.levelSelect,
          page: pagenum,
          examProvince: this.userInfoList.examProvince,
          risk: riskflag,
          rank:this.userInfoList.rank,
          score: this.userInfoList.score,
          // size: 10,
        }).then((res) => {
          if (res.status === 200) {
            this.pageInfo.pagetotal=res.data.data.total;
            this.majorList = res.data.data.list.splice(0,3);
            // 将已经加入志愿表单的学校的按钮状态置为灰色
            for (let i = 0; i < this.majorList.length; ++i) {
              for (let j = 0; j < this.volform.length; ++j) {
                if (
                  this.volform[j].id === this.majorList[i].id &&
                  this.volform[j].schoolName === this.majorList[i].schoolName
                ) {
                  this.majorList[i].flag = i;
                }
              }
            }
          } else {
            this.$message.error("无法取得数据");
            // console.log('无法取得数据')
          }
        });
      });
    },
    handleCurrentChange(val) {
      // 分页器执行函数
      this.btnFlag = [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ];
      this.majorShow = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      let page = val;
      this.pageRecord = page;
      let pagenum=val-1;
      this.getAllMajorData(pagenum, this.riskFlag);
    },
    addForm(index, item1, index1) {
      // 加入志愿表单函数
      this.$emit("addform", item1);
      item1.flag = index + "" + index1;
      // this.$forceUpdate() // 数据更新之后，强制试图更新
    },
    getFlag(tab) {
      // “冲”“稳”“保”
      this.riskFlag = tab.name;
      this.pagenum = 0;
      this.getAllMajorData(this.pagenum, this.riskFlag);
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.container ul li {
  overflow: auto;
  height: 1.5rem;
  margin-top: 2%;
  border-bottom: 0.001rem dashed #e4e4e4;
}
.container .desc {
  float: left;
  margin-top: 0.05rem;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  padding-left: 0.4rem;
}
.container .icon {
  float: left;
  margin-top: 0.05rem;
  margin-left: 1%;
}
.schoologo {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.25rem;
  overflow: hidden;
}
.container .icon img {
  width: 0.9rem;
  height: 0.9rem;
}
.container .desc .schooltags span {
  display: inline-block;
  margin-right: 0.25rem;
  margin-top: 0.1rem;
  padding: 0.1rem 0.15rem;
  color: rgb(153, 153, 153);
  font-size: 0.05rem;
  border: 0.02rem solid rgb(228, 228, 228);
  border-radius: 0.15rem;
}
.container .desc .name {
  font-weight: 800;
}
.container .desc .province {
  font-size: 0.15rem;
  margin-left: 0.2rem;
}
.container .chooseMajor {
  margin-top: 0.2rem;
  width: 1.7rem;
  border: 0.02rem solid #00aff0;
  padding: 0.1rem;
  border-radius: 0.08rem;
  font-size: 0.1rem;
  background-color: transparent;
  outline: none;
  color: #00aff0;
  cursor: pointer;
}

.container .chooseNoMajor {
  margin-top: 0.2rem;
  width: 1.7rem;
  border: 0.02rem solid #b2b2b2;
  padding: 0.1rem;
  border-radius: 0.08rem;
  font-size: 0.1rem;
  background-color: transparent;
  outline: none;
  color: #b2b2b2;
}

.container .chooseMajor .img1 {
  height: 0.25rem;
  border-radius: 0.2rem;
  letter-spacing: 0;
}

.container .chooseMajor .img2 {
  height: 0.25rem;
  border-radius: 0.2rem;
  letter-spacing: 0;
  transform: rotate(180deg);
}

.box3 {
  width: 100%;
  margin-top: 2%;
  text-align: center;
}

/deep/ .pagination {
  text-align: center;
  margin-top: 0.3rem;
}

li {
  list-style: none;
}
.app-container1 {
  width: 95%;
  margin-left: 5%;
  border-top: 0.001rem dashed #e4e4e4;
  max-height: 6rem;
  overflow-y: auto;
  padding-left: 1rem;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.app-container1::-webkit-scrollbar {
  width: 0.1rem;
  height: 100%;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
.app-container1::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
.app-container1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
.app-container1 ul li {
  overflow: hidden;
}
.app-container1 .text {
  float: left;
}
.app-container1 .name {
  /*float: left;*/
  margin-top: 1%;
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.app-container1 .evaluation {
  font-size: 0.01rem;
  font-weight: 600;
  margin-left: 0.2rem;
  padding: 0.05rem;
  border-radius: 50%;
  background-color: #fbbbcf;
  color: #d53f2f;
}
.app-container1 .desc {
  /*float: left;*/
  margin-top: 1%;
}

.app-container1 .desc .name {
  font-weight: 600;
  font-size: 0.3rem;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}

.app-container1 .desc span {
  display: inline-block;
  margin-right: 0.1rem;
  margin-top: 0.02rem;
  padding-top: 0.1rem;
  padding-right: 0.1rem;
  color: rgb(153, 153, 153);
  font-size: 0.05rem;
}
/*.app-container1 .btn{*/
/*  float: left;*/
/*  margin-left: .2rem;*/
/*}*/

.app-container1 .chooseWill {
  margin-top: 0.2rem;
  width: 1.7rem;
  border: 0.02rem solid #00aff0;
  padding: 0.1rem;
  border-radius: 0.08rem;
  font-size: 0.1rem;
  background-color: transparent;
  outline: none;
  color: #00aff0;
  cursor: pointer;
  margin-left: 0.2rem;
}
.app-container1 .chooseNoWill {
  margin-top: 0.2rem;
  width: 1.7rem;
  border: 0.02rem solid #b2b2b2;
  padding: 0.1rem;
  border-radius: 0.08rem;
  font-size: 0.1rem;
  background-color: transparent;
  outline: none;
  color: #b2b2b2;
  margin-left: 0.2rem;
  disabled: disabled;
}
</style>
