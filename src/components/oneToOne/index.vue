<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader></HomeHeader>
    <div class="expertsBox" :style="{ minHeight: minHeight + 'px'}">
      <el-image
        style="width:100%"
        :src="require('@/assets/1v1.png')"
      />
      <!-- <img src="../../assets/1v1.png" alt=""> -->
      <!-- <div class="img"></div> -->
      <!-- #E5623F -->
      <div class="titleBox">
        <div>
          <span style="font-size:.3rem;color:rgba(40, 94, 165);font-weight:550">志愿填报</span>
          <span style="font-size:.3rem;color:#E5623F;font-weight:600">1V1</span>
          <span style="font-size:.3rem;color:rgba(40, 94, 165);font-weight:550">服务</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">人工智能</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">+</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">大数据</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">+</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">顶级</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">升学规划专家</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">有效防止</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">退档、调档、高分低冀</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">适合考生:</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">河北、山东</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">新高考考生</span>
        </div>

        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">适合批次:</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">本科普通批、艺术批</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">联系我们:</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550"> 400-168-6292</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">邮箱:</span>
          <span style="font-size:.2rem;color:#E5623F;font-weight:550">zkzh_edu@163.com</span>
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
  loginStatus: true,
  components: {TopHeader, HomeHeader, Footer},
  data () {
    return {
      minHeight: 0

    }
  },
  mounted () {
    console.log('html高度是', document.documentElement.clientHeight)
    // 动态设置内容高度，让footer始终居于底部
    this.minHeight = document.documentElement.clientHeight - 50
    // 监听浏览器窗口变化
    window.onresize = function () {
      this.minHeight = document.documentElement.clientHeight - 50
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.app_container {
  background-color: rgba(255, 255, 255);
}

.expertsBox {
  /* position: relative; */
  text-align: center;
}

/* .img{
  background-image: url("../../assets/1v1.png");
  background-repeat: no-repeat;
  background-position: center top;
} */
.titleBox {
  position: relative;
  width: 100%;
  height: 2.3rem;
  background-color: rgba(255, 255, 255);
  /* background-color:rgb(40, 94, 165); */
  top: -0.1rem;
  /* margin-bottom:20px; */
  /* right: 2.5rem; */

}
</style>
