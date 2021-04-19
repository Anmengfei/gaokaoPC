<template>
  <div class="app_container">
    <top-header></top-header>
    <HomeHeader ></HomeHeader>
    <div class="expertsBox">
      <el-image
        :src="require('@/assets/1v1.png')"/>
      <!-- <img src="../../assets/1v1.png" alt=""> -->
      <!-- <div class="img"></div> -->
      <div class="titleBox">
        <div>
          <span style="font-size:.3rem;color:rgba(40, 94, 165);font-weight:550">志愿填报</span>
          <span style="font-size:.3rem;color:rgba(255, 238, 0);font-weight:600">1V1</span>
          <span style="font-size:.3rem;color:rgba(40, 94, 165);font-weight:550">服务</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">人工智能</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">+</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">大数据</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">+</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">顶级</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">升学规划专家</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">有效防止</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">退档、调档、高分低冀</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">适合考生:</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">河北、山东</span>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">新高考考生</span>
        </div>
        <!-- #E5623F -->
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">适合批次:</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">本科普通批、艺术批</span>
        </div>
        <!-- <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">联系我们:</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">13381173397</span>
        </div>
        <div>
          <span style="font-size:.2rem;color:rgba(40, 94, 165);font-weight:550">邮箱:</span>
          <span style="font-size:.2rem;color:rgba(255, 238, 0);font-weight:550">zkzh_edu@163.com</span>
        </div> -->
      </div>
    </div>
    

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
  methods: {
    // goto1v1(){
    //   this.msgWarning('功能暂未开通')
    // }
  },
};
</script>

<style scoped>

.app_container {
  background-color: #f3f5f7;
}

.expertsBox{
  position: relative;
  text-align: center;
}

/* .img{
  background-image: url("../../assets/1v1.png");
  background-repeat: no-repeat;
  background-position: center top;
} */
.titleBox{
  position: absolute;
  width: 4rem;
  height: 1.6rem;

  background-color:  rgba(255, 255, 255 , 0);
  /* background-color:rgb(40, 94, 165); */
  top: 0.3rem;
  right: 2.5rem;

}
</style>

