<template>
<!--  包含内容：欢迎来到大数据智能高考志愿填报平台-->
<!--  考哪儿   选择省份   搜大学-->
  <div>
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
    <div class="mt20 secondRow">
      <el-row :gutter="20">
        <el-col :span="2">
          <img src="../../assets/logo.jpg" class="img-logo m150" />
        </el-col>
        <el-col :span="3">
          <div class="plateName">考哪儿</div>
        </el-col>
        <el-col :span="3">
          <el-select
            v-model="selectProvince"
            placeholder="请选择省份"
            clearable
            class="selectProvinceStyle"
          >
            <el-option
              v-for="dict in provincesList"
              :key="dict"
              :label="dict"
              :value="dict"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="5">
          <el-input
            v-model="searchValue"
            placeholder="搜大学/查专业"
            suffix-icon="el-icon-search"
          ></el-input>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="6">
          <div>
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo">开通VIP</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.m150 {
  margin-left: 50px;
}
.mt20 {
  margin-top: 20px;
}
.bgGrey {
  background-color: rgba(155, 155, 155, 0.3);
  font-size: 14px;
}
.secondRow {
  height: 50px;
  line-height: 50px;
}
.img-logo {
  width: 50px;
  height: 50px;
}
.plateName {
  font-size: 30px;
  font-weight: bolder;
}

li {
  list-style: none;
}

.el-select-dropdown__list li {

  list-style: none;
  padding-left: 30px;
}
li a {
  display: block;
  height: 42px;
  padding: 0 50px;
  text-align: center;
  font-size: 23px;
  line-height: 70px;
  text-decoration: none;
  color: #fff;
}
.ml50 {
  margin-left: 50px;
}

.btn a {
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  color: #00a4ff;
  text-decoration: none;
}

.box-content a {
  color: #00aff0;
}

.sixRow-header a {
  display: block;
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 10px;
  font-weight: bold;
  color: black;
}

.word h6 {
  margin-top: 15px;
}


.word1 h6 {
  margin-top: 15px;
}


.word2 h6 {
  margin-top: 15px;
}


.sevenRow-header a {
  display: block;
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 10px;
  font-weight: bold;
  color: black;
}

.video1-box p {
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 21px;
}

.eightRow dl {
  float: left;
  margin-top: 30px;
  margin-left: 120px;
}
.eightRow dt {
  font-size: 16px;
  color: #fff;
}
.eightRow dl dd {
  margin-top: 10px;
  font-size: 12px;
  color: #7d7d7d;
}

.carousel-img img {
  width: 100%;
  height: 100%;
}


.default-list li {
  float: left;
  margin: 20px 30px 20px 10px;
  background: rgb(255, 255, 255);
  padding: 15px 0px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s linear 0s;
}
.default-list li:hover {
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 8%) 0px 3px 8px 0px;
  transform: translate3d(0px, -8px, 0px);
}

.selectProvinceStyle {
  width: 200px;
  margin-right: 10px;
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
