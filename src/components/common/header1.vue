<template>
  <div class="container">
    <nav>
        <div class="navbar-header">
          <a class="navbar-brand" href="#" @click="gotoHomepage">
            <img src="../../assets/logo.png" class="img-logo" />
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse nav_ul">
          <ul class="nav navbar-nav nav_moreList">
            <li @click="gotoHomepage"><a>首页</a></li>
            <li @click="gotoAllclasses"><a>院校优先</a></li>
            <li @click="gotoWork"><a>专业优先</a></li>
            <li @click="gotoOnline"><a>志愿表</a></li>
            <li @click="gotoStudy"><a>志愿VIP</a></li>
            <li @click="gotoPlat"><a>1V1专家</a></li>
          </ul>
          <ul class="nav navbar-nav ul2_nav">
            <li>
              <a v-if="flag_state !== true" class="nav_a">
                <user-setting-popover></user-setting-popover>
              </a>

              <a v-else class="nav_logout">
                <Logout></Logout>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import userSettingPopover from '@/components/userSetting/userSettingPopover'
import Logout from '@/components/userSetting/logout'
export default {
  name: 'header1',
  components: { userSettingPopover, Logout },
  data () {
    return {
      flag_login: '未登录',
      flag_state: false
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
    this.flag_state = false
  },
  mounted () {},
  methods: {
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoAllclasses: function () {
      // if (this.flag_state === true) {
      //   alert('请先登录！')
      //   this.$router.push('/login')
      // } else {
      //   this.$router.push('/AllCourses')
      // }
      this.$router.push('/SchoolRecommand')
    },
    openInfo () {
      this.$confirm('请尽快完善个人资料,完善个人资料后开放此模块', '提示信息', {
        confirmButtonText: '立即前往',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$router.push('/userSetting/personalInformation')
        })
        .catch(() => {})
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
    gotoStudy () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/StudyProject')
      }
    },
    gotoTeacher () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/ClassShowTen')
      }
    },
    gotoOnline () {
      // if (this.flag_state === true) {
      //   alert("请先登录！");
      //   this.$router.push("/login");
      // } else {
      //   this.$router.push("/OnlineTeach");
      // }
      this.$router.push('/Recruit')
    },
    gotoPlat () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        var role = localStorage.getItem('role')
        if (role === '0') {
          this.$message.warning('没有权限访问该功能，请申请升级权限!')
        } else {
          window.location.href = `http://58.119.112.14:11013?userId=${localStorage.getItem(
            'userId'
          )}`
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
      // this.$router.push('/competition')
    },
    gotoAboutUs () {
      this.$router.push('/AboutUs')
    },
    gotocooperation () {
      this.$router.push('/cooperation')
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container{
  height: 100%;
  width: 100%;
  font-size: 100%;
}
.nav li {
  margin-right: 1rem;
  text-align: center;
}
.nav li a {
  color: white;
  cursor: pointer;
}
.nav_moreList li a:hover {
  color: #16bcb4;
  /* font-weight: bolder; */
  background-color: transparent;
}
.nav_ul {
  /*margin-left: 10%;*/
  margin-left: 3rem;
}
.ul2_nav {
  margin-right: .5rem;
  float: right;
}
.ul2_nav li a:hover {
  background-color: transparent;
}

.nav_a {
  padding: 0;
  margin-top: .1rem;
}

.img-logo {
  height: 80%;
  margin-top: .2rem;
  margin-left: .2rem;
}
.navbar-brand {
  padding-top: .1rem;
  padding-left: 1.5rem;
}
</style>
