<template>
  <div class="box-content">
    <!-- 录取概率 -->
    <div class="introduce-box">
      <div class="title-box">
        <span>录取概率</span>
        <el-dropdown class="lq-btn">
          <el-button class="btn" type="primary">
            本科第一批<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>本科第一批</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <div style="margin-top: 25px">
          <div class="alert">
            填报建议：
            <span>开通VIP查看详细录取概率及分析报告</span>
            <div class="alert-right">
              <span>开通VIP>></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 学校录取数据 -->
    <div class="introduce-box">
      <div class="title-box">
        <span>学校录取数据</span>
        <el-dropdown class="lq-btn">
          <el-button class="btn" type="primary">
            文科<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <div class="datatable">
          <el-table :data="tableData1" border style="width: 100%">
            <el-table-column prop="year" label="年份" width="150">
            </el-table-column>
            <el-table-column prop="pici" label="批次" width="150">
            </el-table-column>
            <el-table-column prop="most-low" label="最低分/排名" width="150">
            </el-table-column>
            <el-table-column prop="average" label="平均分/排名" width="150">
            </el-table-column>
            <el-table-column prop="most-height" label="最高分/排名" width="150">
            </el-table-column>
            <el-table-column prop="number" label="录取人数"> </el-table-column>
          </el-table>
        </div>
        <div class="pagerRow">
          <div class="dataDesc">“-”表示暂无该项数据或学校该年无相关数据。</div>
        </div>
      </div>
    </div>
    <!-- 专业录取数据 -->
    <div class="introduce-box">
      <div class="title-box">
        <span>专业录取数据</span>
        <el-dropdown class="lq-btn">
          <el-button class="btn1" type="primary">
            2020<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="lq-btn">
          <el-button class="btn2" type="primary">
            文科<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="lq-btn">
          <el-button class="btn3" type="primary">
            本科第一批<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <div class="datatable">
          <el-table
            :data="tableData2"
            border
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
          >
            <el-table-column prop="major" label="专业名称"> </el-table-column>
            <el-table-column
              prop="low-grade"
              label="最低分/排名"
              sortable
              width="180"
            >
            </el-table-column>
            <el-table-column prop="average-grade" label="平均分/排名">
            </el-table-column>
            <el-table-column prop="most-grade" label="最高分/排名">
            </el-table-column>
            <el-table-column prop="number" label="录取人数"> </el-table-column>
          </el-table>
        </div>
        <div class="pagerRow">
          <div class="dataDesc">“-”表示暂无该项数据或学校该年无相关数据。</div>
        </div>
      </div>
    </div>
    <!-- 招生计划 -->
    <div class="introduce-box">
      <div class="title-box">
        <span>招生计划</span>
        <el-dropdown class="lq-btn">
          <el-button class="btn1" type="primary">
            2020<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>2020</el-dropdown-item>
            <el-dropdown-item>2019</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="lq-btn">
          <el-button class="btn2" type="primary">
            文科<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="lq-btn">
          <el-button class="btn3" type="primary">
            本科第一批<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>文科</el-dropdown-item>
            <el-dropdown-item>理科</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <div class="planDesc">
          院校代码：
          <span>1029</span>
          院校计划数
          <span>18</span>
        </div>
        <div class="datatable">
          <el-table
            :data="tableData3"
            border
            style="width: 100%"
            :default-sort="{ prop: 'major', order: 'descending' }"
          >
            <el-table-column prop="major" label="专业代码" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="专业名称"> </el-table-column>
            <el-table-column
              prop="plan-number"
              label="计划数"
              sortable
              width="180"
            >
            </el-table-column>
            <el-table-column prop="xuezhi" label="学制"> </el-table-column>
            <el-table-column prop="money" label="学费"> </el-table-column>
          </el-table>
        </div>
        <div class="pagerRow">
          <div class="dataDesc">“-”表示暂无该项数据或学校该年无相关数据。</div>
          <div class="pager">
            <div class="pagination-wrapper">
              <el-button-group>
                <el-button
                  class="paperbtn1"
                  type="primary"
                  icon="el-icon-arrow-left"
                  >上一页</el-button
                >
                <el-button class="paperbtn2" type="primary"
                  >下一页<i class="el-icon-arrow-right el-icon--right"></i
                ></el-button>
              </el-button-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 招生章程 -->
    <div class="introduce-box">
      <div class="title-box">
        <span>招生章程</span>
      </div>
      <div class="content">
        <div class="brochure">
          <el-link :underline="false"
            >2020年北京大学招生章程 &nbsp;&nbsp;></el-link
          >
        </div>
      </div>
    </div>
    <!-- 说明 -->
    <div class="disclaimer">
      <h4 class="container">说明:</h4>
      <div class="words">
        录取概率根据学校录取数据和考生个人成绩综合计算得出，仅供参考；<br />
        建议考生在填报志愿时参考本网站数据，并结合自身情况和考试院及学校招生简章综合考虑;
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData1: [
        {
          year: "2021",
          pici: "本科一批",
        },
      ],
      tableData2: [],
      tableData3: [],
    };
  },
  methods: {
    handleClick() {
      alert("button click");
    },
  },
};
</script>
<style scoped>
.box-content {
  position: relative;
  width: 1200px;
  height: 100%;
  min-height: 1200px;
  margin: 0px auto;
  padding-top: 60px;
  padding-bottom: 80px;
  /* overflow: auto; */
}
.introduce-box {
  margin-bottom: 60px;
  position: relative;
}
.title-box {
  height: 32px;
  padding-left: 22px;
  text-align: left;
  vertical-align: middle;
  margin-bottom: 30px;
}
.title-box::after {
  position: absolute;
  top: 3px;
  left: 0;
  width: 6px;
  height: 24px;
  background: #00aff0;
  border-radius: 4px;
  content: "";
}
.title-box span {
  float: left;
  margin-right: 40px;
  display: inline-block;
  color: rgb(51, 51, 51);
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
}
.lq-btn {
  float: left;
  vertical-align: middle;
  /* margin-left: 50px; */
  height: 32px;
  vertical-align: middle;
}

.lq-btn .btn {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.lq-btn .btn1 {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px 0 0 10px;
}
.lq-btn .btn2 {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 0;
  border-right: none;
  border-left: none;
}
.lq-btn .btn3 {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 0 10px 10px 0;
}
.content {
  padding-left: 0px;
}
.alert {
  box-sizing: border-box;
  padding: 8px 25px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 19px;
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  cursor: pointer;
}
.alert span {
  margin-left: 10px;
  color: rgb(51, 51, 51);
}
.alert-right {
  float: right;
  color: rgb(51, 51, 51);
}
.alert-right span {
  color: rgb(255, 105, 0);
}
.pagerRow {
  margin-top: 20px;
  overflow: hidden;
}
.dataDesc {
  float: left;
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.planDesc {
  margin-bottom: 30px;
  padding-left: 25px;
  color: rgb(51, 51, 51);
  font-size: 14px;
}
.planDesc span {
  margin: 0px 50px 0px 5px;
}
.pager {
  float: right;
}
.pagination-wrapper {
  height: 24px;
  position: relative;
  width: 100%;
}
.paperbtn1 {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px 0 0 10px;
}
.paperbtn2 {
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 10px 10px 14px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  letter-spacing: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 0 10px 10px 0;
}
.brochure {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 20px 27px;
  font-size: 14px;
  line-height: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.disclaimer {
  width: 100%;
  padding: 20px 30px;
  font-size: 14px;
  /* white-space: pre-line; */
  background: rgb(245, 245, 245);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.disclaimer .container {
  margin-bottom: 12px;
  color: rgb(0, 0, 0);
  font-weight: normal;
  line-height: 19px;
}
.disclaimer .words {
  color: rgb(153, 153, 153);
  line-height: 30px;
  margin-left: 20px;
}
</style>