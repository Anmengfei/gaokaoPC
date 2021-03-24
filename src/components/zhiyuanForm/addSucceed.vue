<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="content">
      <div class="text">
        <div class="img"><img src="../../assets/gotoNext.png" alt="跳转至我的志愿表"></div>
        <div class="info">
          <span class="desc">志愿表保存完成，{{parseInt(count/1000)}}秒后跳转至我的志愿表</span>
          <div class="subdesc">未跳转请<a @click="gotoMyzhiyuanpage">点击此处</a></div>
        </div>
      </div>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
export default {
  name: 'addSucceed',
  components: {TopHeader, HomeHeader, Footer},
  mounted () {
    // 跳转页面函数
    this.gotoMyzhiyuan()
  },
  data () {
    return {
      count: ''// 倒计时
    }
  },
  methods: {
    gotoMyzhiyuan () {
      const TIME_COUNT = 3000
      if (!this.timer) {
        this.count = TIME_COUNT
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count -= 1000
          } else {
            clearInterval(this.timer)
            this.timer = null
            // 跳转至其他界面
            this.$router.push({
              name: 'zhiyuanTable'
            })
          }
        },1000)
      }
    },
    gotoMyzhiyuanpage(){
      // 跳转至其他界面
      this.$router.push({
        name: 'zhiyuanTable'
      })
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container{
  width: 100%;

}
.content{
  /*background-color: greenyellow;*/
  width: 100%;
  height: 50%;
  margin-bottom: 3rem;
}
.content .text{
  /*margin-left: 30%;*/
  padding-top: 10%;
  display: flex;
}
.img{
  flex: 1.5;
 }
.img img{
  padding-left: 6rem;
}
.info{
  flex: 2;
  padding-top: 2%;
}
.desc{
  font-weight: 600;
  font-size: .3rem;
}
.subdesc{
  padding-top: 1%;
}
.subdesc a{
  cursor: pointer;
}

</style>
