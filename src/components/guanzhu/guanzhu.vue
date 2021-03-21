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
        <div class="wap">
          <div class="skeleton">
            <ul class="list">
              <li
                class="item"
                v-for="(item, index) in zixunList"
                :key="index"
                @click="selectZixun(item, index)"
              >
                <div class="image">
                  <img :src="item.cover" class="zixunImage" />
                </div>
                <div class="content">
                  <div class="content-title content-title-gray">
                    <span class="title">{{ item.title }}</span>
                    <span class="time">{{ item.date }}</span>
                  </div>
                  <!-- <div class="news" maxlines="2" font-size="14">
                    {{ item.news }}
                  </div> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="more">
        <el-row>
          <el-button plain class="btn">查看更多</el-button>
        </el-row>
      </div>
    </div>
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
import { getFollowingList } from "@/api/index.js";
// import $ from 'jquery'
export default {
  name: "index",
  components: { TopHeader, HomeHeader, Footer, EditScore },
  data() {
    return {
      scoreDialog: false,
      recommandList: [
        {
          id: 1,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "首都师范大学",
          code: "1052[01]",
          des: "北京",
        },
        {
          id: 2,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "北京大学",
          code: "1052[01]",
          des: "北京",
        },
        {
          id: 3,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "上海师范大学",
          code: "1052[01]",
          des: "北京",
        },
        {
          id: 4,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "华中师范大学",
          code: "1052[01]",
          des: "北京",
        },
        {
          id: 5,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "华中师范大学",
          code: "1052[01]",
          des: "北京",
        },
        {
          id: 6,
          url:
            "https://storage-oss.ipin.com/school-icon/52ac2e97747aec013fcf49c4.jpg",
          name: "华中师范大学",
          code: "1052[01]",
          des: "北京",
        },
      ],
      zixunList: [
        // {
        //   id: 1,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 2,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 3,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 3,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 3,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 3,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
        // {
        //   id: 3,
        //   url:
        //     "https://storage-oss.ipin.com/oss-data/articleimage-20200728121805278842.png",
        //   title: "【北京】本科批志愿填报倒计时最后1天",
        //   time: "2020.07.31",
        //   news: "【北京】本科批志愿填报倒计时最后1天",
        // },
      ],
      form: {
        name: "",
      },
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
      schna: [
        "https://www.zhongkeruitong.top/CCZX_image/newBanner2.jpg",
        "https://www.zhongkeruitong.top/CCZX_image/banner5.png",
        "https://www.zhongkeruitong.top/CCZX_image/photo2.jpg",
      ],
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
    initData() {
      //必须这样
      let _this = this;
      getFollowingList().then(function (response) {
        console.log(response.data);
        _this.zixunList = response.data;
        console.log(_this.zixunList);
      });
    },
    // 修改过
    selectZixun(item, index) {
      const { href } = this.$router.resolve({
        name: "Article",
        query: {
          article: item.id,
        },
      });
      window.open(href, "_blank");
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
.more {
  width: 100px;
  margin: 30px auto 90px;
}
.more .btn {
  width: 150px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(0, 175, 240);
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  color: rgb(0, 175, 240);
}
.thirdRow {
  background-color: #f95e5a;
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
  width: 1500px;
  height: 400px;

  /* background: url(../../assets/u23.png);
  background-size: 100%; */
}
.carouselList {
  width: 100%;
  height: inherit;
  position: absolute;
  z-index: 1;
}
.zhiyuan {
  /* margin-top:20px; */
  z-index: 2;
  margin-left: 1300px;
  width: 500px;
  height: 350px;
  position: absolute;
}
.zhiyuan .content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 30px 5px 30px;
}
.content .header {
  font-size: 24px;
  /* margin-top: 20px; */
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.denglu-label {
  margin-top: 20px;
  border-radius: 15px;
  width: 100%;
  height: 35px;
  text-align: center;
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
.form-item2 {
  margin-top: 10px;
  padding: 15px 20px;
  background-color: rgba(0, 175, 240, 0.05);
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
  background-color: rgba(0, 175, 240, 0.05);
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

.fiveRow {
  height: 400px;
  width: 1400px;
  margin: 0 auto;
}
.fiveRow-header {
  margin-top: 20px;
  height: 100px;
  width: 1400px;
  background-color: #f3f5f7;
}
.fiveRow-box {
  height: 250px;
  width: 1400px;
  background-color: #fff;
  position: relative;
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
  background-color: #00aff0;
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
  border-radius: 15px;
  margin-left: 40px;
}
.btn a {
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
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
  /* height: 560px; */
  width: 1400px;
  margin: 0 auto;
}
.sixRow-header {
  margin-top: 10px;
  height: 100px;
  width: 1400px;
  /* background-color: #f3f5f7; */
  border-bottom-color: #f3f5f7;
}
.sixRow-box {
  /* height: 660px; */
  margin-top: 50px;
  width: 1400px;
  position: relative;
  border-radius: 15px;
  /* background-color: pink; */
}
/* .sixRow-header .shuxian {
  float: left;
  top: 2px;
  display: inline-block;
  width: 6px;
  height: 35px;
  margin-top: 3px;
  margin-right: 16px;
  border-radius: 3px;
  background-color: #00aff0;
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
} */
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
  height: 450px;
  width: 1400px;
  margin: 50px auto 0;
}
.sevenRow-header {
  margin-top: 10px;
  height: 100px;
  width: 1400px;
  background-color: #f3f5f7;
}
.sevenRow-box {
  height: 350px;
  width: 1400px;
  background-color: #f3f5f7;
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
  background-color: #00aff0;
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
  float: left;
  height: 350px;
  width: 450px;
  background-color: #fff;
}
.video1-header {
  height: 250px;
  width: 450px;
  background-color: #f95e5a;
  position: relative;
}
.video1-header .image {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.play-btn {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 100;
  top: 30%;
  left: 40%;
}

.video1-box {
  /* height: 100px;
  width: 450px;
  font-weight: bold; */
  /* margin: 20px 30px 10px 30px; */
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
  width: 100%;
  /*height: 665px;*/
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
  color: #00a4ff;
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
/* .wap {
  padding: 0px 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px 0px;
  border-radius: 10px;
  width: 1400px;
  height: 450px;
} */

.wap .skeleton .list {
  background: rgb(255, 255, 255);
  z-index: 0;
}
.wap .skeleton .list::after {
  display: table;
  content: "";
}
.wap .skeleton .list .item {
  width: 1400px;
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
.wap .list .image .zixunImage {
  width: 150px;
  border-radius: 10px;
  height: 100px;
}
.wap .content {
  position: absolute;
  width: 12.5rem;
  top: 30px;
  left: 190px;
}
.wap .content .content-title {
  font-size: 18px;
  color: rgb(30, 30, 30);
  font-weight: bold;
  margin-bottom: 15px;
}
.wap .content .content-title-gray {
  color: rgb(124, 124, 124);
}
.wap .time {
  float: right;
  margin-right: 50px;
  font-size: 12px;
  color: rgb(174, 174, 174);
  display: inline-block;
}
.wap .news {
  font-size: 14px;
  color: rgb(124, 124, 124);
  letter-spacing: 0px;
  text-align: justify;
  line-height: 22px;
  width: 800px;
  height: 44px;
}
.footer {
  background-color: aqua;
}
</style>
