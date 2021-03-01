<template>
  <div>
   

    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top nav_border">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#" @click="gotoHomepage">
                <img src="../../assets/header-logo.png" class="img-logo">
              </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse nav_ul">
              <ul class="nav navbar-nav ">
                <li  @click="gotoHomepage"><a>首页</a></li>
                <li @click="gotoAllclasses"><a>全部课程</a></li>
                <li @click="gotoWork"><a>在线课堂</a></li>
                <li @click="gotoOnline"><a>在线教学</a></li>
                <li @click="gotoStudy"><a>科技研学</a></li>

                <li @click="gotoPlat"><a>资源云平台</a></li>
                <li @click="gotoCompetition"><a>比赛服务</a></li>

                
              </ul>
              <ul class="nav navbar-nav ul2_nav">
                <li>
                  <a v-if="flag_login === '已登录'" class="nav_a">
                    <user-setting-popover ></user-setting-popover>

                  </a>

                  <a v-if="flag_login !== '已登录'" >
                    <!-- <Logout ></Logout> -->
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </div>
</template>

<script>
// import userSettingPopover from '@/components/userSetting/userSettingPopover'
// import Logout from '@/components/userSetting/logout'
export default {
  name: 'header',
  // components: { userSettingPopover, Logout },
  data () {
    return {
      flag_login: '未登录',
      flag_state: true
    }
  },
  props: {
    flags: String,
    flagInfo: Boolean
  },
  created () {
    this.flag_login = localStorage.getItem('flag_class')
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  mounted () {
  },
  methods: {
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoAllclasses: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/AllCourses')
      }
      // this.$router.push('/AllCourses')

    },
    openInfo() {
      this.$confirm('请尽快完善个人资料,完善个人资料后开放此模块', '提示信息', {
        confirmButtonText: '立即前往',
        type: 'warning',
        center: true,
      }).then(() => {
        this.$router.push('/userSetting/personalInformation')
      }).catch(() => {
      })
    },
    gotoWork () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/WorkIndex')
      }

    },
    gotoWorkUpdate () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        if (this.flagInfo === false) {
          this.openInfo()
        } else {
          this.$router.push('/WorkUpdate')
        }

      }
    },
    gotoHomepage () {
      this.$router.push('/')
    },
    gotoStudy() {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/StudyProject')
      }

    },
    gotoTeacher() {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/ClassShowTen')
      }

    },
    gotoOnline() {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/OnlineTeach')
      }

    },
    gotoPlat() {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        var role  = localStorage.getItem('role')
        if(role === '0') {
          this.$message.warning("没有权限访问该功能，请申请升级权限!")
        } else {
          window.location.href = `http://58.119.112.14:11013?userId=${localStorage.getItem('userId')}`
        }
      }
    },
    gotoCompetition: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/competition')
      }
      // console.log('我要跳转界面了')
      //this.$router.push('/competition')
    },
    gotoAboutUs() {
      this.$router.push('/AboutUs')
    },
    gotocooperation() {
      this.$router.push('/cooperation')
    }
  }
}
</script>

<style scoped>
  /*.navbar-container {*/
    /*!*height: 80px;*!*/
    /*padding: 20px;*/
    /*background-color: rgba(0, 0, 0, 0.3);*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*z-index: 20;*/
  /*}*/
  /*.logo {*/
    /*float: left;*/
  /*}*/
  /*.nav-list {*/
    /*padding-left: 5px;*/
    /*padding-right: 5px;*/
    /*float: left;*/
    /*margin-left: 500px;*/
    /*!*line-height: 80px;*!*/
  /*}*/
  /*.nav-list ul li {*/
    /*float: left;*/
    /*list-style: none;*/
    /*color: white;*/
    /*margin-right: 60px;*/
  /*}*/
  /*.header-img {*/
    /*float: right;*/
  /*}*/
  @import "carousel.css";
  .nav li {
    margin-right: 70px;
  }
  .nav li a {
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .nav li a:hover {
   color: #16bcb4;
    font-weight: bolder;
  }
  .container {
    width: 100%;

  }
  .navbar {
    background-color: rgba(0, 0,0,0.3);
    /*padding: 5px;*/
  }
  .nav_ul {
    /*margin-left: 10%;*/
    margin-left: 300px;
  }
  .ul2_nav {
    margin-right: 20px;
    float: right;
  }
  .nav_border {
    border-bottom: rgba(0, 0, 0, 0);
  }
  /*.nav>li>a {*/
    /*padding: 17px 0;*/
  /*}*/
  .nav_a {
    padding: 0;
    margin-top: 10px;
  }
  .img-logo {
    height: 49px;
    margin-left: 60px;
    /*margin-top: 5px;*/
  }
  .navbar-brand {
    padding: 15px;
  }
</style>
