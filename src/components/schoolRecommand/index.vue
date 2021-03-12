<template>
    <div class="app_container">
      <div>
        <top-header></top-header>
      </div>
        <div class="mt20 thirdRow">
<!--            <HomeHeader :flagInfo="loginStatus"></HomeHeader>-->
            <HomeHeader :flagInfo="true"></HomeHeader>
        </div>
      <div>
        <select-type></select-type>
      </div>
      <Footer></Footer>

    </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
import CjList from './schoolList'
import SelectType from '../schoolRecommand/selectType'
export default {
  name: 'SchoolRecommand',
  loginStatus:true,
  components: {TopHeader, HomeHeader, Footer, CjList, SelectType},
  data() {
    return {}
  },
  methods: {}
}

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
  background-color: white;
}
.mt20 {
  margin-top: 20px;
}
.thirdRow {
  background-color: #f95e5a;
  width: 100%;
  height: 70px;

}
</style>
