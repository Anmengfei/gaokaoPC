<template>
  <div class="app_container">
    <div class="paycode_style" v-show="show_pay_order">
      <div class="paybox">
        <div class="paybox-title">
          <h3>您存在未支付的订单，请移步订单中心完成支付或取消未支付订单！</h3>
        </div>
        <div>
          <div class="submit-btn2" @click="gotoOrderCenter">移步订单中心</div>
        </div>
      </div>
    </div>
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="cart-head">
      <div class="cart-header-warp">
        <h1>确认订单</h1>
      </div>
    </div>
    <div class="cart-body">
      <div class="title-box">
        <p class="goods-info-title">商品信息:</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-content">
          <img src="/static/img/vip.c657b9e.jpg" alt="" />
          <div class="paymoney">
            <div class="card-info">
              <div class="vip-type">
                <span class="type-item">VIP会员卡</span>
              </div>
              <div class="description">
                <div style="height: 0.08rem"></div>
                <div class="remark-item" style="width: 3.1rem">
                  <span style="color: #ccc; font-size: 0.15rem">适用考生:</span>
                  <span class="value">普通类文理科考生(不含艺术体育类)</span>
                </div>
                <div class="remark-item" style="width: 2.85rem">
                  <span style="color: #ccc; font-size: 0.15rem">适用批次:</span>
                  <span class="value">普通类非提前批</span>
                </div>
                <div style="height: 0.08rem"></div>
                <div class="remark-item" style="width: 2.85rem">
                  <span style="color: #ccc; font-size: 0.15rem">适用范围:</span>
                  <span class="value">仅限本人在高考省份使用</span>
                </div>
                <div class="remark-item" style="width: 2.5rem">
                  <span style="color: #ccc; font-size: 0.15rem">使用日期:</span>
                  <span class="value">有效期至2021-09-01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay_action">
        <span class="pay_text1"> 商品总金额： ¥ 298</span>
        <span class="pay_text2"> 应付： </span>
        <span class="pay_text3"> ¥ 298 </span>
        <!-- <el-button type="warning" round>警告按钮</el-button> -->
        <span class="submit-btn" @click="gotoPay">提交订单</span>
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
import { addPayOrder, getUserInfo } from "@/api/index.js";
export default {
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      userInfoList: [],
      show_pay_order: false,
      code: 0,
    };
  },
  mounted() {
    // getUserInfo(localStorage.getItem("token")).then((res) => {
    //   this.userInfoList = res.data;
    //   console.log("获取用户信息状态");
    //   console.log(this.userInfoList);
    // });
    this.initData();
  },
  methods: {
    initData() {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        console.log('用户信息')
         console.log(res)
        this.userInfoList = res.data;
        var params = {
          phoneNum: this.userInfoList.phoneNum,
        };
        addPayOrder(params).then((res) => {
          this.code = res.code;
          console.log('AAAAAAA',res)
          if (res.code == 517) {
            this.show_pay_order = true;
          }
        });
      });
    },
    gotoPay() {
      if(this.code=517){
        this.$router.push("/myOrder")
      }else{
         this.$router.push("/PayCenter")
      }
      // if (this.code === 0) {
      //   this.$router.push(
      //     "/PayCenter"
      //     //   {
      //     //   path: "/PayCenter",
      //     //   query: {
      //     //     orderId: res.data.orderId,
      //     //   },
      //     // }
      //   );
      // } else if (this.code === 517) {
      //   this.$router.push(
      //     "/myOrder"
      //     //   {
      //     //   path: "/myOrder",
      //     //   query: {
      //     //     orderId: res.data,
      //     //   },
      //     // }
      //   );
      // }
    },
    gotoOrderCenter() {
      this.$router.push("/myOrder");
    },
  },
};
</script>

<style scoped>
.app_container {
  /*background-color: white;*/
  background-color: #f3f5f7;
}
.paycode_style {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  position: fixed;
}
.paybox {
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  padding: 36px;
}
.paybox-title {
  text-align: center;
}
.paybox-title h3 {
  font-size: 20px;
  color: #1c1f21;
  line-height: 24px;
  font-weight: 700;
}
.submit-btn2 {
  width: 148px;
  height: 48px;
  margin: 20px auto;
  line-height: 48px;
  font-size: 16px;
  border-radius: 24px;
  background-color: #f01414;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.submit-btn2:hover {
  border-color: #c20a0a;
  background: #c20a0a;
}
.cart-head {
  height: 260px;
  background-color: #e3e6e9;
  background-image: url("../../assets/cart-header-bg.jpg");
  position: relative;
}
.cart-header-warp {
  /*width: 1200px;*/
  /*height: 220px;*/
  position: absolute;
  top: 50%;
  left: 300px;
  transform: translateY(-50%);
}
.footer {
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
}
.cart-body {
  width: 1400px;
  padding: 0 36px 32px;
  background-color: #fff;
  margin-top: -60px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
}
.title-box {
  padding-top: 40px;
  padding-bottom: 24px;
}
.goods-info-title {
  color: #07111b;
  font-size: 0.25rem;
  line-height: 16px;
}
.detail-box {
  width: 100%;
  padding: 30px;
  background-color: #f3f5f7;
}
.detail-box-content {
  height: 120px;
  clear: both;
  position: relative;
}
.detail-box-content img {
  width: 240px;
  height: 100%;
  float: left;
}
.right-text {
  float: left;
  padding-left: 30px;
  padding-top: 10px;
}
.right-text-con {
  font-size: 24px;
  line-height: 24px;
  color: #07111b;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.paymoney {
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  font-size: 0.2rem;
}
.pay_action {
  margin-top: 60px;
  border-top: 1px solid #d9dde1;
  border-bottom: 1px solid #d9dde1;
  padding-top: 30px;
  padding-bottom: 30px;
}
.pay_text1 {
  font-size: 20px;
}
.pay_text2 {
  font-size: 20px;
  margin-left: 30px;
}
.pay_text3 {
  color: #f01414;
  font-size: 36px;
  font-weight: 700;
}
.submit-btn2 {
  width: 148px;
  height: 48px;
  margin: 20px auto;
  line-height: 48px;
  font-size: 16px;
  border-radius: 24px;
  background-color: #f01414;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.submit-btn2:hover {
  border-color: #c20a0a;
  background: #c20a0a;
}
.submit-btn {
  width: 148px;
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  border-radius: 24px;
  background-color: #f01414;
  color: #fff;
  text-align: center;
  float: right;
  cursor: pointer;
}
.submit-btn:hover {
  border-color: #c20a0a;
  background: #c20a0a;
}
.paycode_style {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  position: fixed;
}
.paybox {
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  padding: 36px;
}
.paybox-title {
  text-align: center;
}
.paybox-title h3 {
  font-size: 20px;
  color: #1c1f21;
  line-height: 24px;
  font-weight: 700;
}
.remark-item {
  display: inline-block;
  vertical-align: top;
}
.remark-item .value {
  font-size: 0.15rem;
  color: rgba(0, 0, 0, 0.8);
}
.card-info {
}
</style>

