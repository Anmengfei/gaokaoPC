<template>
<!--  包含内容：欢迎来到大数据智能高考志愿填报平台-->
<!--  考哪儿   选择省份   搜大学-->
  <div class="app-header">
    <div class="bgGrey">
      <el-row :gutter="20">
        <el-col :span="8">
          <span class="ml50">欢迎来到大数据智能高考志愿填报平台</span>
        </el-col>
        <el-col :span="7"> &nbsp; </el-col>
        <el-col :span="9">
          <el-row :gutter="20">
            <el-col :span="7">
              <span>高考志愿填报QQ群</span>
            </el-col>
            <el-col :span="5">
              <span>手机APP</span>
            </el-col>
            <el-col :span="6">
              <span>微信公众号</span>
            </el-col>
            <el-col :span="6">
              <span>志愿VIP卡激活</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="secondRow">
      <el-row class="logo-search">
        <el-col :span="6">
          <div class="logo">
            <img src="../../assets/logo.jpg" class="img-logo" />
            <div class="plateName">考哪儿</div>
          </div>
        </el-col>
        <el-col :span="12">
          <el-col :span="12">
            <el-select
            v-model="selectProvince"
            placeholder="请选择报考省份"
            clearable
            class="selectProvinceStyle"
          >
            <el-option
              v-for="dict in provincesList"
              :key="dict"
              :label="dict"
              :value="dict"
            ></el-option>
          </el-select></el-col>
          <el-col :span="12"><el-input
            v-model="searchValue"
            placeholder="搜大学/查专业"
            suffix-icon="el-icon-search"
            class="search"
          ></el-input></el-col>
        </el-col>
        <el-col :span="6">
          <div class="desc">
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo">开通VIP</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getAllprovinces} from '@/api/index'
export default {
  name: 'top-header',
  data(){
    return {
      selectProvince:'',
      searchValue:'',
      provincesList:[],

    }
  },
  mounted() {
    this.getProvincesinit()
  },
  methods: {
    getProvincesinit(){
      getAllprovinces().then(res => {
        this.provincesList = res.data
      })
    },
  }

}
</script>

<style scoped>
/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
a {
  text-decoration: none;
}
.app-header{
  width: 100%;
  font-size: 100%;
}
.welcome {
  margin-left: .2rem;
}
.bgGrey {
  background-color: rgba(155, 155, 155, 0.3);
  font-size: .15rem;
}
.bgGrey .el-rows{
  padding: .02rem .01rem;
}
.secondRow {
  height: 50px;
  line-height: 50px;
}
.secondRow .logo-search{
  margin-left: .2rem;
}
.secondRow .logo-search .search{
  margin-top: .1rem;
  width: 80%;
}
.secondRow .logo{
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: .8rem;

}
.secondRow .img-logo {
  width: .65rem;
  height: .65rem;
}
.secondRow .plateName {
  display: inline;
  margin-left: .15rem;
  font-size: .4rem;
  font-weight: 800;
  }

.selectProvinceStyle {
  margin-top: .1rem;
  margin-left: 1rem;
  /*width: 35%;*/
}

.secondRow .desc{
  margin-top: .1rem;
}

.tishiOne {
  border: 1px solid red;
  color: rgb(235, 16, 16);
}
.tishiTwo {
  border: 1px solid red;
  background-color: red;
  color: white;
}

</style>
