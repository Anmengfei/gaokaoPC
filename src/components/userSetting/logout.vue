<template>
  <div class="logout">
    <span @click="gotoLogin">登录</span> &nbsp;&nbsp;| &nbsp;&nbsp;
    <span @click="gotoRegister">注册</span>
  </div>
</template>

<script>
export default {
  name: 'logout',
  methods: {
    gotoLogin () {
      alert(1)
      // this.$router.push('/login')
    },
    gotoRegister () {
      alert(2)
      // this.$router.push('/login')
    },
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
