<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () { // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true // 控制视图是否显示的变量
    }
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    reload () {
      this.isRouterAlive = false // 先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true // 再打开
      })
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,body {
    width:100%;
    height: 100%;
  /*overflow:-Scroll;overflow:hidden;*/
  }
 select {
  font-size: 16px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
   line-height: 20px;
}
::-webkit-scrollbar {
  width: .1rem;
  height: .1rem;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc !important;
}
</style>
