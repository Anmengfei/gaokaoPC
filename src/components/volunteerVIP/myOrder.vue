<template>
  <div class="app_container">
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
        <p class="goods-info-title">订单编号:</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-content">
          <img src="/static/img/vip.c657b9e.jpg" alt="" />
          <!-- <div class="right-text">
            <span class="right-text-con"></span>
          </div> -->
          <!-- <div class="paymoney">￥ 298</div> -->
          <span class="pay_text1"> 商品总金额： ¥ 298</span>
          <span class="pay_text2"> 应付： </span>
          <span class="pay_text3"> ¥ 288 </span>
          <el-button class="payBtn" type="danger" round>立即支付</el-button>
          <el-link type="info" class="deleteBtn">取消订单</el-link>
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
export default {
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
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
}
.el-icon-edit {
  float: left;
}
.goods-info-title {
  display: block;
  float: left;
  margin-left: 0.1rem;
  color: #07111b;
  font-size: 20px;
  line-height: 16px;
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