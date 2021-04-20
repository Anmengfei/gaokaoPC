<template>
  <div class="app-container">
    <div class="container">
      <ul>
        <li v-for="(item, index) in schoolList" :key="index">
          <el-row>
            <el-col :span="2">
              <div class="icon">
                <img class="schoologo" :src="item.logoPath" />
              </div>
            </el-col>
            <el-col :span="18">
              <div class="desc">
                <div>
                  <span class="name">{{ item.schoolName }}</span>
                  <span class="province">{{ item.province }}</span>
                </div>
                <div class="schooltags">
                  <span
                    v-for="(itemtag1, index) in item.addressTagsPC"
                    :key="index"
                    >{{ itemtag1 }}</span
                  >
                  <span v-for="itemtag2 in item.tags" :key="itemtag2">{{
                    itemtag2
                  }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="chooseBtn">
                <button
                  type="button"
                  class="chooseMajor"
                  v-show="btnFlag[index]"
                  @click="btnShow(index, item.majors)"
                >
                  <span>选择意向专业</span>
                  <img class="img1" src="../../assets/drop_down_menu.png" />
                </button>
                <button
                  type="button"
                  class="chooseMajor"
                  v-show="!btnFlag[index]"
                  @click="btnShow(index, item.majors)"
                >
                  <span>收起专业</span>
                  <img class="img2" src="../../assets/drop_down_menu.png" />
                </button>
              </div>
            </el-col>
          </el-row>
          <div id="major-list" v-show="majorShow[index]">
            <div class="app-container1">
              <ul>
                <li v-for="(item1, index1) in item.majors" :key="index1">
                  <el-row>
                    <el-col :span="19">
                      <div class="text">
                        <div class="majorinfo">
                          <span
                            class="flag"
                            v-if="item1.risk === '冲'"
                            style="background: #ee8d22"
                            >{{ item1.risk }}</span
                          >
                          <span
                            class="flag"
                            v-else-if="item1.risk === '稳'"
                            style="background: #439cff"
                            >{{ item1.risk }}</span
                          >
                          <span
                            class="flag"
                            v-if="item1.risk === '保'"
                            style="background: #4caf4e"
                            >{{ item1.risk }}</span
                          >
                          <span class="name">{{ item1.majorName }}</span>
                          <span class="evaluation">{{ item1.evaluation }}</span>
                        </div>

                        <div class="desc">
                          <!-- <span>2020年招生人数{{ item1.enrollNum }}</span> -->
                          <span
                            >选考科目：{{ item1.selectionRequirement }}</span
                          >
                          <!-- <span>2020年最低分****</span> -->
                          <!-- <span>2020年最低位次####</span> -->
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="btn">
                        <button
                          class="chooseWill"
                          v-if="item1.flag === -1"
                          @click="addForm(index, item1, index1)"
                        >
                          加入意向
                        </button>
                        <button
                          class="chooseNoWill"
                          v-else-if="item1.flag === index + '' + index1"
                        >
                          已加意向
                        </button>
                      </div>
                    </el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--        分页器-->
  </div>
</template>

<script>
import { getAllSchool } from "../../api/schoolInfo";
import { getUserInfo } from "../../api/index";
export default {
  name: "schoolList",
  props: ["selected", "volform"],
  mounted() {
    this.getAllSchoolData(this.pageInfo.pagenum);
  },
  data() {
    return {
      activeName: "first",
      btnFlag: [true, true, true, true, true, true, true, true, true, true], // 控制显示“选择意向专业”“收起专业”
      majorShow: [
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
      ], // 控制显示“学校专业”
      schoolList: [],
      pageInfo: {
        pagenum: 0, // 当前页数
        pagesize: 10, // 每页条数
        pagetotal: 100, // 总条目数
      },
      pageRecord: 0, // 用于记录每次点击的页号
      selectnecess: {},
      majorlist: [], // 专业列表
      addWillFlagofSchool: "",
      addWillFlag: -1, // 判断加入志愿按钮是否变灰
      userInfoList: [],
    };
  },
  watch: {
    selected: {
      handler() {
        this.getAllSchoolData(this.pageInfo.pagenum);
      },
      immediate: true,
      deep: true,
    },
    volform: {
      handler(newValue, oldvalue) {
        // 1.向志愿表单添加数据（新数据长度>旧数据长度）--不执行操作  2.从志愿表单删除或清空数据（新数据长度<=旧数据长度）--执行操作
        if (newValue.length <= oldvalue.length) {
          // 将已经加入志愿表单的学校的按钮状态置为灰色
          this.getAllSchoolData(this.pageRecord);
        }
      },
    },
  },
  methods: {
    btnShow(id, majorls) {
      this.$set(this.btnFlag, id, !this.btnFlag[id]);
      this.$set(this.majorShow, id, !this.majorShow[id]);
      // console.log('专业列表', majorls)

      this.majorlist = majorls;
    },
    getAllSchoolData(pagenum) {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        // console.log("这是测试的是userInfo的列表");
        // console.log(this.userInfoList);
        getAllSchool({
          provinces: this.selected.provinceSelect,
          schoolTypes: this.selected.typeSelect,
          feature: this.selected.levelSelect,
          rank:this.userInfoList.rank,
          page: pagenum,
          examProvince: this.userInfoList.examProvince,
          score: this.userInfoList.score,
          size: 3,
        }).then((res) => {
          if (res.status === 200) {
             this.schoolList = res.data.data.list;
            // for (let i = 0; i < this.schoolList.length; ++i) { // 为每一条数据的专业信息添加一条标志位flag=-1
            //   for (let j = 0; j < this.schoolList[i].majors.length; ++j) {
            //     this.schoolList[i].majors[j].flag = -1
            //   }
            // }
            // 将已经加入志愿表单的学校的按钮状态置为灰色
            for (let i = 0; i < this.schoolList.length; ++i) {
              for (let j = 0; j < this.schoolList[i].majors.length; ++j) {
                for (let k = 0; k < this.volform.length; ++k) {
                  if (
                    this.volform[k].id === this.schoolList[i].majors[j].id &&
                    this.volform[k].schoolName ===
                      this.schoolList[i].majors[j].schoolName
                  ) {
                    this.schoolList[i].majors[j].flag = i + "" + j;
                  }
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
      let pagenum = val-1;
      this.getAllSchoolData(pagenum);
    },
    addForm(index, item1, index1) {
      // 加入志愿表单函数
      this.$emit("addform", item1);
      item1.flag = index + "" + index1;
      // this.$forceUpdate() // 数据更新之后，强制试图更新
    },
  },
};
</script>

<style scoped>
.container{
  width:100%;
}
.container ul li {
  overflow: auto;
  margin-top: 1%;
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
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.container .icon img {
  width: 1rem;
  height: 1rem;
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
.app-container1 .majorinfo .flag {
  font-size: 0.2rem;
  color: white;
  font-weight: 500;
  padding: 0.05rem;
  margin-right: 0.03rem;
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

