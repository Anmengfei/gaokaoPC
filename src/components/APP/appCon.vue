<template>
  <div class="app_container">
    <top-header></top-header>
    <div class="mt20 thirdRow">
      <HomeHeader :flagInfo="loginStatus"></HomeHeader>
    </div>
    <div class="picture">
      <img src="../../assets/banner5.png" alt="" />
    </div>
    <div class="section">
      <div>
        <h1 class="text-center">应用简介</h1>
        <p>
          该应用面向高考考生，利用大量高校数据，采用不断迭代学习的人工智能神经网络训练算法模型，专注河北、山东两省为辅，致力于为新高考考生提供严谨准确的志愿填报方案。
        </p>
      </div>
      <div>
        <h1 class="text-center">基本服务</h1>
        <h2>
          <span class="num">1&nbsp;</span>
          服务模式
        </h2>
        <p>
          普通会员：招生计划、专业目录、大学介绍、模拟自主填报、志愿填报课堂。<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;志愿VIP：多维度智能填报、专业定位测评、历年高校专业录取分数线、一键生成志愿填报方案。<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1V1专家指导：人工智能+大数据+顶级升学指导专家、专家与考生一对一全程服务。
        </p>
        <h2>
          <span class="num">2&nbsp;</span>
          服务区域
        </h2>
        <p>
          山东：2020年高考开始实施新高考，有历史数据可供参考，
          综合新旧高考综合推荐，指导报考。
        </p>
        <p class="pic">
          <img class="ph4" src="../../assets/图片10.png" />
        </p>
        <p>
          河北：2021年高考开始实施新高考，无历史数据可供参考，
          使用旧版高考数据推荐新高考，指导报考。
        </p>
        <p class="pic">
          <img class="ph5" src="../../assets/图片11.png" />
        </p>
        <p>其他省份： 提供基础的查询服务。</p>
        <h2>
          <span class="num">3&nbsp;</span>
          服务访问模式
        </h2>
        <p>
          APP端:基于移动端，支持安卓系统和苹果系统，避免着急找微信小程序应用时找不到的痛点<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微信端：
          支持微信公众号，随用随查，不占手机存储空间 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PC端：支持微信登录和手机号登陆，数据和app端同步，大屏操作更方便，查看数据更直观
        </p>
        <p class="pic">
          <img class="ph2" src="../../assets/图片4.png" />
        </p>
      </div>
      <div>
        <h1 class="text-center">精准数据</h1>
        <h2>
          <span class="num">1&nbsp;</span>
          自主产权的数据采集
        </h2>
        <p>
          自主产权的数据采集加工平台，不依赖于第三方数据，监测高校或省招生院数据发布情况，一旦发布，自动爬取最新数据开始清洗入库训练志愿推荐模型。
        </p>
        <h2>
          <span class="num">2&nbsp;</span>
          海量数据资源
        </h2>
        <p>
          拥有海量历史数据，确保算法准确性 高校基础信息，2900+条数据。
          专业评级信息，5000+条数据 选科要求，8W+条数据。
          近五年，各高校在各省分专业的招生分数，300W+条数据。
          近五年，各高校在各省分专业的招生计划，250W+条数据 总数据量，近千万条。
        </p>
        <h2>
          <span class="num">3&nbsp;</span>
          优越性数据采集解析平台
        </h2>
        <p>
          使用数据采集解析平台，自动爬取、清洗与解析最新数据，保证数据实时性与准确性。大屏页面，实时监测数据采集与解析状态。快捷创建采集任务，不错过任何有价值信息。
          复杂数据可手动进行字段匹配
        </p>
        <p class="pic">
          <img class="ph1" src="../../assets/图片1.png" />
        </p>
      </div>
      <div>
        <h1 class="text-center">团队优势</h1>
        <h2>
          <span class="num">1&nbsp;</span>
          资源优势
        </h2>
        <p>
          整合中科院和山东大学资源，形成了以中科院多名教授为主，全部硕士以上学历学生，多名博士为辅的强有力团队
          部分团队成员有在政府工作，做志愿填报的工作经历
          团队成员针对新高考有多年填报经验，对政策有着非常深入与细致的调研
          技术开发团队人数30+，各有专精技术，各司其职，配合默契。
          数据采集团队3个，总人数100+，保证数据实时性与准确性。
        </p>
        <h2>
          <span class="num">2&nbsp;</span>
          技术优势
        </h2>
        <p>
          采用不断迭代学习的人工智能神经网络训练算法模型；
          支持多条件组合筛选查询，不放过用户任何合理需求。
          依据考生用户的位次，通过AI神经网络分析往年各个院校及专业的招生录取数据，和考生用户的位次进行比对分析，生成与考生用户的位次相匹配的大学和志愿清单，供考生在志愿选择过程中进行参考。
          用户可在查询志愿时选择一些附加条件，例如意向的城市、地区、喜欢的专业，系统通过分析用户的意向条件，实现个性化推荐，提高用户在选择志愿时的效率。
        </p>
      </div>
      <div>
        <h1 class="text-center">商务合作</h1>
        <h2>
          <span class="num">1&nbsp;</span>
          对外合作模式
        </h2>
        <p>
          对外合作模式 产品代理模式：签订代理合同
          引入付费人数越多，分成比例越高。
          细分与报考机构、中学老师、大学老师等合作模式，分成占比比例。
          提供用于宣传的材料，如产品说明书等 志愿卡销售模式：
          提供志愿卡，按卖出卡张数分成；卖出越多分成越高。
        </p>
        <h2>
          <span class="num">2&nbsp;</span>
          对外合作模式
        </h2>
        <p>
          签订代理合同 引入付费人数越多，分成比例越高。
          细分与报考机构、中学老师、大学老师等合作模式，分成占比比例。
          提供用于宣传的材料，如产品说明书等 志愿卡销售模式：
          提供志愿卡，按卖出卡张数分成；卖出越多分成越高。
        </p>
        <h2>
          <span class="num">3&nbsp;</span>
          已开展的合作
        </h2>
        <p>
          河北人才 山东人工智能协会 济南图书馆 泰安科技馆 北京市中关村中学
          中科院沈阳计算所教育中心
        </p>
        <p class="pic1">
          <img class="ph3" src="../../assets/图片5.png" />
          <img class="ph3" src="../../assets/图片6.png" />
          <img class="ph3" src="../../assets/图片7.png" />
          <img class="ph3" src="../../assets/图片8.png" />
          <img class="ph3" src="../../assets/图片9.png" />
        </p>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/common/topheader";
import HomeHeader from "@/components/common/header1";
import Footer from "@/components/common/footer1";
export default {
  name: "appCon",
  components: { TopHeader, HomeHeader, Footer },
  data() {
    return {
      loginStatus: false,
    };
  },
};
</script>

<style>
.app_container {
  /* background-color: #fff; */
  width: 100%;
  /* height: 100%; */
}
.picture {
  width: 100%;
  height: 300px;
  /*background-color: pink;*/
}
.picture img {
  width: 100%;
  height: 100%;
}
.section {
  width: 1400px;
  /* height: 1400px; */
  margin: 0 auto;
  margin-top: 70px;
}
h1 {
  font-size: 28px;
  height: 26px;
  line-height: 26px;
  margin-top: 35px;
  margin-bottom: 25px;
  font-weight: 700;
}
p {
  text-indent: 1.5em;
}
.num {
  font-size: 36px;
  width: auto;
  color: #e84c33;
  font-family: "Microsoft YaHei", SimSun, Arial, sans-serif;
  display: inline-block;
  float: left;
  height: 30px;
  padding-bottom: 20px;
}
h2 {
  font-size: 21px;
  height: 27px;
  line-height: 22px;
  margin-top: 25px;
  font-weight: 700;
}
.pic {
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
}
.pic1 {
  margin-top: 30px;
  margin-bottom: 60px;
}
.ph1 {
  width: 1200px;
  height: 600px;
  border-radius: 20px;
}
.ph2 {
  width: 500px;
  height: 800px;
  border-radius: 20px;
}
.ph3 {
  width: 250px;
  height: 200xp;
  border-radius: 20px;
  margin-left: 10px;
}
.ph4 {
  width: 400px;
  height: 600px;
}
.ph5 {
  width: 400px;
  height: 400px;
}
/* .el-tabs__header {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
} */
/* /deep/.pane1 {
  height: 30px;
  font-size: 30px !important;
} */
</style>
