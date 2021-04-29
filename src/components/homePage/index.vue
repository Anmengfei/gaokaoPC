<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="fourRow">
      <div>
        <el-carousel  class="carousel-img" height="4rem">
          <el-carousel-item
            v-for="(item, index) in schna"
            :key="index"
            @click.native="itemClick(item, index)"
          >
            <img class="image-item" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="zhiyuan" v-if="flag_state == false">
        <div class="content">
          <div class="header">模拟高考志愿填报</div>
          <el-tag class="denglu-label" type="danger">
            登录后，推荐适合你的院校
          </el-tag>
          <div class="form-item">
            <div class="gaokaozongfen">
              <span class="span1">高考总分：</span>
              <input type="text" v-model="score"></input>
            </div>
            <div class="quanshengpaiming">
              <span class="span1" v-model="level">全省排名：</span>
              <input type="text"></input>
            </div>
            <div class="button">
              <el-button class="btn" type="primary" round  @click="login">立即登录</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="zhiyuan" v-else>
        <div class="content">
          <div class="header">模拟高考志愿填报</div>
          <div class="form-item2">
            <div>
              <div class="editScore" @click="dialogVisible1 = true">
                <i class="el-icon-edit"></i><span>修改成绩</span>
              </div>
              <div class="eldialog-parent">
                <el-dialog
                  :visible.sync="dialogVisible1"
                  width="34%"
                  :modal="false"
                >
                  <div class="gaokaotianbao">
                    <EditScore></EditScore>
                  </div>
                </el-dialog>
              </div>

              <div>
                <div class="score-item">
                  <span class="label">高考省份</span>&nbsp;&nbsp;
                  <span class="value">{{ userInfo.examProvince }}</span>
                </div>
                <div class="score-item">
                  <span class="label">科目类型</span>&nbsp;&nbsp;
                  <span class="value">{{subject[0]+` \\ `+subject[1]+` \\ `+subject[2]}}</span>
                </div>
                <div class="score-item">
                  <span class="label">高考总分</span>&nbsp;&nbsp;
                  <span class="value">{{ userInfo.score }}</span>
                </div>
                <div class="score-item">
                  <span class="label">高考排名</span>&nbsp;&nbsp;
                  <span class="value">{{ userInfo.rank }}</span>
                </div>
              </div>
            </div>
            <div class="tuijianButton">
              <div class="tuijianbtn">
                <el-button type="primary" style="width: 4rem" @click="gotoAllschool"  round>智能填报</el-button>
                <span style="font-size: 10px;color: red">* 一键填报请下载智禾考哪儿手机APP</span>
                <span style="font-size: 10px;color: red">或者关注金榜填报通微信公众号使用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-header">
      <div class="fiveRow">
        <div class="fiveRow-header">
          <span class="shuxian"></span>
          <div class="shuxian-l">院校推荐</div>
          <div v-if="!flag_state">
            <div class="btn">
              <a @click="login">登录</a>
            </div>
            <div class="shuxian-r">推荐更合适你的院校</div>
          </div>
          <div v-else>
            <div class="shuxian-r">
              <span>{{ userInfo.examProvince }}</span>&nbsp;&nbsp;
              <span>{{
                subject[0] + ` \\ ` + subject[1] + ` \\ ` + subject[2]
              }}</span
              >&nbsp;&nbsp;
              <span>{{ userInfo.score }}</span>
            </div>
          </div>
        </div>
        <div class="fiveRow-box">
          <div class="box-content" v-if="loginStatus !== false">
            <a href="#">登录添加成绩信息</a><br />
            <h>大数据+AI智能准确推荐合适你的院校</h>
          </div>
          <div v-else>
            <ul class="default-list">
              <li
                class="commend-item"
                v-for="(item, index) in recommandschoolList"
                :key="index"
                @click="selectSchoolItem(index, item)"
              >
                <img :src="item.logo" class="commend-item-image" />
                <h4 class="commend-item-title textOverflow">
                  {{ item.schoolName }}
                </h4>
                <p class="commend-item-code">招生代码 {{ item.schoolCode }}</p>
                <p class="commend-item-des">{{ item.schoolProvince }}</p>
              </li>
              <li class="commend-item" @click="gotoAllschool">
                <i class="el-icon-arrow-right moreIcn"></i>
                <h4 class="commend-item-title more">查看更多</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sixRow">
        <div class="sixRow-header">
          <span class="shuxian"></span>
          <div class="shuxian-l">大家都在关注</div>
          <a class="lookMore" href="#" @click="openMore()">查看更多>></a>
        </div>
        <div class="sixRow-box">
          <div class="wap">
            <div class="skeleton">
              <ul class="list">
                <li
                  class="item"
                  v-for="(item, index) in threeList"
                  :key="index"
                  @click="selectZixun(item, index)"
                >
                  <div class="image">
                    <img :src="item.cover" class="zixunImage" />
                  </div>
                  <div class="content">
                    <el-row>
                      <el-col :span="12"
                        ><div class="titlehover">
                          <span class="title">{{ item.title }}</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div>
                          <span class="time">{{ item.date }}</span>
                        </div>
                      </el-col>
                    </el-row>
                    <div class="news" font-size="14">
                      <i class="el-icon-view"></i>
                      <span>{{ item.readNum }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="sevenRow">
        <div class="sevenRow-header">
          <span class="shuxian"></span>
          <div class="shuxian-l">大家都在学</div>
          <a href="#" @click="openReport()">查看更多>></a>
        </div>
        <div class="sevenRow-box">
          <div class="video1">
            <div class="video1-header">
              <ul class="list">
                <li
                  class="item"
                  v-for="(item, index) in threeVideoList"
                  :key="index"
                  @click="showVideo(item, index)"
                >
                  <div>
                    <img :src="item.cover" class="image" />
                    <img src="../../assets/play_05.png" class="play-btn" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <video
        :src="videoUrl"
        controls="controls"
        style="width: 100%;  height: 100%"
      ></video>
    </el-dialog>

    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import EditScore from '@/components/common/editScore'
import { getUserInfo } from '@/api/user'
import {
  getAllIsLearning,
  getFitSchool,
  getFollowingList
} from '@/api/index.js'

export default {
  name: 'index',
  components: { TopHeader, HomeHeader, Footer, EditScore },
  data () {
    return {
      score: '',
      level: '',
      dialogVisible1: false,
      videoUrl: '',
      scoreDialog: false,
      recommandschoolList: [],
      zixunList: [],
      threeList: [],
      videoList: [],
      threeVideoList: [],
      form: {
        name: ''
      },
      subject: [],
      userInfo: this.$store.state.userinfo == null ? '' : this.$store.state.userinfo,
      dialogVisible: false,
      loginStatus: false,
      value1: '5',
      navBarFixed: false,
      bannerH: '',
      page: 1,
      size: 100,
      list: [],
      infoState: false,
      flag_class: '未登录',
      flag_state: '',

      selectProvince: '',
      provincesList: ['北京', '上海', '广州', '深圳'],
      searchValue: '',
      schna: [
        "https://www.zytb.top/NEMT/gk/static/pc_img/lunbo01.png",
        "https://www.zytb.top/NEMT/gk/static/pc_img/lunbo03.png",
      ],
      phoneNum:''
    };
  },
  // beforeCreate() {
  //   document.querySelector("body").setAttribute("style", "background:#f3f5f7;");
  // },

  created () {
    if (localStorage.getItem('token') != null && localStorage.getItem('token22') != null) {
      this.flag_state = true
      getUserInfo().then((res) => {
        this.userInfo = res.data
        this.$store.dispatch('resUserInfo', res.data).then(() => {
          this.userInfo.biology == 1 ? this.subject.push('生物') : ''
          this.userInfo.chemistry == 1 ? this.subject.push('化学') : ''
          this.userInfo.geography == 1 ? this.subject.push('地理') : ''
          this.userInfo.history == 1 ? this.subject.push('历史') : ''
          this.userInfo.physics == 1 ? this.subject.push('物理') : ''
          this.userInfo.politics == 1 ? this.subject.push('政治') : ''
        })
      })
    } else {
      this.flag_state = false
    }
  },
  computed: {
    flag () {
      return this.$store.state.showUserInfo
    },
    username () {
      if (localStorage.getItem('name') === null) {
        return 'ceshi'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted () {
    // if(localStorage.getItem("token") != null){
    //   this.userInfo.biology == 1 ? this.subject.push("生物") : "";
    //   this.userInfo.chemistry == 1 ? this.subject.push("化学") : "";
    //   this.userInfo.geography == 1 ? this.subject.push("地理") : "";
    //   this.userInfo.history == 1 ? this.subject.push("历史") : "";
    //   this.userInfo.physics == 1 ? this.subject.push("物理") : "";
    //   this.userInfo.politics == 1 ? this.subject.push("政治") : "";
    //   this.getuserInfo()
    // }
    // this.initData()
    // if (localStorage.getItem('token') != null || localStorage.getItem('token22') != null) {
    this.initData()
    window.addEventListener('scroll', this.watchScroll)
    this.setBannerH()
    window.addEventListener(
      'resize',
      () => {
        this.setBannerH()
      },
      false
    )
    this.getInfo()
    // } else {

    // }
  },

  methods: {
    initData () {
      let _this = this
      getFollowingList({
        examProvince: this.userInfo.examProvince !== null ? this.userInfo.examProvince : '山东省'
      }
      ).then(function (response) {
        console.log(response.data)
        _this.zixunList = response.data
        console.log('新接口测试一下文章', _this.zixunList)
        // console.log(_this.zixunList);
        // 使用push不用等号
        for (var i = 0; i < 3; i++) {
          _this.threeList.push(_this.zixunList[i])
        }
        // this.$set(this.threeList, _this.threeList);
        // console.log(_this.threeList);
      })
      getAllIsLearning().then(function (response) {
        // console.log(response.data);
        _this.videoList = response.data
        // console.log(_this.videoList);
        // 使用push不用等号
        for (var i = 0; i < 3; i++) {
          _this.threeVideoList.push(_this.videoList[i])
        }
        // this.$set(this.threeList, _this.threeList);
        // console.log(_this.threeVideoList);
      });
      getFitSchool({
          type: 0,
          user: localStorage.getItem("phone"),
        }).then((res) => {
          this.recommandschoolList = res.data;
        });
    },

    itemClick () {},
    gotoAllschool () {
      if (localStorage.getItem('token') != null) {
        this.$router.push({
          name: 'SchoolRecommand',
          params: { tab: 'favoriteSchool' }
        })
      } else {
        this.msgWarning('请先登录！')
      }
    },
    // getuserInfo () {
    //   getUserInfo().then((res) => {
    //     this.userInfo = res.data
    //     console.log('获取学校的各种信息', this.userInfo)
    //     this.userInfo.biology == 1 ? this.subject.push('生物') : ''
    //     this.userInfo.chemistry == 1 ? this.subject.push('化学') : ''
    //     this.userInfo.geography == 1 ? this.subject.push('地理') : ''
    //     this.userInfo.history == 1 ? this.subject.push('历史') : ''
    //     this.userInfo.physics == 1 ? this.subject.push('物理') : ''
    //     this.userInfo.politics == 1 ? this.subject.push('政治') : ''
    //   })
    // },
    modifyScore () {
      // console.log("123");
      this.scoreDialog = true
    },
    showVideo (item, index) {
      this.videoUrl = item.address
      this.dialogVisible = true
    },
    // 关闭视频
    handleClose (done) {
      this.videoUrl = ''
      this.dialogVisible = false
    },
    // handleClose1(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});

    // },
    selectZixun (item, index) {
      const { href } = this.$router.resolve({
        name: 'Article',
        query: {
          article: item.id
        }
      })
      window.open(href, '_blank')
    },
    openMore () {
      const { href } = this.$router.resolve({
        name: 'Guanzhu',
        query: {
          examProvince: this.userInfo.examProvince !== null ? this.userInfo.examProvince : '山东省'
        }
      })
      window.open(href, '_blank')
    },
    openReport () {
      const { href } = this.$router.resolve({
        name: 'VideoList'
        // query: {
        //   article: item.id,
        // },
      })
      window.open(href, '_blank')
    },
    // selectZixun(item, index) {
    //   const { href } = this.$router.resolve({
    //     name: "Article",
    //     query: {
    //       article: item.id,
    //     },
    //   });
    //   window.open(href, "_blank");
    // },
    selectSchoolItem (index, item) {
      // console.log("index", index);
      // this.$router.push("/SchoolInfo");
      // const { href } = this.$router.resolve({
      //   name: "SchoolInfo",
      //   query: {
      //     SchoolName: item.schoolName,
      //   },
      // });
      // window.open(href, "_blank");
      this.$router.push({
        path: '/SchoolInfo',
        query: {
          SchoolName: item.schoolName
        }
      })
    },
    regist () {},
    setBannerH () {
      this.bannerH = document.body.clientWidth / 4
    },
    watchScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 49) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },

    getInfo () {
      getFitSchool({
        type: 0,
        user: this.userInfo.phoneNum
      }).then((res) => {
        this.recommandschoolList = res.data
      })
    },
    login () {
      this.$store.dispatch('getShowLogin', true)
    },
    openInfo () {
      this.$confirm('请尽快完善个人资料', '提示信息', {
        confirmButtonText: '立即前往',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$router.push('/userSetting/personalInformation')
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.app_container {
  background-color: #f3f5f7;
  width: 100%;
}

.mt20 {
  margin-top: 20px;
}

.thirdRow {
  background-color: #e5623f;
  width: 100%;
  height: 70px;
}

.knl-nav {
  float: left;
  width: 200px;
  height: 70px;
  color: #fff;
  font-size: 50px;
  text-align: center;
  line-height: 70px;
  margin-left: 20px;
}

.box-nav {
  float: left;
  width: 1500px;
  height: 70px;
}

li {
  list-style: none;
}

.el-select-dropdown__list li {
  list-style: none;
  padding-left: 30px;
}

li a {
  display: block;
  height: 42px;
  padding: 0 50px;
  text-align: center;
  font-size: 23px;
  line-height: 70px;
  text-decoration: none;
  color: #fff;
}

.loginInfo {
  float: right;
  width: 200px;
  height: 70px;
  font-size: 22px;
  color: #fff;
  text-align: center;
  line-height: 70px;
}

/*第四行  高考志愿百科*/
.fourRow {
  width: 75%;
  margin: 0 auto;
  position: relative;
}

.zhiyuan {
  z-index: 2;
  width: 5rem;
  height: 3.3rem;
  position: absolute;
  top: 7%;
  right: 4%;
  border-radius: .1rem;
  background-color: rgba(255, 255, 255, 0.9);
}

.zhiyuan .content {
  width: 100%;
  /* height: 100%; */
  margin: 0 auto;
  padding: .05rem .30rem .05rem .30rem;
}

.content .header {
  font-size: .24rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin-top: .2rem;
}

.denglu-label {
  margin-top: 20px;
  border-radius: 15px;
  width: 100%;
  height: 35px;
  text-align: center;
  font-size: 16px;
}

.form-style {
  width: 100%;
}

.form-item-style {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
}

.input-style >>> .el-input__inner {
  border: 0;
}
.editScore {
  position: relative;
  color: #00a4ff;
  float: right;
  z-index: 999;
  cursor: pointer;
}
.score-item {
  margin-bottom: 10px;
  position: relative;
  height: 20px;
  z-index: 900;
}

.score-item .label {
  margin-left: 10px;
  display: inline-block;
  width: 100px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  text-align: left;
}

.score-item .value {
  margin-left: 10px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
}

.form-item-style {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
}

.input-style >>> .el-input__inner {
  border: 0;
}

.form-item2 {
  margin-top: 10px;
  padding: 15px 20px;
  /*background-color: rgba(0, 175, 240, 0.05);*/
  background-color: rgba(242, 251, 254, 1);
  border-radius: 10px;
}

.editScore {
  position: relative;
  color: #00a4ff;
  float: right;
  z-index: 999;
}

.score-item {
  margin-bottom: 10px;
  position: relative;
  height: 20px;
  z-index: 900;
}

.score-item .label {
  margin-left: 10px;
  display: inline-block;
  width: 100px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  text-align: left;
}

.score-item .value {
  margin-left: 10px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
}

.gaokaozongfen {
  margin-top: 20px;
  width: 100%;
  height: 45px;
  /* background-color: orange; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.span1 {
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  line-height: 45px;
  padding-left: 20px;
}

.span2 {
  color: #0000004d;
  font-size: 14px;
  line-height: 45px;
  padding-left: 35px;
}

.quanshengpaiming {
  margin-top: 20px;
  width: 100%;
  height: 45px;
  /* background-color: orange; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.quanshengpaiming .span1 {
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  line-height: 45px;
  padding-left: 20px;
}

.quanshengpaiming .span2 {
  color: #0000004d;
  font-size: 14px;
  line-height: 45px;
  padding-left: 35px;
}

.button .btn {
  margin-top: 20px;
  width: 340px;
  height: 45px;
}

.tuijianButton .btn {
  margin-top: 20px;
  width: 340px;
  height: 45px;
}

.viewTable {
  display: block;
  float: left;
  margin-left: 45%;
  color: #00a4ff;
  margin-top: 10px;
  font-size: 13px;
}
.box-header {
  width: 1400px;
  margin: 0 auto;
}
.fiveRow {
  height: 3.4rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 0.24rem;
  /* background-color: #00a4ff; */
}

.fiveRow-header {
  height: 0.5rem;
  width: 100%;
  background-color: #f3f5f7;
}

.fiveRow-box {
  margin-top: 0.15rem;
  height: 250px;
  width: 100%;
  background-color: #fff;
  /* background-color: pink; */
  border-radius: 15px;
}

.shuxian {
  float: left;
  top: 2px;
  display: inline-block;
  width: 6px;
  height: 35px;
  margin-top: 3px;
  margin-right: 16px;
  border-radius: 3px;
  background-color: #e5623f;
}

.shuxian-l {
  float: left;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-left: 40px;
}

.btn {
  float: left;
  width: 90px;
  height: 40px;
  border: 2px solid #00a4ff;
  /* border: 2px solid #e5623f; */
  border-radius: 15px;
  margin-left: 40px;
}

.btn a {
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  color: #00a4ff;
  text-decoration: none;
}

.shuxian-r {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 15px;
}

.shuxian-r span {
  color: rgba(0, 0, 0, 0.5);
}

.box-content {
  width: 400px;
  height: 80px;
  background-color: #fff;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.box-content a {
  color: #00aff0;
}

.sixRow {
  height: 520px;
  width: 100%;
  margin: 0 auto;
}

.sixRow-header {
  height: 0.5rem;
  width: 100%;
  background-color: #f3f5f7;
}
.sixRow-box {
  margin-top: 0.15rem;
  /* height: 660px; */
  width: 100%;
  position: relative;
  border-radius: 15px;
}

.sixRow-header .shuxian {
  float: left;
  top: 2px;
  display: inline-block;
  width: 6px;
  height: 35px;
  margin-top: 3px;
  margin-right: 16px;
  border-radius: 3px;
  background-color: #e5623f;
}

.sixRow-header .shuxian-l {
  float: left;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-left: 40px;
}

.sixRow-header a {
  display: block;
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 10px;
  font-weight: bold;
  color: black;
}

.word h6 {
  margin-top: 15px;
}

.word1 h6 {
  margin-top: 15px;
}

.word2 h6 {
  margin-top: 15px;
}

.sevenRow {
  /* height: 350px; */
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
}

.sevenRow-header {
  margin-top: 0.2rem;
  height: 0.5rem;
  width: 100%;
  background-color: #f3f5f7;
}

.sevenRow-box {
  margin-top: 0.15rem;
  height: 250px;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
}

.sevenRow-header .shuxian {
  float: left;
  top: 2px;
  display: inline-block;
  width: 6px;
  height: 35px;
  margin-top: 3px;
  margin-right: 16px;
  border-radius: 3px;
  background-color: ##e5623f;
}

.sevenRow-header .shuxian-l {
  float: left;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-left: 40px;
}

.sevenRow-header a {
  display: block;
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 10px;
  font-weight: bold;
  color: black;
}

.video1 {
  padding: 0 0.2rem;
  background: #f3f5f7;
  -webkit-box-shadow: rgb(0 0 0 / 4%) 0 0.02rem 0.04rem 0;
  box-shadow: 0 0.02rem 0.04rem 0 rgb(0 0 0 / 4%);
  border-radius: 0.1rem;
  width: 14rem;
  /*height: 300px;*/
}

.video1-header .list .item {
  /*height: 250px;*/
  width: 420px;
  /* background-color: #f95e5a; */
  position: relative;
  float: left;
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 15px;
  cursor: pointer;
}
.video1-header .list li:hover {
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 8%) 0px 3px 8px 0px;
  transform: translate3d(0px, -8px, 0px);
}
.video1-header .image {
  height: 200px;
  width: 420px;
  border-radius: 15px;
}

.play-btn {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 100;
  top: 25%;
  left: 35%;
}
.video1-box {
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  line-height: 28px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.video1-box p {
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 21px;
}

.video2 {
  float: left;
  height: 350px;
  width: 450px;
  background-color: #fff;
  margin-left: 25px;
}

.video3 {
  float: left;
  height: 350px;
  width: 450px;
  background-color: #fff;
  margin-left: 25px;
}

.eightRow dl {
  float: left;
  margin-top: 30px;
  margin-left: 120px;
}

.eightRow dt {
  font-size: 16px;
  color: #fff;
}

.eightRow dl dd {
  margin-top: 10px;
  font-size: 12px;
  color: #7d7d7d;
}

.carousel-img {
  /*width: 100%;*/
  /*height: 665px;*/
  text-align: center;
  margin: 0 auto;
}

.carousel-img img {
  width: 100%;
  height: 100%;
}

.default-list {
  position: relative;
  width: 1400px;
  padding: 0px 35px;
  background: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px 0px;
}

.default-list li {
  float: left;
  margin: 20px 30px 20px 10px;
  background: rgb(255, 255, 255);
  padding: 15px 0px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s linear 0s;
}

.default-list li:hover {
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 8%) 0px 3px 8px 0px;
  transform: translate3d(0px, -8px, 0px);
}

.commend-item-image {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0px auto;
}

.commend-item-title {
  margin: 15px auto 9px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  width: 115px;
}

.textOverflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

.commend-item-code {
  background: rgb(242, 242, 242);
  border-radius: 12px;
  display: inline-block;
  font-size: 12px;
  color: rgb(120, 120, 120);
  padding: 3px 8px;
  margin-bottom: 7px;
}

.commend-item-des {
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  letter-spacing: 0px;
}

.moreIcn {
  font-size: 80px;
  color: #e5623f;
}

.commend-item-title {
  margin: 15px auto 9px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  width: 115px;
}

.more {
  margin-top: 25px;
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.5);
}

.wap {
  padding: 0px 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px 0px;
  border-radius: 10px;
  width: 1400px;
  height: 450px;
}

.wap .skeleton .list {
  background: rgb(255, 255, 255);
  z-index: 0;
}

.wap .skeleton .list::after {
  display: table;
  content: "";
}

.wap .skeleton .list .item {
  width: 80%;
  position: relative;
  padding: 20px 0px;
  margin: 5px 10px;
  cursor: pointer;
  font-weight: 600;
  border-bottom: 1px solid rgb(239, 239, 239);
}

.wap .list .image {
  width: 150px;
  height: 100px;
  border-radius: 10px;
  margin-right: 40px;
}
.wap .list .image :hover {
  box-shadow: rgb(0 0 0 / 8%) 0px 3px 8px 0px;
  transform: translate3d(0px, -8px, 0px);
}
.wap .list .image .zixunImage {
  width: 150px;
  border-radius: 10px;
  height: 100px;
}

.wap .content {
  position: absolute;
  width: 1000px;
  top: 30px;
  left: 190px;
}

/* .wap .content .content-title {
  font-size: 18px;
  color: rgb(30, 30, 30);
  font-weight: bold;
  margin-bottom: 15px;
}

.wap .content .content-title-gray {
  color: rgb(124, 124, 124);
} */
.wap .time {
  float: right;
  margin-right: 50px;
  font-size: 12px;
  color: rgb(174, 174, 174);
  display: inline-block;
}
.wap .title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: rgb(124, 124, 124);
}
.wap .content .titlehover :hover {
  color: #e5623f;
}

.wap .news {
  font-size: 14px;
  color: rgb(124, 124, 124);
  letter-spacing: 0px;
  text-align: justify;
  line-height: 22px;
  width: 800px;
  height: 44px;
  margin-top: 35px;
}

.eldialog-parent /deep/ .el-dialog {
  border-radius: 20px;
  border: 1px solid rgb(204, 204, 204);
  outline: none;
  padding-left: 0.9%;
  min-width: 500px;
}

.gaokaotianbao {
  margin-bottom: 25px;
}

input {
  text-decoration: none;
  border: 0;
  outline: 0;
}

.tuijianButton {
  margin-top: .15rem;
  /*padding-bottom: .2rem;*/
  text-align: center;
}

.tuijianButton .tuijianbtn {

}

.tuijianButton .tuijianbtn span{
  display: block;
  margin-top: .01rem;
  text-align: center;
  color: #ff9912;
  font-size: .12rem;

}
/deep/ .eldialog-parent .el-dialog__header {
  padding: 0;
}
/deep/ .eldialog-parent .el-dialog__body {
  padding: 0;
}
.footer {
  height: 270px;
  margin-top:-20px;
}

</style>
