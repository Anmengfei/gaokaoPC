<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="sixRow">
      <ul class="article-list">
        <li
          class="article-item"
          v-for="(item, index) in zixunList"
          :key="index"
          @click="showVideo(item, index)"
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
              </div></el-col
            >
          </el-row>
        </li>
      </ul>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <video
        :src="videoUrl"
        controls="controls"
        style="width: 100%; height: 100%"
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
// {}只引入这个方法
import { getAllIsLearning } from '@/api/index.js'
// import $ from 'jquery'
export default {
  name: 'VideoList',
  components: { TopHeader, HomeHeader, Footer, EditScore },
  data () {
    return {
      videoUrl: '',
      scoreDialog: false,
      recommandList: [],
      zixunList: [],
      form: {
        name: ''
      },
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
      flag_state: true,

      selectProvince: '',
      provincesList: ['北京', '上海', '广州', '深圳'],
      searchValue: '',
      schna: []
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
  },
  methods: {
    showVideo (item, index) {
      this.videoUrl = item.address
      this.dialogVisible = true
    },

    initData () {
      // 必须这样
      let _this = this
      getAllIsLearning().then(function (response) {
        console.log(response.data)
        _this.zixunList = response.data
        console.log(_this.zixunList)
      })
    },
    // 关闭视频
    handleClose (done) {
      this.videoUrl = ''
      this.dialogVisible = false
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
  /* background-color: red; */
  width: 100%;
}
li {
  list-style: none;
}
.sixRow {
  /* height: 560px; */
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
</style>
