<template>
  <div class="box">
    <div class="box1">
      <el-tabs v-model="selectTabs" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="心仪的院校" name="favoriteSchool">
          <div class="filter-list">
            <span class="filter-list-title">院校省份</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : active == ''}" @click="selecttag('')">不限</span>
              <span class="tag" v-for="item in provincesList" :key="item"
                    :class="{active : collegeselete.provinceSelect.includes(item)}"
                    @click="selecttag(item)">{{ item }}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校类型</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : typeactive == ''}" @click="selecttypetag('')">不限</span>
              <span class="tag" v-for="(item,index) in collegeType" :key="index"
                    :class="{active : collegeselete.typeSelect.includes(item) }"
                    @click="selecttypetag(item)">{{ item }}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校层次</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : levelactive == ''}" @click="selectleveltag('')">不限</span>
              <span class="tag" v-for="item in collegeLevel" :key="item"
                    :class="{active :collegeselete.levelSelect.includes(item)}"
                    @click="selectleveltag(item)">{{ item }}</span>
            </div>
          </div>
          <!--          <div  class="filter-list">-->
          <!--            <span class="filter-list-title">院校排序</span>-->
          <!--            <div class="filter-list-tags">-->
          <!--              <span class="tag" :class="{active : sortactive == ''}" @click="selectsorttag('')">不限</span>-->
          <!--              <span class="tag" v-for="item in collegeSortType" :key="item" :class="{active :collegeselete.sortSelect.includes(item)}" @click="selectsorttag(item)">{{item}}</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="customer-college">
            <span class="customer-college-title">自主院校：</span>
            <div class="customer-college-input">
              <el-autocomplete
                style="width: 320px"
                class="inline-input"
                v-model="collegename"
                :fetch-suggestions="querySearch"
                placeholder="请输入院校名称"
                :trigger-on-focus="false"
                @select="handleSelect"
              >
                <template slot-scope="{ item }">
                  <el-row>
                    <el-col :span="22">
                      <span>{{ item.schoolName }}</span>
                    </el-col>
                    <el-col :span="2" style="float: right">
                      <el-button class="text-right" type="text">关注</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-autocomplete>
            </div>
            <div class="customer-filter-drop-wrapper">
              <el-checkbox v-model="checkAll" @change="handleCheckAllChange" style="margin-right: 10px"></el-checkbox>
              <el-dropdown
                trigger="hover"
                :hide-on-click=false
              >
                <span>用户关注({{ followCollege.length }}) <i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-checkbox-group v-model="checkList" v-for="item in followCollege" :key="item.id"  @change="handleCheckedfollowChange">
                    <el-dropdown-item>
                      <el-checkbox :label="item.followName">{{ item.followName }}</el-checkbox>
                    </el-dropdown-item>
                  </el-checkbox-group>
                  <div class="tzy-dropdown-action">
                    <el-button type="primary" size="mini" @click="followSearch">确定</el-button>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="myFilterRecordBlockRow">
            <div class="customer-selected-tags">
              <span class="title" style="line-height: 24px;">您已选择：</span>
              <div class="tags" v-for="select in collegeselete">
                <span class="tag" v-for="(item,index) in select" :key="index">
                  {{ item }}
                  <i class="el-icon-close" style="margin-left:5px" @click="closemyselect(select,item)"></i>
              </span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="喜欢的专业" name="favoriteMajor">
          <div class="filter-list">
            <span class="filter-list-title">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : majoractive == ''}" @click="selectmajortag('')">不限</span>
              <span class="tag" v-for="item in majorType" :key="item.category"
                    :class="{active : majoractive == item.category}"
                    @click="selectmajortag(item.category)">{{ item.category }}</span>
            </div>
          </div>
          <div class="filter-list" v-if="majoractive !== ''">
            <span class="filter-list-title" style="opacity: 0;">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : majorsecondactive == ''}" @click="selectmajorsecondtag('')">全部</span>
              <span class="tag" v-for="type in majorSecond" :key="type.name"
                    :class="{active :majorselect.includes(type.name)}"
                    @click="selectmajorsecondtag(type.name)">{{ type.name }}</span>
            </div>
          </div>
          <div class="customer-college">
            <span class="customer-college-title">我的关注：</span>
            <div class="customer-college-input">
              <el-autocomplete
                style="width: 320px"
                class="inline-input"
                v-model="majorname"
                :fetch-suggestions="querymajorSearch"
                placeholder="请输入专业名称"
                :trigger-on-focus="false"
                @select="handleMajorSelect"
              >
                <template slot-scope="{ item }">
                  <el-row>
                    <el-col :span="22">
                      <span>{{ item.name }}</span>
                    </el-col>
                    <el-col :span="2" style="float: right">
                      <el-button class="text-right" type="text">关注</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-autocomplete>
            </div>
            <div class="customer-filter-drop-wrapper">
              <el-checkbox v-model="checkmajorAll" @change="handlemajorCheckAllChange" style="margin-right: 10px"></el-checkbox>
              <el-dropdown
                trigger="hover"
                :hide-on-click=false
              >
                <span>用户关注({{ followMajor.length }}) <i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                  <el-checkbox-group v-model="checkmajorList" v-for="item in followMajor" :key="item.id"  @change="handlemajorCheckedfollowChange">
                    <el-dropdown-item>
                      <el-checkbox :label="item.followName">{{ item.followName }}</el-checkbox>
                    </el-dropdown-item>
                  </el-checkbox-group>
                  <div class="tzy-dropdown-action">
                    <el-button type="primary" size="mini" @click="followMajorSearch">确定</el-button>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="myFilterRecordBlockRow">
            <div class="customer-selected-tags">
              <span class="title" style="line-height: 24px;">您已选择：</span>
              <div class="tags">
                <span class="tag" v-for="(item,index) in majorselect" :key="index">
                  {{ item }}
                  <i class="el-icon-close" style="margin-left:5px" @click="closemajorselect(index)"></i>
              </span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="schoollist">
      <el-row>
        <el-col :span="19">
          <school-list :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo"></school-list>
        </el-col>
        <el-col :span="5">
          <div class="auto_fixed" :class="auto_fixed">
            <div class="fudongBox">
              <div class="head">已填入意向</div>
              <div class="content">
                <div class="noformdata" v-show="showvolformdata">
                  <img src="../../assets/noData.png" alt="暂无数据">
                  <span>查看左侧院校和专业选择<br/>加入意向</span>
                </div>
                <div class="formdata" v-show="!showvolformdata">
                  <div v-for="(item,index) in volForm" :key="index" class="list">
                    <div id="code">
                      <div class="num">{{ index + 1 }}</div>
                    </div>
                    <div id="name">
                      <span class="school">{{ item.schoolName }}</span><br/>
                      <span class="major">{{ item.majorName }}</span>
                    </div>
                    <div class="deleteZhiyuan">
                      <i class="iconfont icon-shanchu1" @click="handleDeleteInfo"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot">
                <span class="clear" @click="clearFormData">清空</span>
                <button class="nextbtn" @click="clickToZhiyuanBiao">下一步</button>
              </div>
            </div>
          </div>
          <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SchoolList from '../schoolRecommand/schoolList'
import {
  getAllLevel,
  getAllCollegeType,
  getAllprovinces,
  getsearchSchool,
  getsearchMajor,
  followSchool,
  followMajor,
  getAllFollowSchool,
  getAllFollowMajor, findMajorFollowOrNot,
  findSchoolFollowOrNot,
  getAllMajorType
} from '@/api/index'

export default {
  name: 'selectType',
  components: {SchoolList},
  data () {
    return {
      checkList: [],
      checkmajorList: [],
      followCollege: [],
      followMajor: [],
      checkAll: false,
      checkmajorAll: false,
      isIndeterminate: true,
      phoneNum: '18551452231',
      majorname: '',
      collegename: '',
      auto_fixed: {
        fixed: false
      },
      collegeselete: {
        provinceSelect: [],
        typeSelect: [],
        levelSelect: [],
        // sortSelect:[],
        sortSelect: [],
        followSelect: [],
        followMajorSelect: []
      },
      majorselect: [],
      active: '',
      scroll: '',
      typeactive: '',
      levelactive: '',
      // sortactive: '',
      majorsecondactive: '',
      majoractive: '',
      majorType: {},
      provincesList: [],
      collegeType: [],
      collegeLevel: [],
      majorSecond: [],
      loginStatus: true,
      isVip: false,
      volForm: [], // 高考志愿表单
      showvolformdata: true, // 高考志愿表单是否显示添加志愿（true未添加 false添加）
      schooladvice: [],
      majoradvice: []
    }
  },
  computed: {
    selectTabs: {
      get () {
        return this.$route.params.tab || 'favoriteSchool'
      },
      set () {
      }
    }
  },
  mounted () {
    this.init()
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
    this.getProvincesinit()
    this.getcollegeType()
    this.getMajortypelist()
  },
  methods: {
    init () {
      getAllFollowSchool({
        phoneNum: this.phoneNum
      }).then(res => {
        this.followCollege = res.data
      })
      getAllFollowMajor({
        phoneNum: this.phoneNum
      }).then(res => {
        this.followMajor = res.data
      })
    },

    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let height = 450
      this.auto_fixed = {
        auto_fixed: true,
        fixed: scrolled >= height
      }
    },
    reset () {
      this.collegeselete = {
        provinceSelect: [],
        typeSelect: [],
        levelSelect: []
        // sortSelect:[],
      }
      this.active = '',
      this.typeactive = '',
      this.levelactive = '',
      this.majorsecondactive = '',
      this.majoractive = ''
    },
    closemajorselect (index) {
      this.majorselect.splice(index, 1)
      if (this.majorselect.length == 0) {
        this.majorsecondactive = ''
      }
    },
    closemyselect (parent, name) {
      // console.log('guanbiqian', parent, name)
      for (let i = 0; i < parent.length; i++) {
        if (parent[i] == name) {
          parent.splice(i, 1)
        }
      }
      if (parent.length == 0) {
        switch (parent) {
          case this.collegeselete.provinceSelect:this.active = ''; break
          case this.collegeselete.levelSelect:this.levelactive = ''; break
          case this.collegeselete.typeSelect:this.typeactive = ''; break
        }
      }
      // console.log('after', parent, name)
    },
    selecttag (item) {
      this.active = item
      if (item == '') {
        this.collegeselete.provinceSelect = []
      } else if (!this.collegeselete.provinceSelect.includes(item)) {
        this.collegeselete.provinceSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.provinceSelect.length; i++) {
          if (this.collegeselete.provinceSelect[i] == item) {
            this.collegeselete.provinceSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.provinceSelect.length == 0) {
        this.active = ''
      }
    },
    selecttypetag (item) {
      this.typeactive = item
      if (item == '') {
        this.collegeselete.typeSelect = []
      } else if (!this.collegeselete.typeSelect.includes(item)) {
        this.collegeselete.typeSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.typeSelect.length; i++) {
          if (this.collegeselete.typeSelect[i] == item) {
            this.collegeselete.typeSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.typeSelect.length == 0) {
        this.typeactive = ''
      }
    },
    selectleveltag (item) {
      this.levelactive = item
      if (item == '') {
        this.collegeselete.levelSelect = []
      } else if (!this.collegeselete.levelSelect.includes(item)) {
        this.collegeselete.levelSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.levelSelect.length; i++) {
          if (this.collegeselete.levelSelect[i] == item) {
            this.collegeselete.levelSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.levelSelect.length == 0) {
        this.levelactive = ''
      }
    },
    selectsorttag (item) {
      this.sortactive = item
      if (item == '') {
        this.collegeselete.sortSelect = []
      } else if (!this.collegeselete.sortSelect.includes(item)) {
        this.collegeselete.sortSelect.push(item)
      }
    },
    // selectsorttag (item) {
    //   this.sortactive = item
    //   if(item == ''){
    //     this.collegeselete.sortSelect =[]
    //   }else if(!this.collegeselete.sortSelect.includes(item)){
    //     this.collegeselete.sortSelect.push(item)
    //   }
    // },
    selectmajortag (item) {
      this.majoractive = item
      if (item == '') {
        this.majorselect = []
      }
      this.majorType.forEach(tag => {
        if (tag.category == item) {
          this.majorSecond = tag.firSubList
        }
      })
    },
    selectmajorsecondtag (item) {
      this.majorsecondactive = item
      if (item == '') {
        this.majorselect = []
      } else if (!this.majorselect.includes(item)) {
        this.majorselect.push(item)
      } else {
        for (let i = 0; i < this.majorselect.length; i++) {
          if (this.majorselect[i] == item) {
            this.majorselect.splice(i, 1)
          }
        }
      }
      if (this.majorselect.length == 0) {
        this.majorsecondactive = ''
      }
    },
    getProvincesinit () {
      getAllprovinces().then(res => {
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
        this.majorType = res.data
      })
    },
    handleClick () {},
    getAddFormInfo (message) {
      // 父子组件传值，父组件接收信息函数
      console.log('父子组件传值', message)
      // for(let i=0;i<this.volForm.length;++i){
      //   if(this.volForm[i].id === message.id){//数据已经存在，按钮变灰
      //
      //   }
      // }
      // let temp = message.split(" ")
      this.volForm.push(message)
      // console.log('let temp =', temp)
      console.log('高考志愿表', this.volForm)
      this.showvolformdata = false
    },
    clearFormData () { // 清空志愿表单
      this.$confirm('此操作将全部清空已填入意向且无法恢复, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.showvolformdata = true
        this.volForm = []
        this.$forceUpdate()
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })

      // this.showvolformdata = true
      // this.volForm = []
      // this.$forceUpdate()
    },
    clickToZhiyuanBiao () { // 下一步按钮，转向新的界面
      this.$router.push({
        name: 'zhiyuanBiao',
        params: {
          zhiyuanTable: this.volForm
        }
      })
    },
    // 测试
    querySearch (queryString, cb) {
      console.log('ceshi', queryString, cb)
      getsearchSchool({
        schoolName: queryString
      }).then(res => {
        this.schooladvice = res.data
        cb(this.schooladvice)
      })
    },
    querymajorSearch (queryString, cb) {
      console.log('ceshi', queryString, cb)
      getsearchMajor({
        majorName: queryString
      }).then(res => {
        this.majoradvice = res.data
        cb(this.majoradvice)
      })
    },
    handleMajorSelect (item) {
      console.log(item)
      followMajor({
        majorName: item.name,
        phoneNum: this.phoneNum
      }).then(res => {
        if (res.code == 0) {
          this.msgSuccess('关注成功')
          this.init()
        } else if (res.code == 617) {
          this.msgWarning('用户已关注')
        }
      })
    },
    // handleCheckAllChange (val) {
    //   this.checkedCities = val ? cityOptions : []
    //   this.isIndeterminate = false
    // },
    handleSelect (item) {
      console.log(item)
      followSchool({
        phoneNum: this.phoneNum,
        schoolName: item.schoolName
      }).then(res => {
        if (res.code == 0) {
          this.msgSuccess('关注成功')
        } else if (res.code == 617) {
          this.msgWarning('用户已关注')
        }
      })
      this.init()
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedfollowChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.followCollege.length
    },
    handlemajorCheckAllChange (val) {
      if (val) {
        this.followMajor.forEach(item => {
          this.checkmajorList.push(item.followName)
        })
      } else {
        this.checkmajorList = []
      }
    },
    handlemajorCheckedfollowChange(value) {
      let checkedCount = value.length
      this.checkmajorAll = checkedCount === this.followMajor.length
    },

    followSearch(){
      this.collegeselete.followSelect = this.checkList;
    },
    followMajorSearch(){
      this.majorselect.push.apply(this.majorselect,this.checkmajorList)
    },
    handleDeleteInfo (index) { // 志愿表单删除
      this.volForm.splice(index, 1)
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
.box {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

.box1 {
  margin-top: 2%;
  background-color: #f3f5f7;
  font-size: 100%;
}

.schoollist {
  margin-top: .2rem;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  /*color: #f95e5a;*/
  color: #e5623f;
}

.filter-list {
  display: flex;
  padding: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  align-items: flex-start;
  border-bottom: 1px dashed #e6e6e6;
}

.filter-list-title {
  color: #9b9b9b;
  font-size: 14px;
  margin-left: 2vw;
  margin-top: 10px;
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
.filter-list .filter-list-tags .tag {
  padding: 2px 6px;
  font-size: 12px;
  margin: 10px 15px;
  color: #212121;
  text-align: center;
  -webkit-box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
}

.filter-list .filter-list-tags .tag.active, .filter-list .filter-list-tags .tag:hover {
  color: #e9302d;
}

.filter-list .filter-list-tags .tag.active {
  border: 1px solid #e9302d;
}

.customer-college {
  padding-top: 20px;
  display: flex;
  -webkit-box-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;

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
  width: 330px;
  float: left !important;
  margin-right: 10px !important;
  display: flex;
  /*flex: 1;*/
  /*position: relative;*/
  /*display: inline-block;*/
}

.customer-filter-drop-wrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.dropdown {
  height: 216px;
  overflow: auto;
  overflow-x: hidden;
  width: 216px;
  transform-origin: center top;
  z-index: 2134;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.tzy-dropdown-action {
  padding: 10px 10px 0 0;
  float: right;
}

.text-right {
  /*float: right;*/
  text-align: center;
}

.myFilterRecordBlockRow {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  margin-top: 15px;

  display: flex;
  height: auto;
  transition: height 2s ease-in-out;
  overflow: hidden;
}

.customer-selected-tags {
  -webkit-box-flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
  flex: 1;
  min-height: 42px;
  padding: 6px 12px 6px 16px;
  display: flex;
  overflow: hidden;
}

.customer-selected-tags .title {
  font-size: 12px;
  color: #9b9b9b;
  line-height: 24px;
}

.box .fudongBox {
  position: absolute;
  top: 10px;
  margin-left: .2rem;
  margin-top: .2rem;
  height: 8.1rem;
  /*overflow-y: auto;*/
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .3rem;
  width: 4rem;
  background-color: #fff;
}

.box .fudongBox .head {
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
  overflow-y: scroll;
}

.box .fudongBox .content img {
  margin-top: .8rem;
  margin-left: .7rem;
}

.box .fudongBox .content .noformdata span {
  display: block;
  text-align: center;
  margin-top: .4rem;
  margin-left: .3rem;
  color: #8a8a8a;
  font-size: .22rem;
}

.box .fudongBox .content .formdata .list {
  width: 100%;
  /*display: -webkit-flex; !* Safari *!*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /*换行，第一行在下方。*/
  word-break: break-word;
  height: .8rem;
  margin-bottom: .3rem;
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.box .fudongBox .content .formdata #code {
  flex: 1;
  height: 100%;
}

.box .fudongBox .content .formdata #code .num {
  margin: 0 auto;
  background-color: #00aff0;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  /*border-radius: 50%;*/
  width: 35%;
  height: 35%;
}
.box .fudongBox .content .formdata #name{
  flex: 3;
  height:100%;
}
.box .fudongBox .content .formdata #name .school {
  color: rgba(0, 0, 0, 0.8);
  font-size: .25rem;
  font-weight: 550;
}

.box .fudongBox .content .formdata #name .major{
  color: rgba(0, 0, 0, 0.5);
  font-size: .23rem;
  font-weight: 400;
  padding-top: .05rem;
}
.box .fudongBox .content .formdata #option{
  flex: 1;
  height:100%;
}

.box .fudongBox .foot {
  height: .8rem;
  border-top: .01rem solid rgba(0, 0, 0, 0.1);
}

.box .fudongBox .clear {
  color: rgba(0, 0, 0, 0.5);
  font-size: .2rem;
  display: inline-block;
  line-height: .8rem;
  cursor: pointer;
  text-align: center;
  margin-left: .55rem;
  margin-top: .1rem;
}

.box .fudongBox .nextbtn {
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
  flex: 0 1 auto;
  /*flex:1;*/
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
}

.customer-selected-tags .tags .tag {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 12px;
  color: #757575;
  letter-spacing: 0;
  height: 26px;
  line-height: 26px;
  margin-right: 6px;
  margin-bottom: 6px;
  user-select: none;
  padding: 0 10px;
}

.auto_fixed {

}

.deleteZhiyuan {
  margin-right: .2rem;
  padding-top: 3%;
}
.fixed {
  position: fixed;
  top: 0rem;
}
</style>
