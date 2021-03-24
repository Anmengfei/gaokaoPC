<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    <div class="container">

    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
export default {
  name: 'zhiyuanTable',
  components: {TopHeader, HomeHeader, Footer},
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container {
  width: 100%;
}

</style>
