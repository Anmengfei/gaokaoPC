<template>
  <div class="app_container">
    <el-dialog
      :visible.sync="code_show"
      class="dialogPay"
      @close="closeClick()"
    >
      <div>
        <h1>微信支付 ¥ 298</h1>
        <img :src="Paycode" />
        <p>使用微信扫描二维码付款</p>
      </div>
    </el-dialog>
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="cart-head">
      <div class="cart-header-warp">
        <h1>支付中心</h1>
      </div>
    </div>
    <div class="cart">
      <div class="cart-header">
        <span>订单编码：{{ orderId }}</span>
        <div class="card-box">
          <img class="card-icon" src="/static/img/vip.c657b9e.jpg" alt="" />
          <span class="card-title">考哪儿 会员卡</span>
          <div class="card-info">
            <div class="card-remark">
              <div class="remark-item" style="width: 285px">
                <span>适用考生</span>
                <span>普通类文理科考生(不含艺术体育类)</span>
              </div>
              <div class="remark-item" style="width: auto">
                <span>适用批次</span>
                <span>普通类非提前批</span>
              </div>
              <div style="height: 8px"></div>
              <div class="remark-item" style="width: 285px">
                <span>适用范围:</span>
                <span class="value"
                  >仅限本人在高考省份使用(西藏、港澳台暂不使用)</span
                >
              </div>
              <div class="remark-item" style="width: auto">
                <span>使用日期</span>
                <span class="value">有效期至2021-8-31</span>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-title">
          <span class="primary-line"></span>
          <span class="title">选择支付方式</span>
        </div>
        <div class="payMethods">
          <el-radio v-model="radio" label="1" border
            ><img
              class="wechatImg"
              src="../../assets/微信图标.png"
              alt=""
            />&nbsp;&nbsp;<span>微信支付</span></el-radio
          >
          <el-radio v-model="radio" label="2" border>
            <img
              class="wechatImg"
              src="../../assets/支付宝图标.png"
              alt=""
            />&nbsp;&nbsp;<span>支付宝</span>
          </el-radio>
        </div>
        <div class="bottom-panel">
          <div class="info-panel">
            <div class="price">
              <span class="item"> 商品原价: ￥298 </span>
              <span class="item">
                实付金额:
                <span class="enum">￥</span>
                <span class="fee">298</span>
              </span>
            </div>
            <div class="protocol">
              点击立即支付按钮即表示你已同意
              <span data-track="10500">《智禾考哪儿会员服务协议》</span>
            </div>
          </div>
          <div class="payClass">
            <el-button
              type="primary"
              style="width: 1.2rem; height: 0.5rem"
              @click="pay_submit()"
              >立即支付</el-button
            >
          </div>
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
import { getUserInfo, addPayOrder, orderPayState } from "@/api/index.js";
export default {
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      radio: "1",
      userInfoList: [],
      Paycode: "",
      code_show: false,
      maver: "",
      orderId: "",
      checkCode: "",
    };
  },
  mounted() {
    // this.orderId = this.$route.query.orderId;
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
    pay_submit() {
      // var url = `https://www.zytb.top/NEMT/gk/PCpay/weiXinPay?phoneNum=${this.userInfoList.phoneNum}`;
      // var url = `https://www.zytb.top/NEMT/gk/PCpay/weiXinPay?phoneNum="13465631985"`;
      var url = `https://www.zytb.top/NEMT/gk/PCpay/weiXinPay?out_trade_no=${this.orderId}`;
      this.Paycode = url;
      this.code_show = true;
      this.maver = setInterval(() => {
        this.checkPay();
      }, 1000);
    },
    checkPay() {
      // var params = { out_trade_no: this.orderId };
      // orderPayState(params).then((res) => {
      //   console.log("VVV" + res);
      // });

      var url = `https://www.zytb.top/NEMT/gk/PCpay/orderPayState?out_trade_no=${this.orderId}`;
      this.$axios
        .get(url, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          console.log("AAA" + res.data.code);
          // console.log("BBB" + res.data.msg);
          this.checkCode = res.data.code;
          // console.log(res.data.msg);
          console.log("hahahahah+++++" + this.checkCode);
          if (this.checkCode === 1) {
            this.code_show = false;
            document.body.style.overflow = "";
            clearInterval(this.maver);
            this.PaySuccessPage();
          }
        });
    },
    PaySuccessPage() {
      this.$message({ type: "success", message: "支付成功" });
      getUserInfo().then((res) => {
        this.$store.dispatch("getVip", res.data.vip);
        localStorage.setItem('state', JSON.stringify(this.$store.state))
      });
      // alert("支付成功！欢迎下次光临");
      this.$router.push("/volunteerVIP");
    },
    closeClick() {
      clearInterval(this.maver);
    },
  },
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
  /* margin-top: 0.3rem; */
}
.cart {
  position: relative;
  top: -1rem;
  width: 14rem;
  height: 7rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  background-color: #fff;
  padding-top: 0.6rem;
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  -webkit-box-shadow: 0 0.05rem 0.1rem 0 rgb(0 0 0 / 10%);
  box-shadow: 0 0.05rem 0.1rem 0 rgb(0 0 0 / 10%);
}
.cart-header {
  width: 12rem;
  margin: 0 auto;
}
.cart-header-wrap {
  position: absolute;
  top: 50%;
  left: 300px;
  transform: translateY(-50%);
}
.card-box {
  width: 12rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 0.3rem;
}
.card-box .card-icon {
  width: 2.5rem;
  height: 1.3rem;
  vertical-align: middle;
  border-radius: 0.1rem;
}
.card-title {
  display: inline-block;
  width: 2rem;
  margin-left: 20px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  vertical-align: middle;
}
.card-info {
  display: inline-block;
  width: 600px;
  vertical-align: middle;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 16px;
  text-align: right;
}
.card-info .card-remark {
  display: inline-block;
  text-align: left;
}
.card-info .card-remark .remark-item {
  display: inline-block;
  vertical-align: top;
}
.card-remark .remark-item .value {
  color: rgba(0, 0, 0, 0.8);
}
.panel-title {
  position: relative;
  font-size: 0.3rem;
  height: 0.3rem;
  line-height: 0.338rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0.6rem 0px 0.6rem;
  padding-left: 0.2rem;
}
.panel-title .primary-line {
  position: absolute;
  top: 0.02rem;
  left: 0.05rem;
  display: inline-block;
  width: 0.06rem;
  height: 0.3rem;
  border-radius: 0.03rem;
  background-color: #e5623f !important;
}
.wechatImg {
  height: 0.4rem;
  width: 0.4rem;
}
.payMethods {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.bottom-panel {
  float: right;
  margin-top: 0.3rem;
  text-align: right;
  /* border-top: 1px solid rgba(0, 0, 0, 0.3); */
  /* background-color: pink; */
}
.info-panel {
  float: left;
  display: inline-block;
  margin-right: 20px;
  /* background-color: #e5623f; */
}
.info-panel .price {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
}
.info-panel .price .item {
  margin-left: 30px;
}
.info-panel .price .enum {
  font-weight: 500;
  color: rgb(255, 150, 31);
}
.info-panel .price .fee {
  font-size: 30px;
  font-weight: 500;
  color: rgb(255, 150, 31);
}
.info-panel .protocol {
  margin-top: 7px;
  font-size: 12px;
  color: rgb(51, 51, 51);
}
.info-panel .protocol span {
  color: rgb(0, 175, 240);
  cursor: pointer;
}
.el-button--primary {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 150, 31);
  border-color: rgb(255, 150, 31);
}
.payClass {
  float: left;
  margin-top: 0.1rem;
}
.el-button {
  /* margin-bottom: 30px; */
  font-size: 0.17rem;
  border-radius: 10px;
  letter-spacing: 0px;
  cursor: pointer;
}
.el-radio.is-bordered {
  height: 0.9rem;
  width: 2.4rem;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 10px;
}
.el-radio.is-bordered.is-checked {
  border-color: rgb(0, 175, 240);
}
/deep/ .el-radio__label {
  font-size: 0.3rem;
}
.dialogPay {
  width: 1000px;
  height: 800px;
  border-radius: 10px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px;
}
.dialogPay h1 {
  color: #545c63;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
}
.dialogPay img {
  width: 350px;
  height: 350px;
}
.dialogPay p {
  font-size: 14px;
  color: #545c63;
  line-height: 18px;
  text-align: center;
}
</style>

