<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader ></HomeHeader>
    <div style="text-align: center">
      <el-image
        :src="require('@/assets/1v1.png')"
        @click="goto1v1"/>
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
  components: { TopHeader, HomeHeader, Footer},
  data() {
    return {};
  },
  methods: {
    goto1v1(){
      this.msgWarning('功能暂未开通')
    }
  },
};
</script>

<style scoped>

.app_container {
  background-color: #f3f5f7;
}
</style>

