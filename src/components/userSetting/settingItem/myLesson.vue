<template>
  <div class="app-container">
    <div class="app-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务式学习" name="first" class="tabPane">
           <div class="courseContainer courseNav" v-if="renwuFlag">
            <div class="coursesList" v-for="(item, index) in courseList">
           
              <div class="course-card-container" @click="jumpPage(item.id)">
                <div class="course-card-top">
                  <img class="course-banner" :src="getImgUrl(item.pic)"/>
                </div>
                <div class="course-card-content">
                  <h3 class="course-card-name">{{item.name}}</h3>
                  <div class="course-card-bottom">
                    <div class="course-card-info">
                      <span class="courseType">{{getDifficult(item.grade)}}</span>
                      <span class="viewPeople">
                        <i class="iconfont ymq-iconuser xl-iconfont"></i>
                        {{item.people}}
                      </span>
                      
                    </div>
                  </div>
                </div>
              </div>

            
            </div>

            <!-- <div class="pagination">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50,100]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                background
                :total="totalList"
              ></el-pagination>
            </div> -->

          
          
        
        </div>
        <div class="second-container" v-else>
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无课程</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自由式学习" name="second">
          <div class="courseContainer courseNav" v-if="ziyouFlag">
            <div class="coursesList" v-for="(item, index) in courseList2">
           
              <div class="course-card-container" @click="jumpPage2(item.id)">
                <div class="course-card-top">
                  <img class="course-banner" :src="getImgUrl(item.pic)"/>
                </div>
                <div class="course-card-content">
                  <h3 class="course-card-name">{{item.name}}</h3>
                  <div class="course-card-bottom">
                    <div class="course-card-info">
                      <span class="courseType">{{getDifficult(item.grade)}}</span>
                      <span class="viewPeople">
                        <i class="iconfont ymq-iconuser xl-iconfont"></i>
                        {{item.people}}
                      </span>
                      
                    </div>
                  </div>
                </div>
              </div>

            
            </div>

              <!-- <div class="pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5, 10, 20, 50,100]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  background
                  :total="totalList"
                ></el-pagination>
              </div> -->

          
          
        
          </div>
          <div class="second-container" v-else>
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无课程</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程收藏" name="third">
          <div class="courseContainer courseNav" v-if="collectFlag">
            <div class="coursesList" v-for="(item, index) in courseList3">
           
              <div class="course-card-container" @click="jumpPage3(item.id)">
                <div class="course-card-top">
                  <img class="course-banner" :src="getImgUrl(item.pic)"/>
                </div>
                <div class="course-card-content">
                  <h3 class="course-card-name">{{item.name}}</h3>
                  <div class="course-card-bottom">
                    <div class="course-card-info">
                      <span class="courseType">{{getDifficult(item.grade)}}</span>
                      <span class="viewPeople">
                        <i class="iconfont ymq-iconuser xl-iconfont"></i>
                        {{item.people}}
                      </span>
                      
                    </div>
                  </div>
                </div>
              </div>

            
            </div>

              <!-- <div class="pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5, 10, 20, 50,100]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  background
                  :total="totalList"
                ></el-pagination>
              </div> -->

          
          
        
          </div>
          <div class="second-container" v-else>
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无课程</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLesson',
  data () {
    return {
      renwuFlag: false,
      ziyouFlag: false,
      collectFlag: false,
      courseList: [],
      courseList2: [],
      courseList3: [],
      activeName: 'first',
      pictwo: require('@/assets/picturetwo.jpg'),
      nocontent: require('@/assets/nocontent.png'),
      list: [],
      imgList: ['https://www.zhongkeruitong.top/CCZX_image/hot-card-img1.png','https://www.zhongkeruitong.top/CCZX_image/hot-card-img2.png','https://www.zhongkeruitong.top/CCZX_image/hot-card-img3.png', 'https://www.zhongkeruitong.top/CCZX_image/hot-card-img4.png', 'https://www.zhongkeruitong.top/CCZX_image/timg590.jpg', 'https://www.zhongkeruitong.top/CCZX_image/timg5678.jpg', 'https://www.zhongkeruitong.top/CCZX_image/timg9090.jpg']
    }
  },
  mounted() {
    this.getList()
    this.getOnlineList()
    this.getOfflineList()
    this.getCollectList()
  },
  methods: {
    getOnlineList() {
      var url = `http://58.119.112.14:11020/cms/course/findOnlineCourse?userId=${localStorage.getItem('userId')}`
      this.$axios.get(url, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }).then((res) => {
          console.log("在线课堂的列表", res.data.data)
          if(res.data.data.length === 0) {
            this.renwuFlag = false
          } else {
            this.courseList = res.data.data
            this.renwuFlag = true
          }
          
        })
    },
    getOfflineList() {
      var url = `http://58.119.112.14:11020/cms/course/findOfflineCourse?userId=${localStorage.getItem('userId')}`
      this.$axios.get(url, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }).then((res) => {
          console.log("在线课堂的列表", res.data.data)
          if(res.data.data.length === 0) {
            this.ziyouFlag = false
          } else {
            this.ziyouFlag = true
            this.courseList2 = res.data.data
          }
          
        })
    },
    getCollectList() {
      var url = `http://58.119.112.14:11020/cms/course/findCollectCourse?userid=${localStorage.getItem('userId')}`
      this.$axios.get(url, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }).then((res) => {
          console.log("在线课堂的列表", res.data.data)
          if(res.data.data.length === 0) {
            this.collectFlag = false
          } else {
            this.courseList3 = res.data.data
            this.collectFlag = true
          }
          
        })
    },
    getDifficult(code) {
        if(code === '200001') {
          return "简单"
        } else if(code === '200002') {
          return '中等'
        } else {
          return '困难'
        }
      },
    getImgUrl(url) {
        return `http://${url}`
      },
    jumpPage(id) {
        console.log("id", id)
        this.$router.push({
          path: '/CourseInfo',
          query: {
            courseId: id
          }
        })
      },
      jumpPage2(id) {
        console.log("id", id)
        this.$router.push({
          path: '/CourseInfo',
          query: {
            courseId: id
          }
        })
      },
      jumpPage3(id) {
        console.log("id", id)
        this.$router.push({
          path: '/CourseInfo',
          query: {
            courseId: id
          }
        })
      },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getList () {
      // var url = 'http://58.119.112.14:11020/cms/user/coursePub/list/1/8'
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/coursePub/mylist/1/30?username=' + localStorage.getItem('userId')
      this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
        // if (localStorage.getItem('city') === '临沂市' || localStorage.getItem('city') === '泰安市') {
        //   this.list = res.data.queryResult.list.slice(2,9)
        //   // var arr = 
        // } else {
        //   this.list = res.data.queryResult.list.slice(2, 6)
        // }
        var temp = []
        var arr = res.data.queryResult.list
        for(var i = 0; i < arr.length; i++) {
          if(arr[i].users === '中科院') {
            temp.push(arr[i])
          }
        }
        this.list = temp
      })
    },
    gotocontent (id) {
      // if (this.flag_state === true) {
      //   alert('请先登录！')
      //   this.$router.push('/login')
      // } else {
      //   this.$router.push({
      //     path: '/videoclass',
      //     query: {
      //       class_id: id
      //     }
      //   })
      // }
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: id
        }
      })
    },
  }
}
</script>

<style scoped>
  .app-content {
    padding: 30px;
  }
  .tabPane >>> .el-tabs__item {
    font-size: 18px;
  }
  .studying {
    margin-top: 30px;
  }
  .class-item {
    width: 400px;
    height: 300px;
    background-color: #f4f4f4;
    border-radius: 20px;
  }
  .text-container {
    padding: 20px;
  }
  .picture {
    text-align: center;
    margin-top: 40px;
  }
  .hot-card {
    height: 250px;
  }
  .hot-card-left-text3 a {
    color: white;
    cursor: pointer;
  }
  .hot-card-img {
    height: 179px;
    overflow: hidden;

  }
  .hot-img-style {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.6s;
  }
  .hot-card:hover .hot-img-style {
    transform: scale(1.2);
  }
  .hot-card-right-text {
    height: 70px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: #f7f8fa;
  }
  .hot-card-right-title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;

  }
  .hot-card-right-icon {
    font-size: 18px;
    margin-top: 20px;
  }
  .hot-icon-text {
    color: #959493;
    font-weight: bold;
  }
  .hot-icon-text i {
    color: #d81e06;
    margin-right: 10px;
  }
  .hot-icon-right {
    float: right;
    color: #fe6549;
    font-weight: bold;
  }
  .col-style {
    margin-top: 10px;
  }
  .courseNav {
    /* width: 90%; */
    margin: 0 auto;
  }
.courseContainer {
    margin-top:20px;
  }
  .course-card-container {
    float: left;
    margin: 0 60px 10px 0px;
    height: 250px;
    z-index: 0;
    font-size: 0;
  }
  .course-card-container .course-card-top {
    width: 216px;
    height: 120px;
    position: relative;
    border-radius: 8px;
    transition: all .3s;
  }
  .course-card-container .course-card-top .course-banner {
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    border-radius: 8px;
  }
  .course-card-content {
    margin-top:-20px;
    padding: 8px;
  }
  .course-card-name {
    width: 200px;
    font-size: 16px;
    color: #07111b;
    line-height: 24px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: all .3s;
    font-weight: 700;
    height: 46px;
  }
  .course-card-bottom {
    margin-top: -15px;
  }
  .course-card-info {
    
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
    font-weight: 400;
  }
  .course-card-info span {
    margin-right: 45px;
    
  }
  .course-card-info .courseType {
    color:rgba(48, 197, 122, 0.9);
  }
  .course-card-info .coursePrice {
    color:rgba(240, 37, 71, 0.9);
  }
</style>
