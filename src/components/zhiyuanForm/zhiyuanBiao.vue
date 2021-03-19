<template>
  <div class="container">
      <top-header></top-header>
      <HomeHeader class="homeheader" :flagInfo="true"></HomeHeader>
<!--    {{this.$route.params.zhiyuanTable}}-->
    <div class="content">
      <div class="table_head">
        <div class="title">
          志 愿 表 1
          我的成绩：1段 613分 物理,化学,生物
        </div>
        <div class="opration">
          <button>修改</button>
          <button>保存</button>
          <button>导出</button>
        </div>
        <div class="tablecontent">

        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from '@/components/common/topheader'
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer1'
export default {
  name: 'zhiyuanBiao',
  components: {TopHeader, HomeHeader, Footer},
  computed:{

  },
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container{
  background-color: white;
  width: 100%;
}
.homeheader {
  width: 100%;
  margin-top: 20px;
  height: .7rem;
  background-color: #ff5a38 !important;
}
.container .content{
  width: 100%;
  height: 8rem;
  background-color: red;
}
.table_head{
  background-color: green;
}

</style>
