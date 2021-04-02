<template>
  <div class="app_container">
    <!-- <Header :flags = flag_class class="header" :flagInfo="infoState"></Header> -->
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="headContent">
      <div class="childContent">
        <el-row>
          <el-col :span="5">
            <div class="imgcolor">
              <img :src="imgURL" alt="pic" class="pic" />
            </div>
          </el-col>
          <el-col :span="19">
            <div class="fontcolor">
              <div class="name">
                {{ schoolDetail.schoolName }}<span>{{ schoolTags[3] }}</span>
              </div>
              <div class="tags">
                <span
                  class="tag"
                  v-for="(item, index) in schoolTags"
                  :key="index"
                  >{{ item }}</span
                >
              </div>
              <!-- <div class="tags">
                <span class="tag">{{ schoolTags[4] }}</span>
                <span class="tag">{{ schoolTags[0] }}</span>
                <span class="tag">{{ schoolTags[1] }}</span>
                <span class="tag">{{ schoolTags[2] }}</span>
              </div> -->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bodyboxContent">
      <div class="bodyContent">
        <div class="title">学校介绍</div>
        <div id="school" class="schoolProfile"></div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import { getSchoolDetails } from "@/api/index";
export default {
  name: "SchoolInfo",
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      imgURL: "",
      majorList: [],
      schoolDetail: [],
      schoolTags: [],
    };
  },
  mounted() {
    // console.log("121", this.$route.query.SchoolName);
    this.initData(this.$route.query.SchoolName);
  },
  computed: {},
  methods: {
    initData(schoolName) {
      var schoolProfile = document.getElementById("school");
      let _this = this;
      console.log("我接受的schoolname");
      //   console.log(typeof schoolName);
      let params = {
        schoolName: schoolName,
      };
      getSchoolDetails(params).then(function (response) {
        console.log(response.data);
        _this.schoolDetails = response.data;
        _this.schoolTags = _this.schoolDetails.schoolDetail.tags;
        _this.schoolDetail = _this.schoolDetails.schoolDetail;
        _this.majorList = _this.schoolDetails.majorList;
        schoolProfile.innerHTML = _this.schoolDetails.schoolDetail.summary;
        _this.imgURL = _this.schoolDetail.logo;
      });
    },
  },
};
</script>
<style scoped>
.app_container {
  background-color: #f3f5f7;
  width: 100%;
  /* height: 100%; */
}
.headContent {
  position: relative;
  width: 100%;
  height: 400px;
  /* background-color: pink; */
  background-color: #e5623f;
  /* background: url("../../assets/02.png"); */
  margin-bottom: 0.5rem;
}
.childContent {
  position: absolute;
  top: 1.25rem;
  left: 2.88rem;
  height: 3.7rem;
  width: 70%;
  background-color: #fff;
  border-radius: 20px;
  padding-top: 1rem;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
}
.bodyboxContent {
  margin: 0 auto;
  width: 80%;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 0.5rem;
}
.bodyContent {
  padding-bottom: 0.5rem;
  margin: 0 auto;
  padding-top: 1.2rem;
  width: 75%;
  /* background-color: pink; */
  border-radius: 20px;
}
.title {
  position: relative;
  height: 32px;
  color: #333;
  font-size: 32px;
  line-height: 32px;
  text-indent: 16px;
  /* background-color: royalblue; */
}
.title::after {
  position: absolute;
  top: -0.03rem;
  left: 0;
  width: 0.08rem;
  height: 0.4rem;
  /* background: #00aff0; */
  background-color: #e5623f;
  border-radius: 4px;
  content: "";
}
.bodyContent .schoolProfile {
  padding-top: 30px;
  font-size: 21px;
}
.imgcolor {
  /* background-color: royalblue; */
  padding-left: 0.6rem;
}
.fontcolor {
  /* background-color: salmon; */
  padding-top: 0.3rem;
}
.childContent .imgcolor .pic {
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
}
.childContent .name {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
}
.childContent .name span {
  padding-left: 20px;
  font-size: 14px;
}
.childContent .tags .tag {
  display: inline-block;
  height: 45px;
  margin-right: 10px;
  padding: 0 16px;
  font-size: 20px;
  line-height: 45px;
  background: #eee;
  border-radius: 15px;
  color: #ff9912;
}
</style>
