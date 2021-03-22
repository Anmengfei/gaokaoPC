<template>
  <div class="app-container">
    <div class="app-content">
         <el-timeline>
            <el-timeline-item
                placement="top"
                v-for="(activity, index) in tableData"
                :key="index"
                :timestamp="activity.week">
                    <el-card v-for="(item, index) in activity.courses" :key="index" @click.native="changeCard(item.courseid)" class="cardPad">
                        <h4 class="firstTitleColor">{{item.firstTitle}}</h4>
                        <h6>{{item.secondTitle}} - {{item.thirdTitle}}</h6>
                        <p>上课时间：{{item.startTime}} - {{item.endTime}}</p>
                    </el-card>
            </el-timeline-item>

        </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLesson',
  data () {
    return {
      tableData: [],
      userId: 2

    }
  },
  mounted () {
    // this.getList()
  },
  methods: {

    getList () {
      var url = `http://58.119.112.14:11020/cms/course/currWeekCourse?userId=${localStorage.getItem('userId')}`
      this.$axios.get(url, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then((res) => {
        console.log(res.data.data)
        var arr = res.data.data
        // var arrTmp = []
        // for(var i = 0; i < arr.length; i++) {
        //     arr[i].week = '2020/11/11'

        // }
        this.tableData = arr
        console.log('AAA', this.tableData)
      })
    },
    changeCard (id) {
      console.log('didididi', id)
      // this.$router.push("/ClassShowTwo");
      this.$router.push({
        path: '/CourseInfo',
        query: {
          courseId: id
        }
      })
    }
  }
}
</script>

<style scoped>
  .app-content {
    padding: 30px;
    overflow:auto;
    max-height: 800px;
  }
  .cardPad {
      margin-bottom: 10px;
  }
  .firstTitleColor {
      color:rgb(211, 132, 214);
  }
</style>
