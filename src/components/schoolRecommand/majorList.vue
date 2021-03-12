<template>
  <div class="app-container">
    <ul>
      <li v-for="(item,index) in majorlist" :key="index">
        <el-row>
          <el-col :span="23">
            <div class="text">
              <div class="majorinfo">
                <span class="name">{{ item.majorName }}</span>
                <span class="category">{{item.majorSubject}}</span>
              </div>

              <div class="desc">
                <span>2020年招生人数3</span>
                <span>2020年最低分613</span>
                <span>2020年最低位次18808</span>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="btn">
              <button class="chooseWill">加入意向</button>
            </div>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import {getMajorofSchool} from '../../api/schoolInfo'
export default {
  name: 'majorList',
  mounted () {
    this.getMajorInfo()
  },
  data () {
    return {
      majorlist: []// 专业列表
    }
  },
  methods: {
    getMajorInfo () {
      getMajorofSchool({schoolName: '清华大学'}).then(res => {
        console.log(res.data)
        if (res.data.msg === '成功') {
          this.majorlist = res.data.data.majorList
          console.log('this.majorlist数据', this.majorlist)
        } else {
          console.log('数据获取失败')
        }
      })
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-size: 100%;
}
li{
  list-style: none;
}
.app-container{
  width:93%;
  margin-left: 5%;
  border-top: .001rem dashed #e4e4e4;
}
.app-container ul li {
  overflow: hidden;
}
.app-container .text{
  float: left;
}
.app-container .majorinfo{

}
.app-container .name{
  /*float: left;*/
  margin-top: 1%;
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.app-container .category{
  font-size: 70%;
  margin-left: .2rem;
  color: red;
}
.app-container .desc{
  /*float: left;*/
  margin-top: 1%;
}

.app-container .desc span{
  display: inline-block;
  margin-right: .1rem;
  margin-top: .02rem;
  padding-top: 0.1rem;
  padding-right: .1rem;
  color: rgb(153, 153, 153);
  font-size: .05rem;

}
.app-container .btn{
  float: right;
}

.app-container .chooseWill{
  margin-top: 1%;
  width: 1.5rem;
  float: right;
  border:.02rem solid #00aff0;
  padding: .1rem;
  border-radius: .08rem;
  font-size: .1rem;
  background-color: transparent;
  outline: none;
}

</style>
