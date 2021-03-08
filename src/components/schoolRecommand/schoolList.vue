<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="冲（**）" name="first">
      <div class="container">
        <ul>
          <li v-for="(item,index) in this.schoolList" :key="index">
            <div class="icon">
              <img :src="item.logo">
            </div>
            <div class="desc">
              <div>
                <span class="name">{{ item.schoolname }}</span>
                <span class="province">{{ item.province }}</span>
              </div>
              <div class="schooltags">
                <span v-for="(itemtag,index) in item.tags" :key="index">{{ itemtag }}</span>
              </div>
            </div>
            <div class="smallSanjiao"><button type="button" class="chooseMajor">选择意向专业<img src="../../assets/drop_down_menu.png"></button></div>
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
  props: {
    schoolList: Object
  },
  data () {
    return {
      activeName: 'first'

    }
  },
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
  border-bottom: .001rem dashed #e4e4e4;
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
  width: 1rem;
  height: 1rem;
}
.container .desc .schooltags span{
  display: inline-block;
  margin-right: .25rem;
  margin-top: .1rem;
  padding: .1rem .15rem;
  color: rgb(153, 153, 153);
  font-size: .05rem;
  border: .02rem solid rgb(228, 228, 228);
  border-radius: .15rem;
}
.container .desc .name {
  font-weight: 800;
}
.container .desc .province{
  font-size: .15rem;
  margin-left: .2rem;
}
.container .chooseMajor {
  margin-top: .2rem;
  float: right;
  border:.02rem solid #00aff0;
  padding: .1rem;
  border-radius: .08rem;
  font-size: .1rem;
  background-color: transparent;
  outline: none;

}
.container .chooseMajor img{
  height: .25rem;
  border-radius: .2rem;
  letter-spacing: 0;
}
.container .smallSanjiao {
  float: right;

}

</style>
