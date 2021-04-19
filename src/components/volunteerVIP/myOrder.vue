<template>
  <div class="app_container">
    <div class="paycode_style" v-show="show_cancel_order">
      <div class="paybox">
        <div class="paybox-title">
          <div>
            <i class="iconfont ymq-icongaojingkongxin"></i>
          </div>
          <h3>取消订单之后将无法恢复，是否继续？</h3>
        </div>
        <div class="button-styles">
          <el-button type="info" class="cancel_button" @click="close_cancel"
            >再想想</el-button
          >
          <el-button type="text" class="cancel_button2" @click="cancel_submit"
            >确定</el-button
          >
        </div>
      </div>
    </div>
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="cart-head">
      <div class="cart-header-warp">
        <h1>订单中心</h1>
      </div>
    </div>
    <div class="cart-body">
      <div class="title-box">
        <i class="el-icon-edit"></i>
        <p class="goods-info-title">订单编号:{{ orderId }}</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-content">
          <img src="../../assets/vip1.png" alt="" />
          <span class="pay_text1"> 商品总金额： ¥ 298</span>
          <span class="pay_text2"> 应付： </span>
          <span class="pay_text3"> ¥ 298 </span>
          <el-button class="payBtn" type="danger" round @click="gotoPay()"
            >立即支付</el-button
          >
          <el-link type="info" class="deleteBtn" @click="cancel_order()"
            >取消订单</el-link
          >
        </div>
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
import { getUserInfo, delPayOrder, addPayOrder } from "@/api/index.js";
export default {
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      isShow: "true",
      orderId: "",
      show_cancel_order: false,
      userInfoList: [],
      orderList: [],
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getUserInfo(localStorage.getItem("token")).then((res) => {
        this.userInfoList = res.data;
        var params = {
          phoneNum: this.userInfoList.phoneNum,
        };
        addPayOrder(params).then((res) => {
          this.code = res.code;
          if (res.code == 517) {
            this.orderId = res.data;
          } else if (res.code == 0) {
            this.orderId = res.data.outTradeNo;
          }
        });
      });
    },
    gotoPay() {
      this.$router.push("/PayCenter");
    },
    cancel_order() {
      this.show_cancel_order = true;
    },
    cancel_submit() {
      var params = {
        outTradeNo: this.orderId,
      };
      delPayOrder(params).then((res) => {
        console.log("张伟测试删除数据功能");
        console.log(res);
        this.show_cancel_order = false;
        document.body.style.overflow = "";
        this.$notify({
          title: "订单删除成功",
        });
        this.$router.push("/volunteerVIP");
      });
    },
    close_cancel() {
      this.show_cancel_order = false;
      document.body.style.overflow = "";
    },
  },
  created() {},
};
</script>
<style scoped>
.app_container {
  /*background-color: white;*/
  background-color: #f3f5f7;
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
.paycode_style {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  position: fixed;
}
.paybox {
  /*width: 400px;*/
  /*height: 450px;*/
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
.paybox-title i {
  font-size: 60px;
}
.paybox-title h3 {
  font-size: 20px;
  color: #1c1f21;
  line-height: 24px;
  font-weight: 700;
}
.button-styles {
  margin-top: 20px;
  float: right;
}
.cancel_button {
  border-radius: 20px;
}
.cancel_button2 {
  font-size: 20px;
  color: #1c1f21;
}
.cancel_button2:hover {
  color: red;
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
  padding-bottom: 0.5rem;
}
.title-box {
  padding-top: 40px;
  padding-bottom: 24px;
  /* background-color: pink; */
}
.el-icon-edit {
  float: left;
  font-weight: 600;
  font-size: 1.4em;
}

.goods-info-title {
  display: block;
  margin-left: 0.03rem;
  float: left;
  color: #07111b;
  font-size: 20px;
  line-height: 22px;
}
.detail-box {
  width: 100%;
  margin-top: 0.2rem;
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
  right: 250px;
  transform: translateY(-50%);
  color: #f01414;
  font-size: 20px;
}
.pay_action {
  margin-top: 60px;
  /* border-top: 1px solid #d9dde1;
  border-bottom: 1px solid #d9dde1; */
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f3f5f7;
}
.pay_text1 {
  margin-left: 0.3rem;
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
.payBtn {
  margin-left: 4rem;
}
.deleteBtn {
  margin-left: 0.3rem;
}
</style>
