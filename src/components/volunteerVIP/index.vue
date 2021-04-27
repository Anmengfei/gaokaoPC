<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="VIP">
      <div class="vip-background">
        <div class="vip-content">
          <span class="vipcard" v-show="isShow1">
            <img alt="mask" class="card-icon" src="../../assets/vip1.png" />
          </span>
          <span class="vipcard" v-show="!isShow1">
            <img alt="mask" class="card-icon" src="../../assets/vip2.jpg" />
          </span>
          <div class="card-info">
            <div class="vip-name">
              <el-row>
                <el-col :span="16">
                  志愿卡VIP
                  <div class="price">
                    ￥
                    <span class="fee">{{youhuimoney}}</span>
                    <div class="price-info">
                      <div class="origin">原价:￥{{yuanmongey}}</div>
                    </div>
                  </div></el-col
                >
                <el-col :span="8">
                  <span class="vipbtn">

                    <el-button
                      type="warning"
                      class="strong-btn"
                      v-if="vip == 1"
                      disabled
                      plain
                      >已开通VIP</el-button
                    >
                    <button
                      type="button"
                      class="strong-btn"
                      v-else
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
              <span class="type-item" @click="handleClick1">VIP会员卡</span>
            </div>

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
                <span class="value">仅限本人在高考省份使用</span>
              </div>
              <div class="remark-item" style="width: 250px">
                <span style="color: #ccc; font-size: 10px">使用日期:</span>
                <span class="value">有效期至2021-09-01</span>
              </div>
              <div class="remark-item" style="width: 250px">
                <span style="color: #ccc; font-size: 10px">咨询热线:</span>
                <span class="value" style="font-size: 12px; margin-right: 0px"
                  >400-168-6292</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="bottom-header">-->
<!--      <div class="bottom-content">-->
<!--        <div class="image-wrap">-->
<!--          &lt;!&ndash;          <img class="images" src="../../assets/allbusinessimage.png" />&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="image-wrap">-->
<!--          <img class="images" src="../../assets/allbusinessimage2.png" />-->
<!--        </div>-->
<!--        <div class="image-wrap">-->
<!--          &lt;!&ndash;          <img class="images" src="../../assets/allbusinessimage3.png" />&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="bottom-btn">-->
<!--      <button class="bottom-strongbtn">开通VIP</button>-->
<!--    </div>-->
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import { getUserInfo, getyouhuimoney, getyuanmoney } from '@/api/index'
export default {
  loginStatus: true,
  components: { TopHeader, HomeHeader, Footer },
  data () {
    return {
      isShow1: true,
      yuanmongey: '498',
      youhuimoney: '298',
      vip: this.$store.state.vip
    }
  },
  watch: {
    '$route' (to, from) {
      this.getInfo()
    }
  },
  mounted () {
    this.getInfo()
    this.getmoney()
  },
  methods: {
    getmoney () {
      getyouhuimoney().then(res => {
        this.youhuimoney = res.data
      })
      getyuanmoney().then(res => {
        this.yuanmongey = res.data
      })
    },
    handleClick1 () {
      this.isShow1 = !this.isShow1
    },
    applyVIP () {
      // this.msgWarning('功能暂未开通')
      if (localStorage.getItem('token') != null) {
        this.$router.push('/OrderCenter')
      } else {
        this.$message({
          message: '登陆后，即可开通VIP!',
          type: 'warning',
          duration: 600,
          onClose: () => {
            this.$store.dispatch('getShowLogin', true)
          }
        })
      }

      // this.$router.push("/PayCenter");
    },
    getInfo () {
      if (localStorage.getItem('token') != null) {
        getUserInfo().then((res) => {
          this.vip = res.data.vip
        })
      }
    }
  }
}
</script>

<style scoped>
.app_container {
  background-color: #f3f5f7;
}
.VIP {
  height: 600px;
  /*background-color: #1a1816;*/
}
.vip-background {
  width: 100%;
  height: 600px;
  background: url("../../assets/bg.png") center center no-repeat;
}
.vip-content {
  position: relative;
  width: 1400px;
  height: 100%;
  margin: 0 auto;
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
}
.strong-btn {
  background: rgb(255, 150, 31);
  color: rgb(255, 255, 255);
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: center;
  height: 45px;
  cursor: pointer;
  width: 180px;
  padding: 0 2px;
  border: 0;
  outline: 0;
}
.el-button--primary.is-disabled,
.el-button--primary.is-disabled:active,
.el-button--primary.is-disabled:focus,
.el-button--primary.is-disabled:hover {
  color: #fff;
  background-color: rgb(255, 150, 31);
  border-color: rgb(255, 150, 31);
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
  width: 150px;
  height: 45px;
  line-height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
}
.type-item:hover {
  border: 1px solid rgb(0, 175, 240);
}

.remark-item {
  display: inline-block;
  vertical-align: top;
}
.value {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.8);
}
</style>
