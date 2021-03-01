<template>
  <div class="app_container">

    <!-- <Header :flags = flag_class class="header" :flagInfo="infoState"></Header> -->
    <div class="bgGrey">
      <el-row :gutter="20">
        <el-col :span="8">
          <span class="ml50">欢迎来到大数据智能高考志愿填报平台</span>
        </el-col>
        <el-col :span="7">
          &nbsp;
        </el-col>
        <el-col :span="9">
         <el-row :gutter="20">
           <el-col :span="7">
             <span>高考志愿填报QQ群</span>
           </el-col>
           <el-col :span="5">
             <span>手机APP</span>
           </el-col>
           <el-col :span="6">
             <span>微信公众号</span>
           </el-col>
           <el-col :span="6">
             <span>志愿VIP卡激活</span>
           </el-col>
         </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="mt20 secondRow">
      <el-row :gutter="20">
        <el-col :span="2">
          <img src="../../assets/logo.jpg" class="img-logo ml50">
        </el-col>
        <el-col :span="3">
          <div class="plateName">考哪儿</div>
        </el-col>
        <el-col :span="3">
          <el-select v-model="selectProvince" placeholder="请选择省份" clearable  style="width: 200px;margin-right: 10px">
              <el-option v-for="dict in provincesList" :key="dict" :label="dict" :value="dict" ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="5">
          <el-input v-model="searchValue" placeholder="搜大学/查专业" suffix-icon="el-icon-search"></el-input>
        </el-col>
         <el-col :span="2">&nbsp;</el-col>
        <el-col :span="6">
          <div>
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo">开通VIP</span>
          </div>
        </el-col>
      </el-row>
    </div>
    
  

   
   

    <!-- <el-backtop :bottom="60" class="backtop-style">
      <div class="backtop-text">
        <span>返回顶部</span>
      </div>
      <i class="el-icon-caret-top backtop-icon" ></i>

    </el-backtop>

    <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import $ from 'jquery'
export default {
  name: 'index',
  components: { Header, Footer },
  data () {
    return {
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
      provincesList:['北京', '上海', '广州', '深圳'],
      searchValue: ''
  
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
    username (){
      if (localStorage.getItem('name') === null) {
        return 'ceshi'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
    this.getInfo()
  
  },
  methods: {
    setBannerH(){
      this.bannerH = document.body.clientWidth / 4
    },
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 49) {
        this.navBarFixed = true

      } else {
        this.navBarFixed = false
      }
    },

    getInfo() {
      if (this.flag_state === false) {
        var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem('userId')}`

        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}},{headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          
          if(localStorage.getItem('userId')) {
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
    openInfo() {
      this.$confirm('请尽快完善个人资料', '提示信息', {
        confirmButtonText: '立即前往',
        type: 'warning',
        center: true,
      }).then(() => {
        this.$router.push('/userSetting/personalInformation')
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
  .ml50 {
    margin-left: 50px; 
  }
  .mt20 {
    margin-top: 20px;
  }
  .bgGrey {
    background-color: rgba(155, 155, 155, 0.3);
    font-size: 14px;
  }
  .secondRow {
    height: 50px;
    line-height: 50px;
  }
  .img-logo {
    width: 50px;
    height: 50px;;
  }
  .plateName {
    font-size: 30px;
    font-weight: bolder;
  }
  .tishiOne {
    border: 1px solid red;
    color: rgb(235, 16, 16);
  }
  .tishiTwo {
    border: 1px solid  red;
    background-color: red;
    color: white;
  }
</style>
