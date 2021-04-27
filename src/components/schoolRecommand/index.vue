<template>
  <div class="app_container">
    <div class="header">
        <top-header></top-header>
        <HomeHeader ></HomeHeader>
    </div>
    <div class="content" :style="{ minHeight: minHeight + 'px'}">
        <select-type></select-type>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
import CjList from "./schoolList";
import SelectType from "../schoolRecommand/selectType";
export default {
  name: "SchoolRecommand",
  loginStatus: true,
  components: { TopHeader, HomeHeader, Footer, CjList, SelectType },
  data() {
    return {
      minHeight:0
    };
  },
  mounted(){
    console.log('html高度是',document.documentElement.clientHeight)
    // 动态设置内容高度，让footer始终居于底部
    this.minHeight=document.documentElement.clientHeight-50
    // 监听浏览器窗口变化
    window.onresize=function(){
      this.minHeight=document.documentElement.clientHeight-50
    }
  },
  methods: {

  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.app_container {
  /*background-color: white;*/
  display:flex;
  flex-direction:column;
  min-height: 100%;
  background-color: #f3f5f7;
}

.mt20 {
  margin-top: 20px;
}

.thirdRow {
  /*background-color: #f95e5a;*/
  background-color: #e5623f;
  /* background-color: #f95e5a; */
  width: 100%;
  height: 0.7rem;
}
</style>
