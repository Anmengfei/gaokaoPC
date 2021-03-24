<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader ></HomeHeader>
    <H3>志愿VIP</H3>
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
  methods: {},
};
</script>

<style scoped>

.app_container {
  /*background-color: white;*/
  background-color: #f3f5f7;
}
</style>

