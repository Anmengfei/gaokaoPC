<template>
  <div class="app_container">
    <top-header></top-header>
    <div class="mt20 thirdRow">
      <HomeHeader :flagInfo="loginStatus"></HomeHeader>
    </div>
    <div class="sixRow">
      <!-- <div class="sixRow-header">
        <span>首页>大家都在关注</span>
      </div> -->
      <div class="sixRow-box">
        <ul class="videoList">
          <li
            class="videoItem"
            v-for="(item, index) in zixunList"
            :key="index"
            @click="showVideo(item, index)"
          >
            <el-row>
              <el-col :span="4"
                ><div class="grid-content bg-purple">
                  <img :src="item.cover" class="video-Image" />
                </div>
              </el-col>
              <el-col :span="20"
                ><div class="grid-content bg-purple-light">
                  <div class="videoTitle">
                    <span> {{ item.title }}</span>
                  </div>
                </div></el-col
              >
            </el-row>
          </li>
        </ul>
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
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import EditScore from "@/components/common/editScore";
// {}只引入这个方法
import { getAllIsLearning } from "@/api/index.js";
// import $ from 'jquery'
export default {
  name: "VideoList",
  components: { TopHeader, HomeHeader, Footer, EditScore },
  data() {
    return {
      videoUrl: "",
      scoreDialog: false,
      recommandList: [],
      zixunList: [],
      form: {
        name: "",
      },
      dialogVisible: false,
      loginStatus: false,
      value1: "5",
      navBarFixed: false,
      bannerH: "",
      page: 1,
      size: 100,
      list: [],
      infoState: false,
      flag_class: "未登录",
      flag_state: true,

      selectProvince: "",
      provincesList: ["北京", "上海", "广州", "深圳"],
      searchValue: "",
      schna: [],
    };
  },
  created() {
    if (localStorage.getItem("flag_class") === null) {
      this.flag_state = true;
    } else {
      this.flag_state = false;
    }
  },
  computed: {
    username() {
      if (localStorage.getItem("name") === null) {
        return "ceshi";
      } else {
        return localStorage.getItem("name");
      }
    },
  },
  mounted() {
    this.initData();
    window.addEventListener("scroll", this.watchScroll);
    this.setBannerH();
    window.addEventListener(
      "resize",
      () => {
        this.setBannerH();
      },
      false
    );
    this.getInfo();
  },
  methods: {
    showVideo(item, index) {
      this.videoUrl = item.address;
      this.dialogVisible = true;
    },

    initData() {
      //必须这样
      let _this = this;
      getAllIsLearning().then(function (response) {
        console.log(response.data);
        _this.zixunList = response.data;
        console.log(_this.zixunList);
      });
    },
    // 关闭视频
    handleClose(done) {
      this.videoUrl = "";
      this.dialogVisible = false;
    },
    modifyScore() {
      console.log("123");
      this.scoreDialog = true;
    },
    login() {
      // alert(1)
    },
    selectSchoolItem(item, index) {
      console.log("item", item);
      console.log("index", index);
      this.$router.push("/SchoolInfo");
    },
    regist() {},
    setBannerH() {
      this.bannerH = document.body.clientWidth / 4;
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 49) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },

    getInfo() {
      if (this.flag_state === false) {
        var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem(
          "userId"
        )}`;

        this.$axios
          .get(
            url,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            if (localStorage.getItem("userId")) {
              this.infoState = false;
            } else {
              this.infoState = true;
            }

            if (this.infoState === true) {
              this.openInfo();
            }
          });
      }
    },
    openInfo() {
      this.$confirm("请尽快完善个人资料", "提示信息", {
        confirmButtonText: "立即前往",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$router.push("/userSetting/personalInformation");
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.app_container {
  /* background-color: red; */
  width: 100%;
}
.mt20 {
  margin-top: 20px;
}

.thirdRow {
  background-color: #f95e5a;
  width: 100%;
  height: 70px;
}

li {
  list-style: none;
}

.sixRow {
  /* height: 560px; */
  width: 1400px;
  margin: 0 auto;
}

.sixRow-box {
  /* height: 660px; */
  margin-top: 50px;
  width: 1400px;
  position: relative;
  /* border-radius: 15px; */
  /* background-color: pink; */
}
.el-row {
  border-bottom: 1px solid #dbdbdb;
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
.video-Image {
  width: 1.9rem;
  height: 1.4rem;
  border-radius: 0.1rem;
}
.videoTitle {
  color: rgb(124, 124, 124);
  font-size: 0.2rem;
  font-weight: 700;
  /* margin-left: 5%; */
}
.videoItem :hover {
  /* background-color: #dbdbdb; */
  cursor: pointer;
}
</style>
