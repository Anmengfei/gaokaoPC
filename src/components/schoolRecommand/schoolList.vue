<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="冲（**）" name="first">
      <div class="container">
        <ul>
          <li>
            <div class="icon">
              <img src="https://storage-oss.ipin.com/school-icon/52ac2e9a747aec013fcf5190.jpg">
            </div>
            <div class="desc">
              <div><a href="#">北京大学</a></div>
              <div>985 211 双一流</div>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="https://storage-oss.ipin.com/school-icon/52ac2e9a747aec013fcf5190.jpg">
            </div>
            <div class="desc">
              <div>北京大学</div>
              <div>985 211 双一流</div>
            </div>
          </li>
        </ul>
      </div>

    </el-tab-pane>
    <el-tab-pane label="稳（**）" name="second">稳</el-tab-pane>
    <el-tab-pane label="保（**）" name="third">保</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'schoolList',
  methods: {

  }

}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-size: 100%;
}

.container ul li{
  overflow: hidden;
  margin-top: 1%;
}
.container .desc{
  float: left;
  padding-top: .2rem;
  padding-bottom: .2rem;
  padding-left: .4rem;
}
.container .icon {
  float: left;
  margin-left: 1%;
}
.container .icon img {
  /*float: left;*/
  width: 95px;
  height: 95px;
}

</style>
