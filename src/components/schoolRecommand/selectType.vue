<template>
  <div class="box">
    <div class="box1">
      <el-tabs v-model="selectTabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="心仪的院校" name="favoriteSchool">
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="2" >
                所在区域
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="checkboxList" >
                  <el-checkbox v-for="(item, index) in  originList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="2">
                院校类型
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="schoolboxList" >
                  <el-checkbox v-for="(item, index) in  schoolList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row v-if="!showAll">
              <div class="tiaojian" @click="zhakai">展开更多筛选条件</div>
            </el-row>
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="2">
                院校层次
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="cengciboxList" >
                  <el-checkbox v-for="(item, index) in  cengciList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                办学性质
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="xingzhiboxList" >
                  <el-checkbox v-for="(item, index) in  xingzhiList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                研究生点
              </el-col>
              <el-col :span="16">
                <el-radio-group v-model="yjsPoint">
                  <el-radio :label="0" :disabled="isVip">不限</el-radio>
                  <el-radio :label="1" :disabled="isVip">有</el-radio>
                  <el-radio :label="2" :disabled="isVip">无</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                独立学院
              </el-col>
              <el-col :span="16">
                <el-radio-group v-model="dlxueyuan">
                  <el-radio :label="0" :disabled="isVip">不限</el-radio>
                  <el-radio :label="1" :disabled="isVip">是</el-radio>
                  <el-radio :label="2" :disabled="isVip">否</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row v-if="showAll">
              <div class="tiaojian" @click="zhedie">收起筛选条件</div>
            </el-row>
            <el-divider></el-divider>
            <p class="tishixinghao">“*”表示排名来源于一分一段表，否则源于录取数据。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="喜欢的专业" name="favoriteMajor">
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="2" >
                所在区域
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="checkboxList" >
                  <el-checkbox v-for="(item, index) in  originList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="2">
                院校类型
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="schoolboxList" >
                  <el-checkbox v-for="(item, index) in  schoolList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row v-if="!showAll">
              <div class="tiaojian" @click="zhakai">展开更多筛选条件</div>
            </el-row>
            <el-row :gutter="20" v-if="showAll">
              <el-col :span="2">
                院校层次
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="cengciboxList" >
                  <el-checkbox v-for="(item, index) in  cengciList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                办学性质
              </el-col>
              <el-col :span="16">

                <el-checkbox-group v-model="xingzhiboxList" >
                  <el-checkbox v-for="(item, index) in  xingzhiList" :label="item" :key="index" :disabled="isVip"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                研究生点
              </el-col>
              <el-col :span="16">
                <el-radio-group v-model="yjsPoint">
                  <el-radio :label="0" :disabled="isVip">不限</el-radio>
                  <el-radio :label="1" :disabled="isVip">有</el-radio>
                  <el-radio :label="2" :disabled="isVip">无</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-if="showAll" class="mt05">
              <el-col :span="2">
                独立学院
              </el-col>
              <el-col :span="16">
                <el-radio-group v-model="dlxueyuan">
                  <el-radio :label="0" :disabled="isVip">不限</el-radio>
                  <el-radio :label="1" :disabled="isVip">是</el-radio>
                  <el-radio :label="2" :disabled="isVip">否</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row v-if="showAll">
              <div class="tiaojian" @click="zhedie">收起筛选条件</div>
            </el-row>
            <el-divider></el-divider>
            <p class="tishixinghao">“*”表示排名来源于一分一段表，否则源于录取数据。</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="box2">
      <school-list></school-list>
    </div>
  </div>
</template>

<script>
import SchoolList from '../schoolRecommand/schoolList'
export default {
  name: 'selectType',
  components: { SchoolList },
  data () {
    return {
      selectTabs: 'favoriteSchool',
      checkboxList: ['不限'],
      showAll: false,
      loginStatus: true,
      cjLable: '可冲击20',
      wtLabel: '较稳妥30',
      bdLabel: '可保底90',
      isVip: true,
      yjsPoint: 0,
      dlxueyuan: 0,
      originList: ['不限', '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '山西', '甘肃',
        '青海', '宁夏', '新疆', '台湾', '香港', '澳门'],
      schoolList: ['不限', '综合', '工科', '农业', '林业', '医药', '师范', '语言', '财经', '政法', '体育', '艺术', '民族'],
      cengciList: ['不限', '985', '211', '双一流'],
      xingzhiList: ['不限', '公立大学', '民办高校'],

      schoolboxList: ['不限'],
      cengciboxList: ['不限'],
      xingzhiboxList: ['不限']
    }
  },
  methods: {
    handleClick () {},
    zhakai () {
      this.showAll = true
    },
    zhedie () {
      this.showAll = false
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
}
div {
  display: block;
}
.box{
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}
.box1{
  margin-top: 2%;
  background-color: #f3f5f7;
}
.box2{
  margin-top: 2%;
  margin-bottom: 10px;

}
.box .box1 .content{
  margin: 1% 2%;
}

.box .box1 .content .tishixinghao {
  margin-top: 2px;
  font-size: 12px;
  color: rgb(124, 124, 124);
}
.mt05 {
  margin-top: 5px;
}
.tiaojian {
  margin-top: 10px;
  margin-left: 75px;
  cursor: pointer;
  font-size: 10px;
  color: #00AFF0 !important;
}

</style>
