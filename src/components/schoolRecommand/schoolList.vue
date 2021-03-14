<template>
  <div>
    <el-tabs v-model="activeName" type="card" >
      <el-tab-pane label="冲（**）" name="first">
        <div class="container">
          <ul>
            <li v-for="(item,index) in this.schoolList" :key="index">
              <el-row>
                <el-col :span="2">
                  <div class="icon">
                    <img :src="item.logo">
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="desc">
                    <div>
                      <span class="name">{{ item.schoolname }}</span>
                      <span class="province">{{ item.province }}</span>
                    </div>
                    <div class="schooltags">
                      <span v-for="(itemtag,index) in item.tags" :key="index">{{ itemtag }}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="chooseBtn">
                    <button type="button" class="chooseMajor" v-show="btnFlag[index]" @click="btnShow(index)">
                      <span >选择意向专业</span>
                      <img class="img1" src="../../assets/drop_down_menu.png"/>
                    </button>
                    <button type="button" class="chooseMajor" v-show="!btnFlag[index]" @click="btnShow(index)">
                      <span>收起专业</span>
                      <img class="img2" src="../../assets/drop_down_menu.png"/>
                    </button>

                  </div>
                </el-col>
              </el-row>
              <div id="major-list" v-show="majorShow[index]">
                <MajorList :schoolname="item.schoolname"></MajorList>
              </div>
            </li>
          </ul>
        </div>
<!--        分页器-->
        <div class="box3">
          <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :total="pageInfo.pagetotal"
            :current-page ='pageInfo.pagenum'
            :page-size='pageInfo.pagesize'
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="稳（**）" name="second">
      </el-tab-pane>
      <el-tab-pane label="保（**）" name="third">保</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MajorList from '../schoolRecommand/majorList'
import {getAllSchool} from '../../api/schoolInfo'
export default {
  name: 'schoolList',
  components: { MajorList },
  mounted () {
    this.getAllSchoolData(this.pageInfo.pagenum)
  },
  data () {
    return {
      activeName: 'first',
      btnFlag: [true, true, true, true, true, true, true, true, true, true], // 控制显示“选择意向专业”“收起专业”
      majorShow: [false, false, false, false, false, false, false, false, false, false], // 控制显示“学校专业”
      schoolList: [],
      pageInfo: {
        pagenum: 0, // 当前页数
        pagesize: 10, // 每页条数
        pagetotal: 100// 总条目数
      },
      schoolnameFlag: ''// 向子组件中传入学校名称

    }
  },
  methods: {
    btnShow (id, school) {
      this.$set(this.btnFlag, id, !this.btnFlag[id])
      this.$set(this.majorShow, id, !this.majorShow[id])
    },
    getAllSchoolData (pagenum) {
      getAllSchool({
        page: pagenum
      }).then(res => {
        if (res.status === 200) {
          this.schoolList = res.data.data
          console.log('this.schoolList1数据', this.schoolList)
        } else {
          console.log('无法取得数据')
        }
      })
    },
    handleCurrentChange (val) { // 分页器执行函数
      let page = val
      console.log(`当前页:`, page--)
      this.getAllSchoolData(page--)
    }

  }

}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-size: 100%;
}
.container ul li{
  overflow: auto;
  margin-top: 1%;
  border-bottom: .001rem dashed #e4e4e4;
}
.container .desc{
  float: left;
  margin-top: .05rem;
  padding-top: .1rem;
  padding-bottom: .2rem;
  padding-left: .4rem;
}
.container .icon {
  float: left;
  margin-top: .05rem;
  margin-left: 1%;
}
.container .icon img {
  width: 1rem;
  height: 1rem;
}
.container .desc .schooltags span{
  display: inline-block;
  margin-right: .25rem;
  margin-top: .1rem;
  padding: .1rem .15rem;
  color: rgb(153, 153, 153);
  font-size: .05rem;
  border: .02rem solid rgb(228, 228, 228);
  border-radius: .15rem;
}
.container .desc .name {
  font-weight: 800;
}
.container .desc .province{
  font-size: .15rem;
  margin-left: .2rem;
}
.container .chooseMajor {
  margin-top: .2rem;
  width: 1.8rem;
  border:.02rem solid #00aff0;
  padding: .1rem;
  border-radius: .08rem;
  font-size: .1rem;
  background-color: transparent;
  outline: none;

}
.container .chooseMajor .img1{
  height: .25rem;
  border-radius: .2rem;
  letter-spacing: 0;
}

.container .chooseMajor .img2{
  height: .25rem;
  border-radius: .2rem;
  letter-spacing: 0;
  transform:rotate(180deg);
}

.box3{
  width: 100%;
  margin-top: 2%;
  text-align: center;
}

/deep/ .pagination {
  text-align: center;
  margin-top: .3rem;
}

.chooseBtn{
  float: right;
}

.container #major-list{
  height: 6rem;
  overflow-y: scroll;
  width: 95%;
  padding-left: 1rem;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
#major-list::-webkit-scrollbar{
  width: .1rem;
  height: .3rem;
  background-color: #F5F5F5;
}

/*定义滚动条轨道 内阴影+圆角*/
#major-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

/*定义滑块 内阴影+圆角*/
#major-list::-webkit-scrollbar-thumb{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
  background-color: #c8c8c8;
}
</style>
