<template>
  <div class="app_container">
    <Header></Header>
    <div class="contaier">
      <el-container>
        <el-aside width="25%" class="aside-style">
          <el-dialog
            title="点击上传头像"
            :visible.sync="dialogVisible"
            width="30%">
            <div class="uploads">
              <el-upload
                :action="updateUrl"
                :headers="uploadHeader"
                list-type="picture-card"
                name="avatarfile"
                :data="updateobj"
                class="upload-demo"
                :on-preview="handlePictureCardPreview"
                :on-success="handleAvatarSuccess"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>

            </div>

            <span slot="footer" class="dialog-footer">
                  <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
                  <el-button type="primary" @click="closeDia">关 闭</el-button>
                </span>
          </el-dialog>
          <el-dialog :visible.sync="dialogVisible2">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <div class="left_head">
            <div class="left_head_picture">
              <el-tooltip class="item" effect="dark" content="更换头像"  placement="bottom">
                <img :src=headimg @click="update_img">
              </el-tooltip>

              <!--<div class="img-diagle"></div>-->
            </div>
            <div class="left_head_name">
              <span>{{username}}</span>
            </div>
          </div>
          <div class="left_container">
            <div class="left_nav">
              <el-menu
                router
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="/userSetting/personalInformation">
                  <i class="el-icon-document"></i>
                  <span slot="title">个人信息</span>
                </el-menu-item>
                <el-menu-item index="/userSetting/myLesson">
                  <i class="el-icon-collection"></i>
                  <span slot="title">我的课程</span>
                </el-menu-item>
                <el-menu-item index="/userSetting/mySchedule">
                  <i class="el-icon-collection"></i>
                  <span slot="title">本周课表</span>
                </el-menu-item>
                <el-menu-item index="/userSetting/UpdatePassword">
                  <i class="el-icon-unlock"></i>
                  <span slot="title">修改密码</span>
                </el-menu-item>
                <!-- <el-menu-item @click="gotoupdate" v-if="role === '1'">
                  <i class="el-icon-monitor"></i>
                  <span slot="title">录播教学</span>
                </el-menu-item> -->
                <!--<el-menu-item>-->
                  <!--<i class="el-icon-document"></i>-->
                  <!--<span slot="title">直播教学</span>-->
                <!--</el-menu-item>-->
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="main_content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </div>


    <Footer class="footer-style"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/header1'
  import Footer from '@/components/common/footer1'
import userSettingPopover from '@/components/userSetting/userSettingPopover'
export default {
  inject:['reload'],
  name: 'index',
  components: { userSettingPopover, Header, Footer },
  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      dialogVisible2: false,
      role: localStorage.getItem('role'),
      headimg: '',
      updateUrl: 'http://58.119.112.14:11020/cms/system/user/profile/avatar',
      uploadHeader: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
      name: localStorage.getItem('name'),
      updateobj: {
        username: localStorage.getItem('name')
      }
    }
  },
  computed: {
    username() {
      if (localStorage.getItem('name') === 'admin') {
        return '管理员'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    gotoCompetition: function () {
      console.log('我要跳转界面了')
      this.$router.push('/codingCompetition')
    },
    gotoupdate () {
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/#/course/list?username=' + localStorage.getItem('name')
      window.open(url)
    },
    gotoHomePage: function () {
      console.log('我要跳转界面了')
      this.$router.push('/')
    },
    update_img() {
      this.dialogVisible = true
    },
    getInfo() {
      // var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem('userId')}`
      var url = `http://58.119.112.14:11020/cms/system/user/profile`
      this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
        
        this.headimg = `http://58.119.112.14:11013/cms-manager${res.data.data.avatar}`
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible2 = true;
    },
    handleAvatarSuccess(res, file) {
      if(res.code === 200) {
        console.log("SSSSSS", res)
        this.$message.success('头像上传成功！')
        // var str = res.imgUrl
        // str.slice(0,5)
        this.headimg = `http://58.119.112.14:11013/cms-manager${res.imgUrl}`
        localStorage.setItem('headimg', this.headimg)
        this.dialogVisible = false
        this.reload()
      } else {
        this.$message.error('头像上传失败，请重新上传！')
        this.dialogVisible = false
      }
      
    },
    closeDia() {
      this.dialogVisible = false

    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1500px;
    margin: 0 auto;
    margin-top: 120px; 
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    width: 100%;
    height: 100px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 60px;
    cursor: pointer;
  }
  .logo img {
    height: 50px;
    width: 150px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .left_container {
    padding: 30px;
  }
  .left_head {
    height: 200px;
    /*background-color: #ffffff;*/
    border-right-style: solid;
    border-right-color: #e6e6e6;
    border-right-width: 1px;
    margin: 30px 30px -30px 30px;
    text-align: center;
    padding-top: 30px;
    padding-right: 90px;
  }
  .left_head_picture {
    /*height: 80%;*/
    /*width: 80%;*/
    /*width: 80px;*/
    /*height: 80px;*/
    margin-top: 20px;
    /*position: relative;*/
    /*overflow: hidden;*/
  }
  /*.img-diagle {*/
    /*height: 30px;*/
    /*width: 80px;*/
    /*background-color: rgba(0,0,0,0.3);*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 50%;*/
    /*transform: translateX(-50%);*/
    /*overflow: hidden;*/
    /*!*border-radius: 50%;*!*/
  /*}*/
  .left_head_name {
    margin-top: 20px;
  }
  .left_head_picture img {
    width: 80px;height: 80px;border-radius: 50%;cursor: pointer;
  }
  .left_nav {
  }
  .el-menu-vertical-demo >>> .el-menu-item{
    font-size: 18px;
  }
  .main_content {
    border-radius: 20px;
    /*height: 600px;*/
    /*background-color: white;*/
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .footer-style {
    margin-top: 200px;
  }
  .aside-style {
    padding-top: 120px;
  }
  .uploads {
    text-align: center;
  }
  .uploads>>> .upload-demo>div>input{
    display: none!important;
  }
</style>
