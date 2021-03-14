<template>
  <div class="box">
    <div class="box1">
      <el-tabs v-model="selectTabs" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="心仪的院校" name="favoriteSchool">
          <div class="filter-list">
            <span class="filter-list-title">院校省份</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : active == ''}" @click="selecttag('')">不限</span>
              <span class="tag" v-for="(item,index) in provincesList" :key="item" :class="{active : active == item}" @click="selecttag(item)">{{item}}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校类型</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : typeactive == ''}" @click="selecttypetag('')">不限</span>
              <span class="tag" v-for="item in collegeType" :key="item" :class="{active : typeactive == item}" @click="selecttypetag(item)">{{item}}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校层次</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : levelactive == ''}" @click="selectleveltag('')">不限</span>
              <span class="tag" v-for="item in collegeLevel" :key="item" :class="{active : levelactive == item}" @click="selectleveltag(item)">{{item}}</span>
            </div>
          </div>
          <div  class="filter-list">
            <span class="filter-list-title">院校排序</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : sortactive == ''}" @click="selectsorttag('')">不限</span>
              <span class="tag" v-for="item in collegeSortType" :key="item" :class="{active : sortactive == item}" @click="selectsorttag(item)">{{item}}</span>
            </div>
          </div>
          <div class="customer-college">
            <span class="customer-college-title">自主院校：</span>
            <div class="customer-college-input">
              <el-input
                type="text"
                clearable
                size="small"

                placeholder="请输入院校名称（至少4个字）"
                v-model="textarea1">
              </el-input>
            </div>
          </div>
          <!--          <div class="tiaojian" @click="zhedie">收起筛选条件</div>-->
          <!--          <div class="tiaojian" @click="zhakai">展开更多筛选条件</div>-->
          <!--            <p class="tishixinghao">“*”表示排名来源于一分一段表，否则源于录取数据。</p>-->
        </el-tab-pane>
        <el-tab-pane label="喜欢的专业" name="favoriteMajor">
          <div class="filter-list">
            <span class="filter-list-title">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag"  :class="{active : majoractive == ''}" @click="selectmajortag('')">不限</span>
              <span class="tag" v-for="item in majorType" :key="item.category" :class="{active : majoractive == item.category}" @click="selectmajortag(item.category)">{{item.category}}</span>
            </div>
          </div>
          <div class="filter-list" v-if="majoractive !== ''">
            <span class="filter-list-title" style="opacity: 0;">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : majorsecondactive == ''}" @click="selectmajorsecondtag('')">全部</span>
              <span class="tag" v-for="type in majorSecond" :key="type.name" :class="{active : majorsecondactive == type.name}" @click="selectmajorsecondtag(type.name)">{{type.name}}</span>
            </div>
          </div>
          <div class="customer-college">
            <span class="customer-college-title">我的关注：</span>
            <div class="customer-college-input">
              <el-input
                type="text"
                clearable
                size="small"

                placeholder="请输入专业名称（至少2个字）"
                v-model="textarea1">
              </el-input>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
      <div class="myFilterRecordBlockRow">
          <div class="customer-selected-tags">
            <span class="title" style="line-height: 24px;">您已选择：</span>
            <div class="tags">
              <span class="tag" v-for="(item,index) in collegeselete" :key="index">{{item}}<i class="el-icon-close" style="margin-left:5px"></i></span>
            </div>
          </div>
      </div>
    </div>
   <div class="schoollist">
     <el-row>
       <el-col :span="19">
         <school-list></school-list>
       </el-col>
       <el-col :span="5">
        <div class="fudongFather">
          <div class="fudongBox">
            <div class="head">已填入意向</div>
            <div class="content">
              <img src="../../assets/noData.png" alt="暂无数据">
              <span>查看左侧院校和专业选择<br/>加入意向</span>
            </div>
            <div class="foot">
              <span class="clear">清空</span>
              <button class="nextbtn">下一步</button>
            </div>
          </div>
        </div>
       </el-col>
     </el-row>
   </div>

  </div>
</template>

<script>
import SchoolList from '../schoolRecommand/schoolList'
import {getAllLevel, getAllCollegeType, getAllprovinces, getAllMajorType} from '@/api/index'
import {getAllSchool} from '@/api/schoolInfo.js'
export default {
  name: 'selectType',
  components: { SchoolList },
  data () {
    return {
      active: '',
      typeactive: '',
      levelactive: '',
      sortactive: '',
      majorsecondactive: '',
      majoractive: '',
      majorType: {},
      provincesList: [],
      collegeType: [],
      collegeLevel: [],
      majorSecond: [],
      collegeSortType: ['录取概率', '计划人数', '大学排名'],
      collegeselete:[],
      majorselete:[],
      active:'',
      typeactive:'',
      levelactive:'',
      sortactive:'',
      majorsecondactive:'',
      majoractive:'',
      majorType:{},
      provincesList:[],
      collegeType:[],
      collegeLevel:[],
      majorSecond:[],
      collegeSortType:['录取概率','计划人数','大学排名'],
      checkboxList: ['不限'],
      showAll: false,
      loginStatus: true,
      cjLable: '可冲击20',
      textarea1: '',
      wtLabel: '较稳妥30',
      bdLabel: '可保底90',
      isVip: false,
      yjsPoint: 0,
      dlxueyuan: 0,
      originList: ['不限', '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '山西', '甘肃',
        '青海', '宁夏', '新疆', '台湾', '香港', '澳门'],
      schoolList: ['不限', '综合', '工科', '农业', '林业', '医药', '师范', '语言', '财经', '政法', '体育', '艺术', '民族'],
      cengciList: ['不限', '985', '211', '双一流'],
      xingzhiList: ['不限', '公立大学', '民办高校'],
      schoolboxList: ['不限'],
      cengciboxList: ['不限'],
      xingzhiboxList: ['不限']

    }
  },
  computed: {
    selectTabs () {
      console.log(this.$route.params.tab)
      return this.$route.params.tab || 'favoriteSchool'
    }
  },
  mounted () {
    this.getProvincesinit()
    this.getcollegeType()
    this.getMajortypelist()
    this.getAllSchoolData()
  },
  methods: {
    selecttag (item) {
      this.active = item
      this.collegeselete.push(item)
    },
    selecttypetag (item) {
      this.typeactive = item
       this.collegeselete.push(item)
    },
    selectleveltag (item) {
      this.levelactive = item
       this.collegeselete.push(item)
    },
    selectsorttag (item) {
      this.sortactive = item
       this.collegeselete.push(item)
    },
    selectmajortag (item) {
      this.majoractive = item
      this.majorType.forEach(tag => {
        if (tag.category == item) {
          this.majorSecond = tag.firSubList
        }
      })
    },
    selectmajorsecondtag (item) {
      this.majorsecondactive = item
    },
    getProvincesinit () {
      getAllprovinces().then(res => {
        console.log(res)
        this.provincesList = res.data
      })
    },
    getcollegeType () {
      getAllCollegeType().then(res => {
        this.collegeType = res.data
      })
      getAllLevel().then(response => {
        this.collegeLevel = response.data
      })
    },
    getMajortypelist () {
      getAllMajorType().then(res => {
        console.log('111' + res)
        this.majorType = res.data
        // console.log('1'+this.majorType)
      })
    },
    getAllSchoolData () {
      getAllSchool({
        page: 0
      }).then(res => {
        if (res.status === 200) {
          this.schoolList1 = res.data.data
          console.log('this.schoolList1数据', this.schoolList1)
        } else {
          console.log('无法取得数据')
        }
      })
    },
    handleClick () {},
    zhakai () {
      this.showAll = true
    },
    zhedie () {
      this.showAll = false
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /*background: transparent;*/
}
div {
  display: block;
}

.box{
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}
.box1{
  margin-top: 2%;
  background-color: #f3f5f7;
  font-size: 100%;
}

.schoollist{
  margin-top: .2rem;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #f95e5a;
}
.filter-list {
  display: flex;
  padding: 10px 0;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  align-items: flex-start;
  border-bottom:1px dashed #e6e6e6;
}
.filter-list-title {
  color: #9b9b9b;
  font-size: 14px;
  margin-left: 2vw;
  margin-top:10px;
  text-align: center;
}
.filter-list .filter-list-tags {
   flex: 1;
  -webkit-box-flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
 }
.filter-list .filter-list-tags .tag{
  padding: 2px 6px;
  font-size: 12px;
  margin: 10px 15px;
  color: #212121;
  text-align: center;
  -webkit-box-sizing:border-box;
  border-radius: 4px;
  cursor: pointer;

}
.filter-list .filter-list-tags .tag.active,  .filter-list .filter-list-tags .tag:hover{
  color: #e9302d;
}
.filter-list .filter-list-tags .tag.active {
  border: 1px solid #e9302d;
}

.customer-college {
  padding-top: 20px;
  display: flex;
  -webkit-box-align: center;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif;

  align-items: center;
}
.customer-college .customer-college-title {
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
}
.customer-college .customer-college-title {
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
}
.customer-college .customer-college-input {
  width: 420px;
  float: left !important;
  margin-right: 10px !important;
  position: relative;
  display: inline-block;
}
/*.el-input {*/
/*  position: relative;*/
/*  font-size: 13px;*/

/*}*/

.myFilterRecordBlockRow {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  display: flex;
  height: auto;
  transition: height 2s ease-in-out;
  overflow: hidden;
}
.customer-selected-tags {
  -webkit-box-flex: 1;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
  flex: 1;
  min-height: 42px;
  padding: 6px 12px 6px 16px;
  display: flex;
  overflow: hidden;
}

/*.fudongFather{*/
/*  position: absolute;*/
/*  top: 10px;*/
/*}*/

.box .fudongFather .fudongBox {
  position: fixed;
  top: 10px;
  margin-left: .2rem;
  margin-top: .2rem;
  height: 8.1rem;
  overflow-y: auto;
  outline: 0;
  border:1px solid rgba(0, 0, 0, 0.1);
  border-radius: .3rem;
  width: 430px;
  background-color: #fff;
}

.box .fudongBox .head{
  height: .8rem;
  border-bottom: .01rem solid rgba(0, 0, 0, 0.1);
  padding-left: .3rem;
  font-size: .3rem;
  line-height: .8rem;
}

.box .fudongBox .content {
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 6.3rem;
}

.box .fudongBox .content img{
  margin-top: .8rem;
  margin-left: 1rem;
}

.box .fudongBox .content span{
  display: inline-block;
  text-align: center;
  margin-top: .4rem;
  margin-left: 1rem;
  color: #8a8a8a;
  font-size: .22rem;
}

.box .fudongBox .foot{
  height: .8rem;
  border-top: .01rem solid rgba(0, 0, 0, 0.1);
}

.box .fudongBox .clear{
  color: rgba(0, 0, 0, 0.5);
  font-size: .2rem;
  display: inline-block;
  line-height: .8rem;
  cursor: pointer;
  text-align: center;
  margin-left: .55rem;
  margin-top: .1rem;
}

.box .fudongBox .nextbtn{
  background: #FF961F;
  color: #fff;
  border-radius: .1rem;
  height: .6rem;
  cursor: pointer;
  letter-spacing: 0;
  text-align: center;
  width: 1.6rem;
  border: 0;
  outline: 0;
  margin-left: .6rem;
}

.customer-selected-tags .tags {
  -webkit-box-flex: 1;
  flex:1;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap:wrap;
}
.customer-selected-tags .tags .tag {
  background:#fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 12px;
  color: #757575;
  letter-spacing: 0;
  height:24px;
  line-height:24px;
  margin-right:6px;
  margin-bottom: 6px;
  user-select: none;
  padding: 0 10px;
}
</style>
