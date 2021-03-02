<template>
  <div class="app_container">
    <!-- <Header :flags = flag_class class="header" :flagInfo="infoState"></Header> -->
    <div class="bgGrey">
      <el-row :gutter="20">
        <el-col :span="8">
          <span class="ml50">欢迎来到大数据智能高考志愿填报平台</span>
        </el-col>
        <el-col :span="7"> &nbsp; </el-col>
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
          <img src="../../assets/logo.jpg" class="img-logo ml50" />
        </el-col>
        <el-col :span="3">
          <div class="plateName">考哪儿</div>
        </el-col>
        <el-col :span="3">
          <el-select
            v-model="selectProvince"
            placeholder="请选择省份"
            clearable
            style="width: 200px; margin-right: 10px"
          >
            <el-option
              v-for="dict in provincesList"
              :key="dict"
              :label="dict"
              :value="dict"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="5">
          <el-input
            v-model="searchValue"
            placeholder="搜大学/查专业"
            suffix-icon="el-icon-search"
          ></el-input>
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
    <div class="mt20 thirdRow">
      <div class="knl-nav">考哪儿</div>
      <div class="box-nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">院校优先</a></li>
          <li><a href="#">专业优先</a></li>
          <li><a href="#">志愿表</a></li>
          <li><a href="#">志愿VIP</a></li>
          <li><a href="#">1V1专家</a></li>
        </ul>
      </div>
      <div class="username">姓名 | 用户名</div>
    </div>
    <div class="fourRow">
      <div class="zhiyuan">
        <div class="content">
          <div class="header">模拟高考志愿填报</div>
          <el-tag class="denglu-label" type="warning"
            >登录后，推荐适合你的院校</el-tag
          >
          <div class="form-item">
            <div class="gaokaozongfen">
              <span class="span1">高考总分</span
              ><span class="span2">输入预估总分</span>
            </div>
            <div class="quanshengpaiming">
              <span class="span1">全省排名</span
              ><span class="span2">预估全省排名</span>
            </div>
            <div class="button">
              <el-button class="btn" type="primary" round>立即登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fiveRow">
      <div class="fiveRow-header">
        <span class="shuxian"></span>
        <div class="shuxian-l">院校推荐</div>
        <div class="btn">
          <a href="#">登录</a>
        </div>
        <div class="shuxian-r">推荐更合适你的院校</div>
      </div>
      <div class="fiveRow-box">
        <div class="box-content">
          <a href="#">登录添加成绩信息</a><br />
          <h>大数据+AI智能准确推荐合适你的院校</h>
        </div>
      </div>
    </div>
    <div class="sixRow">
      <div class="sixRow-header">
        <span class="shuxian"></span>
        <div class="shuxian-l">大家都在关注</div>
        <a href="#">查看更多>></a>
      </div>
      <div class="sixRow-box">
        <div class="item_01">
          <div class="picture">
            <img src="../../assets/logo34.png" alt="" />
          </div>
          <div class="word">
            <h5>【重要】 志愿填报需到各地官方考试院查询详情，以免误报</h5>
            <h6>【重要】 志愿填报需到各地官方考试院查询详情，以免误报</h6>
          </div>
          <div class="date">2020.07.27</div>
        </div>
        <div class="item_02">
          <div class="picture">
            <img src="../../assets/logo34.png" alt="" />
          </div>
          <div class="word1">
            <h5>【重要】 志愿填报需到各地官方考试院查询详情，以免误报</h5>
            <h6>【重要】 志愿填报需到各地官方考试院查询详情，以免误报</h6>
          </div>
          <div class="date1">2020.07.27</div>
        </div>
        <div class="item_03">
          <div class="picture">
            <img src="../../assets/logo34.png" alt="" />
          </div>
          <div class="word2">
            <h5>【山东】 2020年招生计划、批次线、录取概率全部更新</h5>
            <h6>【山东】 2020年招生计划、批次线、录取概率全部更新</h6>
          </div>
          <div class="date2">2020.07.27</div>
        </div>
      </div>
    </div>
    <div class="sixRow_1">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
    <div class="sevenRow">
      <div class="sevenRow-header">
        <span class="shuxian"></span>
        <div class="shuxian-l">大家都在学</div>
        <a href="#">查看更多>></a>
      </div>
      <div class="sevenRow-box">
        <div class="video1">
          <div class="video1-header">
            <img src="../../assets/logo66.png" alt="" class="image" />
          </div>
          <div class="video1-box">
            <p>iPIN牵手新东方，展开教育+人工智能深度合作</p>
          </div>
        </div>
        <div class="video2">
          <div class="video1-header">
            <img src="../../assets/logo66.png" alt="" class="image" />
          </div>
          <div class="video1-box">
            <p>完美志愿做客郑州教育电视台</p>
          </div>
        </div>
        <div class="video3">
          <div class="video1-header">
            <img src="../../assets/logo66.png" alt="" class="image" />
          </div>
          <div class="video1-box">
            <p>俞敏洪、杨洋、晨露对谈:高考志愿能否决定你的未来？</p>
          </div>
        </div>
      </div>
    </div>
    <div class="eightRow">
      <div class="eR-l">
        <dl>
          <dt>常见问题</dt>
          <dd>产品白皮书</dd>
          <dd>产品说明书</dd>
        </dl>
        <dl>
          <dt>关于我们</dt>
          <dd>团队介绍</dd>
          <dd>联系我们</dd>
          <dd>隐私政策</dd>
          <dd>用户协议</dd>
        </dl>
        <dl>
          <dt>2020微信群</dt>
        </dl>
        <dl>
          <dt>合作伙伴</dt>
          <dd>合作机构</dd>
          <dd>合作导师</dd>
        </dl>
        <dl>
          <dt>关注微信公众号</dt>
        </dl>
        <dl>
          <dt>商务合作</dt>
        </dl>
      </div>
      <div class="eR-r">
        <p class="p1">考哪儿期待为您服务</p>
        <p class="p2">工作日：9:30-18:30</p>
      </div>
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
import Header from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import $ from "jquery";
export default {
  name: "index",
  components: { Header, Footer },
  data() {
    return {
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
  background-color: #f3f5f7;
}
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
  height: 50px;
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
  border: 1px solid red;
  background-color: red;
  color: white;
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
}
.box-nav {
  float: left;
  width: 1500px;
  height: 70px;
}
.username {
  float: left;
  width: 200px;
  height: 70px;
}
li {
  float: left;
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
.username {
  font-size: 25px;
  color: #fff;
  text-align: center;
  line-height: 70px;
}
/*第四行  高考志愿百科*/
.fourRow {
  height: 420px;
  background: url(../../assets/u23.png);
  background-size: 100%;
}
.zhiyuan {
  margin-left: 1300px;
}
.zhiyuan .content {
  width: 500px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
}
.content .header {
  font-size: 24px;
  margin-top: 20px;
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

/* .desc {
  height: 50px;
  width: 400px;
  background-color: #eed8c9;
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #ff6900;
} */
/* .form-item {
  height: 70px;
  width: 400px;
  background-color: orange;
  border-radius: 15px;
} */
/* .button {
  height: 70px;
  width: 400px;
  background-color: blue;
  border-radius: 15px;
} */
.button .btn {
  margin-top: 20px;
  width: 340px;
  height: 45px;
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
  margin-right: 16ox;
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

.box-content h {
  color: #a5a5a5;
}
.sixRow {
  height: 760px;
  width: 1400px;
  margin: 0 auto;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.sixRow-header {
  margin-top: 10px;
  height: 100px;
  width: 1400px;
  background-color: #f3f5f7;
}
.sixRow-box {
  height: 660px;
  width: 1400px;
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
  margin-right: 16ox;
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
}
.item_01 {
  width: 1400px;
  height: 220px;
  background-color: #fff;
}
.item_02 {
  width: 1400px;
  height: 220px;
  background-color: #fff;
}
.item_03 {
  width: 1400px;
  height: 220px;
  background-color: #fff;
}
.picture {
  float: left;
}
.word {
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.word h6 {
  margin-top: 15px;
}
.date1 {
  float: right;
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 30px;
  margin-right: 35px;
}
.word1 {
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.word1 h6 {
  margin-top: 15px;
}
.date2 {
  float: right;
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 30px;
  margin-right: 35px;
}
.word2 {
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.word2 h6 {
  margin-top: 15px;
}
.date {
  float: right;
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 30px;
  margin-right: 35px;
}
.sevenRow {
  height: 450px;
  width: 1400px;
  margin: 0 auto;
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
}
.video1-header .image {
  height: 100%;
  width: 100%;
}
.video1-box {
  height: 100px;
  width: 450px;
  font-weight: bold;
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
.eightRow {
  height: 420px;
  background-color: #333333;
  margin-top: 40px;
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
.eR-l {
  float: left;
  height: 420px;
  width: 1400px;
  background-color: #333333;
}
.eR-r {
  float: left;
  height: 420px;
  width: 400px;
  background-color: #333333;
}
.p1 {
  display: block;
  margin-top: 80px;
  margin-left: 80px;
  color: #fff;
}
.p2 {
  display: block;
  margin-top: 30px;
  margin-left: 80px;
  color: #fff;
}
</style>
