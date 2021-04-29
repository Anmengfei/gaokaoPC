<template>
  <div class="app_container">
    <div class="wrap">
      <div class="main">
        <top-header></top-header>
        <HomeHeader></HomeHeader>
        <div class="content">
          <div class="table_head">
            <span class="volunteerTable">智 能 填 报 志 愿 表</span>
            <el-row>
              <el-col :span="17">
                <div class="title">
                  <span>&nbsp;&nbsp;我的成绩:&nbsp;&nbsp;{{userInfoList.score}}分&nbsp;&nbsp;</span>
                  <span v-for="(major,index) in majorList" :key="index">{{major}}&nbsp;&nbsp;</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="operation">
                  <i v-show='ModifyShow' class="iconfont icon-15" @click="gotoEdit" title="修改">
                    <span>修改</span>
                  </i>
                  <i
                    v-show='ModifyShow'
                    class="iconfont icon-baocun"
                    @click="gotoSave()"
                    title="保存"
                  >
                    <span>保存</span></i
                  >
                  <i
                    v-show='!ModifyShow'
                    class="iconfont icon-15"
                    @click="gotoback()"
                    title="返回"
                  >
                    <span>返回</span></i
                  >
                  <i class="iconfont icon-daochu" title="导出" @click="exportExcle">
                    <span>导出</span></i
                  >
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="tablecontent">
            <table class="bordered" ref="tables">
              <thead>
                <tr ref="tr1">
                  <th>序号</th>
                  <th>录取指标</th>
                  <th>学校名称</th>
                  <th>专业名称</th>
                  <th>选科要求</th>
                  <th>2020年招生计划</th>
                  <th>2021年招生计划</th>
                  <th v-show='ModifyShow'>操作</th>
                </tr>
              </thead>
              <tr v-for="(item, index) in zhiyuanTableList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.chances }}</td>
                <td>
                  {{ item.schoolName }}<br /><span
                    >{{ schoolCode(index) }}</span
                  >
                </td>
                <td>
                  {{ item.majorName }}<br />
                  <!-- <span>(代码：{{ item.majorCode }})</span> -->
                </td>
                <td>{{ selectSubject(index) }}</td>
                <td>{{ item.enrollNum }}</td>
                <td>{{ item.enrollNum21}}</td>
                <td v-show='ModifyShow'>
                  <div class="Btn">
                    <div class="Btn1">
                      <i
                        class="iconfont icon-top-btn-fill"
                        v-bind:class="{
                        iconfontSize: index == zhiyuanTableList.length - 1,
                        }"
                        @click="goUp(index)"
                        v-show="!(index == 0)"
                      ></i>
                      <!-- v-show="!(index == 0)" -->
                      <i
                        class="iconfont icon-bottom-btn-fill"
                        v-bind:class="{ iconfontSize: index == 0 }"
                        @click="goDown(index)"
                        v-show="!(index == zhiyuanTableList.length - 1)"
                      ></i>
                      <!-- v-show="!(index == zhiyuanTableList.length - 1)" -->
                    </div>
                    <div class="Btn2">
                      <i
                        class="iconfont icon-shanchu1"
                        v-bind:class="{ iconShanchu: index == 0 || index == zhiyuanTableList.length - 1,iconShanchu2:zhiyuanTableList.length==1,iconShanchu3:zhiyuanTableList.length === 2}"
                        @click="handleDelete(index)"
                      ></i>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="emptyPart" v-show="zhiyuanTableList == 0">
            <img src="@/assets/empty.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import { getToken } from "@/utils/auth.js";
import { addWishListPC } from "../../api/WishList";
import { changeWishListPC } from "../../api/WishList";
import { updateWishListPC } from "../../api/WishList";
import header1 from "../common/header1";
import { getUserInfo } from "@/api/index.js";
import { getAllWishByListId2,getAllHandleWishId } from "@/api/index";
export default {
  name: "zhiyuanBiao",
  components: { TopHeader, HomeHeader, Footer },
  mounted() {
    // console.log('this.$route.query.voluntary',this.$route.query.voluntary)
    this.initData(this.$route.query.wishNum,this.$route.query.listId);
    // this.getAllData();
    this.setTableColor();
  },
  data() {
    return {
      zhiyuanTableList: [],
      zhiyuanFormatList: [], // 保存传给接口的数据，调整数据格式
      shuzuId:[],
      userInfoList:[],
      majorList:[],
      listId:0,
      physics:0,
      biology:0,
      chemistry:0,
      history:0,
      politics:0,
      geography:0,
      ModifyShow:true
    };
  },
  methods: {
    initData(wishNum,listId){
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        if(this.userInfoList.physics===1){
          this.physics="物理",
          this.majorList.push(this.physics)
        } 
        if(this.userInfoList.chemistry===1){
          this.chemistry="化学",
          this.majorList.push(this.chemistry)
        } 
        if(this.userInfoList.biology===1){
          this.biology="生物",
          this.majorList.push(this.biology)
        }
        if(this.userInfoList.history===1){
          this.history="历史",
          this.majorList.push(this.history)
        }
        if(this.userInfoList.politics===1){
          this.politics="政治",
          this.majorList.push(this.politics)
        }
        if(this.userInfoList.geography===1){
          this.geography="地理",
          this.majorList.push(this.geography)
        }

      })
      if(wishNum==2){
        this.ModifyShow=false;
        getAllWishByListId2({
          listId:listId,
        }).then((res) => {
          if (res.msg === "成功") {
            this.zhiyuanTableList = res.data.wishes;
            console.log('获取的数据是',res) 
            for(let i=0;i<this.zhiyuanTableList.length;i++){
              this.zhiyuanTableList[i].xuhao=i;
              this.zhiyuanTableList[i].enrollNum21='暂无数据'
            }
          }
        });
      }else{
        let params={
          phoneNum:localStorage.getItem("phone")
        }
        getAllHandleWishId(params).then((res) => {
          this.listId=res.data;
          let params={
            listId:this.listId,
          }
          getAllWishByListId2(params).then((res) => {
            if (res.msg === "成功") {
              this.zhiyuanTableList = res.data.wishes;
              console.log('获取的数据是',res) 
              for(let i=0;i<this.zhiyuanTableList.length;i++){
                this.zhiyuanTableList[i].xuhao=i;
                this.zhiyuanTableList[i].enrollNum21='暂无数据'
              }
            }
          });
        })
      }
     

      // getWishListByphoneNum(localStorage.getItem("phone")).then((res) => {
      //   console.log("res数据", res.data);
      //   this.shuzuId= res.data
      //   console.log('iddddddddddddddd',this.shuzuId[0].id);
      //   this.listId=this.shuzuId[0].id
      //   });
    },
    // getAllData() {
    //   console.log("router信息", this.$route.params.zhiyuanTable);
    //   this.zhiyuanTableList = this.$route.params.zhiyuanTable;
    //   window.sessionStorage.setItem(
    //     "zhiyuanbiaodan",
    //     JSON.stringify(this.zhiyuanTableList)
    //   );
    //   console.log(
    //     "本地存储内容",
    //     JSON.parse(sessionStorage.getItem("zhiyuanbiaodan"))
    //   );
    //   for (let i = 0; i < this.zhiyuanTableList.length; ++i) {
    //     this.zhiyuanTableList[i].xuhao = i + 1;
    //   }
    //   console.log("志愿表单取得数据", this.zhiyuanTableList);
    // },
    indexMethod(index) {
      return index + 1;
    },
    gotoEdit() {
      this.$router.push('/SchoolRecommand')
    },
    goUp(index) {
      // 上移
      var that = this;
      if (index > 0) {
        // 获取当前点击的上一条数据
        const upDate = that.zhiyuanTableList[index - 1];
        // 移除上一条数据
        that.zhiyuanTableList.splice(index - 1, 1);
        // 把上一条数据插入当前点击的位置
        that.zhiyuanTableList.splice(index, 0, upDate);
      }
    },
    goDown(index) {
      // 下移
      var that = this;
      const downDate = that.zhiyuanTableList[index + 1];
      that.zhiyuanTableList.splice(index + 1, 1);
      that.zhiyuanTableList.splice(index, 0, downDate);
    },
    
    handleDelete(index) {
      // 删除
      // 设置类似于console类型的功能
      this.$confirm("从志愿表单删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.zhiyuanTableList.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    gotoSave(){
        // 格式化规整数据
        if (this.zhiyuanTableList !== undefined) {
        for (let i = 0; i < this.zhiyuanTableList.length; i++) {
          const map = {};
          map.chance = this.zhiyuanTableList[i].risk || this.zhiyuanTableList[i].chances ;
          map.id = 0;
          map.listId = 0;
          map.rank = i;
          map.wishId = this.zhiyuanTableList[i].id;
          map.wishNum = i;
          this.zhiyuanFormatList.push(map);
        }
      }
      var url = "https://www.zytb.top/NEMT/gk/userPC/changeWishListPC";
      axios({
        method: 'post',
        url:url,
        params:{
        listId:this.listId,
        },
        data:JSON.stringify(this.zhiyuanFormatList),
        headers: {
        "Content-Type": "application/json;charset=UTF-8",
        token: localStorage.getItem("token"),
        },
      }).then((res)=>{
        this.$router.push('/zhiyuan')
      })
    },

    gotoback(){
      this.$router.push('/zhiyuan')
    },

    setTableColor() {
      // 设置表格标题背景颜色
      var table = this.$refs.tables;
      var tr = this.$refs.tr1;
      tr.style.backgroundColor = "#f1f3f4";
    },
    exportExcle() {
      // 导出table为excle
      this.downloadLoading = true;
      import("@/utils/Export2Excel").then((excel) => {
        const tHeader = [
          "序号",
          "录取指标",
          "学校名称",
          "专业名称",
          "选科要求",
          "2020年招生计划",
          "2021年招生计划",
        ];
        const filterVal = [
          "xuhao",
          "chances",
          "schoolName",
          "majorName",
          "selectSubject",
          "enrollNum",
          "enrollNum21"
        ];
        const list = this.zhiyuanTableList;


        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader, // 必填   导出数据的表头
          data, // 必填   导出具体数据
          filename: "智能填报志愿表", // 非必填   导出文件名
          autoWidth: true, // 非必填   单元格是否自动适应宽度
          bookType: "xlsx", // 非必填   导出文件类型
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
    schoolCode(index){
      if(this.zhiyuanTableList[index].SchoolCode==='暂无'){
        return ''
      }else{
        return this.zhiyuanTableList[index].SchoolCode
      }
    },
    selectSubject(index){
      if(this.zhiyuanTableList[index].selectSubject===null){
        return '无选科要求'
      }else{
        return this.zhiyuanTableList[index].selectSubject
      }
    }
  },
};
</script>

<style scoped>
.wrap{
    height: auto;
    min-height: 100%;
    margin: 0 auto;
}
.main{
  padding-bottom: 2.4rem;

}
.footer {
  /* height: 50px; */
  position: relative;
  /* margin-top: 2.4rem; */
  width: 100%;

}

/deep/ .el-table .cell {
  overflow: unset;
}

.content{
  /* margin-top: -100px; */
  /* margin-bottom: -100px; */
}


.content .table_head {
  width: 78%;
  margin: 0 auto;
  margin-top: 0.3rem;
  /* background-color: rgb(68, 68, 67); */
}

.content .table_head .volunteerTable {
  /* background-color: blue; */
  display: block;
  margin-top: .4rem;
  margin-bottom: .2rem;
  font-size: 0.44rem;
  text-align: center;

}

.content .table_head .title{
  /* background-color: pink; */
  font-size: .19rem;
  font-weight: 600;
}

.content .table_head .operation {
  /* background-color: yellow; */
  /* padding-top: 0.2rem; */
  /* padding-left: 1.8rem; */
  float: right;
}

.operation .icon-15 {
  color: #e9302d;
}

.operation .icon-baocun {
  color: #ff9a02;
}

.operation .icon-daochu {
  color: #0c3;
}

.content .tablecontent {
  width: 95%;
  text-align: center;
  margin: 0 auto;
  margin-top:-.3rem;
  overflow: unset !important;
  /* background-color: pink; */
}

.operation .iconfont {
  font-size: 0.2rem;
  margin-right: 0.2rem;
  cursor: pointer;
}

.Btn1 .iconfont {
  font-size: 0.35rem;
  margin-right: 0.2rem;
  cursor: pointer;
}

.Btn1 .icon-top-btn-fill {
  display: block;
  color: #00aff0;
}

.Btn1 .icon-top-btn-fill1 {
  /* margin-top: 20px; */
}
.Btn2 /deep/ .iconfont {
   font-size: .35rem;
}

.Btn1 /deep/ .icon-bottom-btn-fill {
  display: block;
  color: #00aff0;
}

.iconfontSize {
  color: #00aff0;
  margin-top: 0.06rem;
}

.iconShanchu {
  /* color: #00aff0; */
  position: absolute;
  top: -0.15rem;
  left: 0.15rem;
}

.icon-shanchu1 {
  /* color: #e9302d; */
  color: hsla(0, 0%, 61%, 0.856);

}

.iconShanchu2 {
  /* color: #00aff0; */
  position: absolute;
  top: -.35rem;
  left: -.14rem;
}

.iconShanchu3 {
  position: absolute;
  top: -.15rem;
  left: .01rem;
}
table {
  margin: 0.4rem auto;
  width: 15rem;
  border-spacing: 0;
  overflow: hidden;
  font-size: 0.18rem;
}
.emptyPart {
  width: 100%;
  height: 4.5rem;
  margin-top: 1.5rem;
  text-align: center;
}
.bordered {
  border: 1px solid rgb(228, 228, 228);
}
.bordered td,
.bordered th {
  padding: 0.2rem;
  border: 1px solid rgb(228, 228, 228);
  text-align: center;
}

.bordered th {
  border-top: none;
  height: 0.5rem;
}
.bordered td:first-child,
.bordered th:first-child {
  border-left: none;
}

.Btn {
  display: flex;
}
.Btn1 {
  flex: 1;
  position: relative;
  /* background-color: pink; */
}
.Btn2 {
  position: relative;
  flex: 1;
  margin-top: .22rem;
  cursor: pointer;
  /* background-color: pink; */
}
</style>
