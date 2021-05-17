<template>
  <div class="app_container">
    <top-header></top-header>
    <div class="mt20 thirdRow">
      <HomeHeader :flagInfo="loginStatus"></HomeHeader>
    </div>
    <div class="sixRow" :style="{ minHeight: minHeight + 'px'}">
      <ul class="article-list">
        <li
          class="article-item"
          v-for="(item, index) in zixunList"
          :key="index"
          @click="selectZixun(item, index)"
        >
          <el-row>
            <el-col :span="8"
              ><div class="grid-content bg-purple">
                <div class="image3d">
                  <img :src="item.cover" class="article-image" />
                </div>
              </div>
            </el-col>
            <el-col :span="16"
              ><div class="grid-content bg-purple-light">
                <div class="articleTitle">
                  <span>{{ item.title }}</span>
                </div>
                <div class="articleDate">
                  <span>{{ item.date }}</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="el-icon-view"></i>
                  <span>{{ item.readNum }}</span>
                </div>
              </div></el-col
            >
          </el-row>
        </li>
      </ul>
    </div>
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
// {}只引入这个方法
import { getFollowingList } from '@/api/index.js'
// import $ from 'jquery'
export default {
  name: 'guanzhu',
  components: { TopHeader, HomeHeader, Footer, EditScore },
  data () {
    return {
      scoreDialog: false,
      recommandList: [],
      zixunList: [],
      form: {
        name: ''
      },
      loginStatus: false,
      value1: '5',
      navBarFixed: false,
      bannerH: '',
      page: 1,
      size: 100,
      list: [],
      infoState: false,
      flag_class: '未登录',
      flag_state: true,

      selectProvince: '',
      provincesList: ['北京', '上海', '广州', '深圳'],
      searchValue: '',
      schna: [
        'https://www.zhongkeruitong.top/CCZX_image/newBanner2.jpg',
        'https://www.zhongkeruitong.top/CCZX_image/banner5.png',
        'https://www.zhongkeruitong.top/CCZX_image/photo2.jpg'
      ],
      minHeight: 0
    }
  },
  created () {
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  computed: {
    username () {
      if (localStorage.getItem('name') === null) {
        return 'ceshi'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted () {
    this.minHeight = document.documentElement.clientHeight - 200
    // 监听浏览器窗口变化
    window.onresize = function () {
      this.minHeight = document.documentElement.clientHeight - 200
    }
    this.initData('山东省')
    // this.initData(this.$route.query.examProvince);
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
  },
  methods: {
    initData (examProvince) {
      // 必须这样
      let _this = this
      getFollowingList({
        examProvince: examProvince

      }).then(function (response) {
        console.log('获取到了数据', response.data)
        _this.zixunList = response.data
        console.log(_this.zixunList)
      })
    },
    // 修改过
    selectZixun (item, index) {
      const { href } = this.$router.resolve({
        name: 'Article',
        query: {
          article: item.id
        }
      })
      window.open(href, '_blank')
    },
    modifyScore () {
      console.log('123')
      this.scoreDialog = true
    },
    login () {
      // alert(1)
    },
    selectSchoolItem (item, index) {
      console.log('item', item)
      console.log('index', index)
      this.$router.push('/SchoolInfo')
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
      if (this.flag_state === false) {
        var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem(
          'userId'
        )}`

        this.$axios
          .get(
            url,
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
              }
            },
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
              }
            }
          )
          .then((res) => {
            if (localStorage.getItem('userId')) {
              this.infoState = false
            } else {
              this.infoState = true
            }

            if (this.infoState === true) {
              this.openInfo()
            }
          })
      }
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
.app_container {
  background-color: #f3f5f7;
  width: 100%;
  /* height: 100%; */
}

li {
  list-style: none;
}

.sixRow {
  width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
}

.article-item {
  float: left;
  width: 700px;
  height: 190px;
  /* background-color: #00a4ff; */
  border-bottom: 1px solid #dbdbdb;
}

.article-item :hover {
  cursor: pointer;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple {
  /* background: #d3dce6; */
  text-align: center;
  line-height: 190px;
}

.bg-purple-light {
  /* background: #e5e9f2; */
  padding-left: 20px;
  padding-top: 40px;
}

.grid-content {
  min-height: 190px;
}

.article-image {
  width: 1.9rem;
  height: 1.4rem;
  border-radius: 0.1rem;
}

.image3d :hover {
  box-shadow: rgb(0 0 0 / 8%) 0px 3px 8px 0px;
  transform: translate3d(0px, -8px, 0px);
}

.articleTitle {
  color: rgb(124, 124, 124);
  font-size: 0.2rem;
  font-weight: 700;
  margin-bottom: 60px;
}

.articleTitle :hover {
  color: #e5623f;
}

.articleDate {
  color: rgb(124, 124, 124);
  font-size: 0.1rem;
  font-weight: 700;
}

.footer{
  /* margin-top: 7rem; */
}
</style>
