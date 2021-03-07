<template>
  <div>
    <div class="footer-content">
      <div class="footer-color">
        <div class="footer-text">
          <div class="footer-text-title">
            <span class="a-text" @click="gotoAboutUs">关于我们</span>
            <span class="a-text">联系我们</span>
            <span class="a-text">常见问题</span>
            <span class="a-text" @click="gotoLink">友情链接</span>
            <span class="a-text" @click="gotoCooper">合作联系</span>
          </div>
          <div class="line-text"></div>
          <div class="footer-text-content">
            <span>青程在线</span>
          </div>
          <div class="footer-text-content2">
            <span>智慧编程 · 青程倾心</span>
          </div>
          <div class="footer-text-content2">
            <span>Copyright&nbsp;&nbsp;中科智禾教育大数据中心 ©2019</span>
          </div>
          <!-- <div class="code-bg">
            <img src="../../assets/code-img.jpg">
          </div> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  methods: {
    gotoAboutUs () {
      this.$router.push('/AboutUs')
    },
    gotoLink () {
      this.$router.push('/BlogRoll')
    },
    gotoCooper () {
      this.$router.push('/cooperation')
    }
  }
}
</script>

<style scoped>
 .footer-content {
   height: 420px;
   background-image: url("../../assets/footer-img2.png");
   background-size: 100% 100%;

 }
  .footer-color {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/footer-bg.png");
    background-size: 100%;
    background-position: bottom;

  }
  .footer-text {
    width: 1500px;
    margin: 0 auto;
    padding-top: 68px;
    position: relative;
    height: 420px;
  }
  .a-text {
    margin-right: 30px;
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    font-family: 'STKaiti';
    cursor: pointer;
  }
  .line-text {
    width: 765px;
    height: 1px;
    border-bottom: white solid 1px;
    margin-top: 28px;
  }
  .footer-text-content {
    margin-top: 30px;
    font-size: 34px;
    /*font-family: 'STKaiti';*/
    color: white;
    letter-spacing: 5px;
    /*font-weight: bold;*/
  }
  .footer-text-content2 {
    margin-top: 20px;
    /*font-family: 'STKaiti';*/
    /*font-weight: bold;*/
    color: white;
    font-size: 28px;
    letter-spacing: 4px;
  }
  .code-bg {
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 10px;
  }
  .code-bg img {
    width: 100%;
    height: 100%;
  }
  .a-text:hover {
    color: #99a1a6;
  }
</style>
