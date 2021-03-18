<template>
  <div class="logout">
    <span @click="gotoLogin">登录</span>
  </div>
</template>

<script>
export default {
  name: 'logout',
  methods: {
    // gotoLogin: function () {
    //   alert(123);
    // },
    gotoLogin () {
      alert(12345)
      // this.$router.push('/login')
    },
    gotoRegister () {
      alert(2)
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.logout {
  color: white;
  font-size: 20px;
  /*height: 40px;*/
  /*line-height: 40px;*/
  /*width: 150px;*/
  text-align: center;
}
/*.logout:hover {*/
/*color: white;*/
/*cursor: pointer;*/
/*}*/
</style>
