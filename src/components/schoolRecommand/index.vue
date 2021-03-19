<template>
  <div class="app_container">
      <top-header></top-header>
      <HomeHeader :flagInfo="true"></HomeHeader>
      <select-type></select-type>
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
    return {};
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.app_container {
  /*background-color: white;*/
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
  height: 70px;
}
</style>
