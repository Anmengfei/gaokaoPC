<template>
  <div class="container">
    <top-header></top-header>
    <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
    123456789
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
export default {
  name: 'addSucceed',
  components: {TopHeader, HomeHeader, Footer}
}
</script>

<style scoped>

</style>
