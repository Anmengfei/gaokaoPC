<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="VIP">
      <div class="vip-background">
        <div class="vip-content">
          <span class="vipcard" v-if="isShow1">
            <img
              alt="mask"
              class="card-icon"
              src="../../assets/pushimage.png"
            />
          </span>
          <span class="vipcard" v-if="isShow2">
            <img
              alt="mask"
              class="card-icon"
              src="../../assets/pushimage1.png"
            />
          </span>
          <span class="vipcard" v-if="isShow3">
            <img
              alt="mask"
              class="card-icon"
              src="../../assets/pushimage2.png"
            />
          </span>
          <div class="card-info">
            <div class="vip-name">
              <el-row>
                <el-col :span="16">
                  志愿卡VIP
                  <div class="price">
                    ￥
                    <span class="fee">588</span>
                    <div class="price-info">
                      <div class="tag">金榜题名</div>
                      <div class="origin">原价:￥588</div>
                    </div>
                  </div></el-col
                >
                <el-col :span="8">
                  <span class="vipbtn">
                    <button
                      type="button"
                      class="strong-btn"
                      style="width: 180px"
                      @click="applyVIP"
                    >
                      开通VIP
                    </button>
                  </span>
                </el-col>
              </el-row>
            </div>
            <div class="vip-type">
              <span class="type-item" @click="handleClick1">旗舰卡</span>
              <span class="type-item" @click="handleClick2">高级卡</span>
              <span class="type-item" @click="handleClick3">标准卡</span>
            </div>
            <span class="line"></span>
            <div class="description">
              <div style="height: 8px"></div>
              <div class="remark-item" style="width: 285px">
                <span style="color: #ccc; font-size: 10px">适用考生:</span>
                <span class="value">普通类文理科考生(不含艺术体育类)</span>
              </div>
              <div class="remark-item" style="width: 285px">
                <span style="color: #ccc; font-size: 10px">适用批次:</span>
                <span class="value">普通类非提前批</span>
              </div>
              <div style="height: 8px"></div>
              <div class="remark-item" style="width: 285px">
                <span style="color: #ccc; font-size: 10px">适用范围:</span>
                <span class="value"
                  >仅限本人在高考省份使用(西藏、港澳台不适用)</span
                >
              </div>
              <div class="remark-item" style="width: 250px">
                <span style="color: #ccc; font-size: 10px">使用日期:</span>
                <span class="value">有效期至2021-08-31</span>
              </div>
              <div class="remark-item" style="line-height: 12px">
                <span style="color: #ccc; font-size: 10px">咨询热线:</span>
                <span class="value" style="font-size: 12px; margin-right: 0px"
                  >400-992-0062</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="bottom-content">
        <div class="image-wrap">
          <img class="images" src="../../assets/allbusinessimage.png" />
        </div>
        <div class="image-wrap">
          <img class="images" src="../../assets/allbusinessimage2.png" />
        </div>
        <div class="image-wrap">
          <img class="images" src="../../assets/allbusinessimage3.png" />
        </div>
      </div>
    </div>
    <div class="bottom-btn">
      <button class="bottom-strongbtn">开通VIP</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
export default {
  loginStatus: true,
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      isShow1: true,
      isShow2: false,
      isShow3: false,
    };
  },
  methods: {
    handleClick1() {
      this.isShow1 = true;
      this.isShow2 = false;
      this.isShow3 = false;
    },
    handleClick2() {
      this.isShow1 = false;
      this.isShow2 = true;
      this.isShow3 = false;
    },
    handleClick3() {
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow3 = true;
      // console.log("执行了");
    },
    applyVIP(){
        this.msgWarning('功能暂未开通')
    }
  },
};
</script>

<style scoped>
.app_container {
  /*background-color: white;*/
  background-color: #f3f5f7;
}
.vip-background {
  width: 100%;
  height: 560px;
  background: url("../../assets/VIPheader.png") center center no-repeat;
}
.vip-content {
  position: relative;
  width: 1400px;
  height: 100%;
  /* background-color: pink; */
  margin: 0 auto;
  /* min-height: 500px; */
}
.vipcard {
  position: absolute;
  top: 175px;
  left: 0px;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
}
.vipcard .card-icon {
  width: 380px;
  height: 225px;
}
.card-info {
  position: absolute;
  left: 230px;
  top: 155px;
  width: 1300px;
  padding: 44px 0px 44px 250px;
  background: url("../../assets/vip.png") 509px 117px no-repeat
    rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px 0px;
}
.strong-btn {
  background: rgb(255, 150, 31);
  color: rgb(255, 255, 255);
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: center;
  width: 420px;
  height: 45px;
  cursor: pointer;
  width: 180px;
  padding: 0 2px;
  border: 0;
  outline: 0;
}
.vip-name {
  font-weight: bold;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.8);
}
.price {
  display: inline-block;
  margin-left: 20px;
  font-size: 26px;
  color: rgb(255, 150, 31);
  font-weight: 600;
}
.fee {
  font-size: 36px;
}
.price-info {
  display: inline-block;
  margin-left: 8px;
  font-size: 12px;
  font-weight: normal;
}
.tag {
  height: 16px;
  line-height: 16px;
  color: rgb(255, 255, 255);
  padding-left: 10px;
  padding-right: 2px;
  margin-bottom: 4px;
  background: url(https://storage-node.ipin.com/wmzy-pc-static/public/web/images/vip/tag.svg)
    0% 0% / 100% 100% no-repeat;
}
.origin {
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
}
.type-item {
  display: inline-block;
  margin-right: 10px;
  padding: 0px 20px;
  text-align: center;
  width: 110px;
  height: 45px;
  line-height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  /* color: #ccc; */
  /* border: 1px solid rgb(0, 175, 240); */
  /* color: rgb(0, 175, 240); */
}
.type-item:hover {
  border: 1px solid rgb(0, 175, 240);
}
.line {
  display: inline-block;
  width: 20px;
  height: 2px;
  margin-bottom: 4px;
  background-color: rgba(0, 0, 0, 0.5);
}
.remark-item {
  display: inline-block;
  vertical-align: top;
}
.value {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.8);
}
.bottom-content {
  width: 1400px;
  margin: 0 auto;
}
.image-wrap {
  width: 100%;
  text-align: center;
  /* margin: 0 auto; */
  overflow: hidden;
}
.images {
  width: 100%;
}
.bottom-header {
  margin-top: 60px;
}
.bottom-btn {
  text-align: center;
  width: 100%;
  height: 80px;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.6);
}
.bottom-strongbtn {
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: center;
  width: 420px;
  height: 45px;
  cursor: pointer;
  background: rgb(255, 150, 31);
  color: rgb(255, 255, 255);
  line-height: 45x;
  border: 0;
  outline: 0;
}
</style>

