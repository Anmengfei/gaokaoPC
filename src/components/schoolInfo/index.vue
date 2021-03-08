<template>
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
                <img src="../../assets/logo.jpg" class="img-logo ml50" />
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
        <div class="mt20 thirdRow">
            <HomeHeader :flagInfo="loginStatus"></HomeHeader>
        </div>
        <div class="leftContent">
            <!-- 学校简介 -->
            <div class="wrap">
                <div class="title">学校介绍</div>
                <div class="schoolMsgWrap">
                    <div class="omit-box">
                    北京大学（PekingUniversity），简称北大，创建于1898年，初名京师大学堂，是中国近代第一所国立综合性大学，也是当时中国最高教育行政机关。1911年辛亥革命爆发，翌年改为现名；1917年，著名教育家蔡元培出任北京大学校长，“循思想自由原则、取兼容并包之义”，推行改革，把北大办成以文、理两科为重点的综合性大学，使北京大学成为新文化运动的中心、五四运动的策源地。1937年抗日战争爆发，北大与清华、南开合并组建国立西南联合大学；1946年，北大迁回北平复校。
                    1998年5月4日，北京大学举办百年校庆，在国家的支持下，北京大学适时启动了“创建世界一流大学计划”。2000年4月3日，北京大学与原北京医科大学合并，组建新的北京大学。学校为教育部直属全国重点大学，国家“211工程”、“985工程”建设大学、C9联盟，以及东亚研究型大学协会、国际研究型大学联盟、环太平洋大学联盟、东亚四大学论坛的重要成员。
                    巍巍上庠，国运所系。一百多年来，北京大学的发展与国家和民族的命运息息相关，形成了光荣的革命传统和优良的学术传统。作为中国的最高学府，北京大学聚集了各个历史时期的众多著名学者、专家，培养了一代又一代优秀人才，创造了一批又一批重大科学成果，深刻影响了中国近现代思想理论、科学技术、文化教育和社会发展的进程。
                    <!-- <span class="show-all theme-primary-color">收起</span> -->
                    </div>
                </div>
            </div>
             <!-- <div class="wrap">
                <div class="title">学校介绍</div>
                <div class="schoolMsgWrap">
                    <div class="omit-box" v-if="schoolIntro.length < maxLenInfo">
                    {{schoolIntro}}
                    </div>
                    <div class="omit-box" v-else>
                        <div class="tj">{{showBtn?sliceStr: schoolIntro}}
                            <span class="btnWord" @click="showBtn = !showBtn">{{showBtn?"全文":"收起"}}</span>

                        </div>
                    </div>
                </div>
            </div> -->
            <!-- 师资简介 -->
            <div class="wrap">
                <div class="title">师资介绍</div>
                <div class="schoolMsgWrap">
                    <div class="omit-box">
                    截至2017年12月，北大拥有教职工（不包含博士后）21183人；专任教师数7317人，其中，按职称划分：正高级2217人，副高级2231人；其中：中国科学院院士76人，中国工程院院士19人，发展中国家科学院院士25人，哲学社会科学资深教授13人，“千人计划”入选者72人，“青年千人计划”入选者153人，“万人计划”入选者28人，“青年拔尖人才计划”入选者35人，“长江学者奖励计划”特聘教授、讲座教授、青年学者231人，国家杰出青年基金获得者237人，国家基金委创新群体40个，国家基金委优秀青年基金获得者130人，国家级教学名师17人，博士生导师2474人，科研机构人员1161人，附属医院教职工10131人。
                    <!-- <span class="show-all theme-primary-color">收起</span> -->
                    </div>
                </div>
            </div>
            <!-- 重点学科 -->
            <div class="wrap">
                <div class="title">重点学科</div>
                <div class="schDiscipline">
                    <div class="datatable">
                    <table class="table">
                        <thead>
                        <tr class="header">
                            <th class="first-th" style="width: 20px; text-align: left">
                            <span>学科建设</span>
                            </th>
                            <th class="second-th" style="width: 10%; text-align: center">
                            <span>数学</span>
                            </th>
                            <th class="third-th" style="width: 70%; text-align: left">
                            <span>学科名单</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="content">
                        <tr class="tr_1">
                            <td class="first-th" style="text-align: left">
                            双一流建设学科
                            </td>
                            <td class="second-th" style="text-align: center">41</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                哲学,理论经济学,应用经济学,法学,政治学,社会学,马克思主义理论,心理学,中国语言文学,外国语言文学,考古学,中国史,世界史,数学,物理学,化学,地理学,地球物理学,地质学,生物学,生态学,统计学,力学,材料科学与工程,电子科学与技术,控制科学与工程,计算机科学与技术,环境科学与工程,软件工程,基础医学,临床医学,口腔医学,公共卫生与预防医学,药学,护理学,艺术学理论,现代语言学,语言学,机械及航空航天和制造工程,商业与管理,社会政策与管理
                            </div>
                            <!-- <span class="show-all theme-primary-color">收起</span> -->
                            </td>
                        </tr>
                        <tr class="tr_2">
                            <td class="first-th" style="text-align: left">
                            一级学科国家重点学科
                            </td>
                            <td class="second-th" style="text-align: center">18</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                大气科学,地理学,电子科学与技术,法学,化学,计算机科学与技术,口腔医学,理论经济学,力学,历史学,社会学,生物学,数学,物理学,药学,哲学,政治学,中国语言文学
                            </div>
                            </td>
                        </tr>
                        <tr class="tr_2">
                            <td class="first-th" style="text-align: left">
                            二级学科国家重点学科
                            </td>
                            <td class="second-th" style="text-align: center">24</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                病理学与病理生理学,儿科学,妇产科学,构造地质学,固体地球物理学,国民经济学,核技术及应用,环境科学,教育经济与管理,精神病与精神卫生学,流行病与卫生统计学,免疫学,内科学（肾病，心血管病，血液病）,皮肤病与性病学,企业管理,天体物理,通信与信息系统,图书馆学,外科学（骨外，泌尿外）,眼科学,印度语言文学,英语语言文学,运动医学,肿瘤学
                            </div>
                            <!-- <span class="show-all theme-primary-color">收起</span> -->
                            </td>
                        </tr>
                        <tr class="tr_3">
                            <td class="first-th" style="text-align: left">
                            二级学科国家重点学科
                            </td>
                            <td class="second-th" style="text-align: center">3</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                儿少卫生与妇幼保健学,矿物学、岩石学、矿床学,亚非语言文学
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <!-- 特色培养 -->
            <div class="wrap">
                <div class="title">特色培养</div>
                <div class="schDiscipline">
                    <div class="datatable">
                    <table class="table">
                        <thead>
                        <tr class="header">
                            <th class="first-th" style="width: 20px; text-align: left">
                            <span>培养类型</span>
                            </th>
                            <th class="second-th" style="width: 10%; text-align: center">
                            <span>数目</span>
                            </th>
                            <th class="third-th" style="width: 70%; text-align: left">
                            <span>培养名单</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="content">
                        <tr class="tr_1">
                            <td class="first-th" style="text-align: left">
                            国家重点实验室
                            </td>
                            <td class="second-th" style="text-align: center">8</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                蛋白质与植物基因研究国家重点实验室,核物理与核技术国家重点实验室,环境模拟与污染控制国家重点实验室,膜生物学国家重点实验室,区域光纤通信网与新型光通信系统国家重点实验室,人工微结构和介观物理国家重点实验室,天然药物与仿生药物国家重点实验室,湍流与复杂系统国家重点实验室
                            </div>
                            <!-- <span show-all theme-primary-color>收起</span> -->
                            </td>
                        </tr>
                        <tr class="tr_2">
                            <td class="first-th" style="text-align: left">
                            国家工程实验室
                            </td>
                            <td class="second-th" style="text-align: center">2</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                数字视频编解码技术国家工程实验室,口腔数字化医疗技术和材料国家工程实验室
                            </div>
                            </td>
                        </tr>
                        <tr class="tr_2">
                            <td class="first-th" style="text-align: left">
                            国家工程研究中心
                            </td>
                            <td class="second-th" style="text-align: center">2</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                电子出版新技术国家工程研究中心,软件工程国家工程研究中心
                            </div>
                            </td>
                        </tr>
                        <tr class="tr_3">
                            <td class="first-th" style="text-align: left">
                            教育部重点实验室
                            </td>
                            <td class="second-th" style="text-align: center">20</td>
                            <td class="third-th" style="text-align: left">
                            <div class="omit-box">
                                数学及其应用教育部重点实验室,北京现代物理研究中心教育部重点实验室教育部重点实验室,生物有机与分子工程教育部重点实验室,纳米器件物理与化学教育部重点实验室,地表过程分析与模拟教育部重点实验室,水沙科学（联合）教育部重点实验室,造山带与地壳演化教育部重点实验室,分子心血管学教育部重点实验室,神经科学教育部重点实验室,高分子化学与物理教育部重点实验室,机器感知与智能教育部重点实验室,统计与信息技术教育部-微软重点实验室,高可信软件技术教育部重点实验室,细胞增殖分化调控机理研究教育部重点实验室,恶性肿瘤发病机制及转化研究教育部重点实验室,计算语言学教育部重点实验室,视觉损伤与修复教育部重点实验室,慢性肾脏病防治教育部重点实验室,辅助生殖教育部重点实验室,数理经济与数理金融教育部重点实验室
                                <!-- <span show-all theme-primary-color>收起</span> -->
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <!-- 深造机会 -->
            <div class="wrap">
                <div class="title">深造机会</div>
                <div class="schoolDetail">
                    <div class="leftItem">
                    <div class="tbox">
                        <span class="title-name">读研比例</span>
                    </div>
                    <div class="canvasWrap">
                        <el-progress
                        type="circle"
                        width="70"
                        :percentage="56"
                        ></el-progress>
                    </div>
                    </div>
                    <div class="rightItem">
                    <div class="tbox">
                        <span class="title-name">出国比例</span>
                    </div>
                    <div class="canvasWrap">
                        <el-progress
                        type="circle"
                        width="70"
                        :percentage="29"
                        ></el-progress>
                    </div>
                    </div>
                </div>
            </div>
            <!-- 校园风光 -->
            <div class="wrap">
                <div class="title">校园风光</div>
                <div class="screenWrap">
                    <div class="banner">
                    <el-carousel class="box" :interval="4000" type="card" height="145px">
                        <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                    </div>
                    <div class="schoolFamousBtnWrap">
                    <el-button class="btn" size="medium">查看更多</el-button>
                    </div>
                </div>
            </div>
            <!-- 校园生活 -->
            <div class="wrap">
                <div class="title">校园生活</div>
                <div class="schoolLive">
                    <div class="schoolLiveEating">
                    <div class="title1">食宿条件>></div>
                    <div class="subTitle">看看该校的食堂和宿舍情况</div>
                    </div>
                    <div class="schoolLiveMoney">
                    <div class="title1">奖助学金>></div>
                    <div class="subTitle">看看该校的奖学金和贫困生助学金情况</div>
                    </div>
                </div>
            </div>
            <!-- 知名校友 -->
            <div class="wrap">
                <div class="title">知名校友</div>
                <div class="schoolFamous">
                    <div class="famousItem">
                    <div class="userName">卞之琳</div>
                    <div class="userAny">诗人、文学评论家、翻译家</div>
                    </div>
                    <div class="famousItem">
                    <div class="userName">陈独秀</div>
                    <div class="userAny">五四运动总司令</div>
                    </div>
                    <div class="famousItem">
                    <div class="userName">邓稼先</div>
                    <div class="userAny">科学家、中国“两弹”元勋</div>
                    </div>
                    <div class="famousItem">
                    <div class="userName">范文澜</div>
                    <div class="userAny">历史学家</div>
                    </div>
                    <div class="famousItem">
                    <div class="userName">冯友兰</div>
                    <div class="userAny">著名哲学家</div>
                    </div>
                </div>
            <div class="schoolFamousBtnWrap">
                <el-button class="btn" size="medium">展开更多</el-button>
            </div>
            </div>
        </div>
    </div>

</template>
<script>
import HomeHeader from '@/components/common/header1'
import Footer from '@/components/common/footer'
export default {
  name: 'SchoolInfo',
  components: { HomeHeader, Footer },
  data () {
    return {
      maxLenInfo: 200,
      showBtn: true,
      schoolIntro: `北京大学（PekingUniversity），简称北大，创建于1898年，初名京师大学堂，是中国近代第一所国立综合性大学，也是当时中国最高教育行政机关。1911年辛亥革命爆发，翌年改为现名；1917年，著名教育家蔡元培出任北京大学校长，“循思想自由原则、取兼容并包之义”，推行改革，把北大办成以文、理两科为重点的综合性大学，使北京大学成为新文化运动的中心、五四运动的策源地。1937年抗日战争爆发，北大与清华、南开合并组建国立西南联合大学；1946年，北大迁回北平复校。
                    1998年5月4日，北京大学举办百年校庆，在国家的支持下，北京大学适时启动了“创建世界一流大学计划”。2000年4月3日，北京大学与原北京医科大学合并，组建新的北京大学。学校为教育部直属全国重点大学，国家“211工程”、“985工程”建设大学、C9联盟，以及东亚研究型大学协会、国际研究型大学联盟、环太平洋大学联盟、东亚四大学论坛的重要成员。
                    巍巍上庠，国运所系。一百多年来，北京大学的发展与国家和民族的命运息息相关，形成了光荣的革命传统和优良的学术传统。作为中国的最高学府，北京大学聚集了各个历史时期的众多著名学者、专家，培养了一代又一代优秀人才，创造了一批又一批重大科学成果，深刻影响了中国近现代思想理论、科学技术、文化教育和社会发展的进程。`

    }
  },
  computed: {
    sliceStr () {
      if (this.schoolIntro != null) {
        return this.schoolIntro.substring(0, this.maxLenInfo) + '...'
      }
      return ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.leftContent {
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
  /* float: left; */
  /*暂时布置要做什么*/
  /* width: 935px;
  box-sizing: border-box;
  padding-right: 60px;
  padding-bottom: 30px; */
  /* background-color: pink; */
}

.wrap {
  width: 100%;
  height: auto;
  margin-top: 60px;
  /* background-color: yellow; */
}

.title {
  position: relative;
  height: 30px;
  color: #333;
  font-size: 24px;
  line-height: 30px;
  text-indent: 16px;
}

.schoolMsgWrap {

  padding: 20px 0 0 22px;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
}
.omit-box {
  /* overflow: hidden; */
  color: #333;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  /* -webkit-line-clamp: 4; */
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

.title::after {
  position: absolute;
  top: 3px;
  left: 0;
  width: 6px;
  height: 24px;
  background: #00aff0;
  border-radius: 4px;
  content: "";
}

.scholeMsgWrap {
  padding: 20px 0 0 22px;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
}

.theme-primary-color {
  color: #00aff0 !important;
}

.show-all {
  margin-left: 8px;
  font-size: 14px;
  /*记一下，变为小手 */
  cursor: pointer;
}

.schDiscipline {
  padding: 20px 0 0 22px;
}

.datatable {
  width: 100%;
  background: #fff;
}

.table {
  width: 100%;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #f5f5f5; */
}

thead {
  width: 100%;
  color: #999;
  background: #f5f5f5;
}

tbody {
  width: 100%;
  color: #000;
}

.header .first-th {
  border-top-left-radius: 10px;
  border-top: 1px solid rgb(228, 228, 228);
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
}

.header .second-th {
  border-top: 1px solid rgb(228, 228, 228);
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
}

.header .third-th {
  border-top-right-radius: 10px;
  border-top: 1px solid rgb(228, 228, 228);
  border-right: 1px solid rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
}

.tr_1 .first-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
}

.tr_1 .second-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.tr_1 .third-th {
  border-top: 0;
  border-right: 1px solid rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.tr_2 .first-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
}

.tr_2 .second-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.tr_2 .third-th {
  border-top: 0;
  border-right: 1px solid rgb(228, 228, 228);
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.tr_3 .first-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
}

.tr_3 .second-th {
  border-top: 0;
  border-right: 1px dashed rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
}

.tr_3 .third-th {
  border-top: 0;
  border-right: 1px solid rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
}

.schoolLive {
  margin-top: 20px;
  overflow: hidden;
}
.schoolLiveEating {
  position: relative;
  float: left;
  width: 420px;
  height: 120px;
  padding: 26px 30px 32px 50px;
  color: rgb(0, 85, 125);
  background: linear-gradient(
    135deg,
    rgb(215, 250, 255) 0%,
    rgb(159, 228, 254) 100%
  );
  border-radius: 10px;
  cursor: pointer;
}
.schoolLiveEating .title1 {
  height: 31px;
  margin-bottom: 11px;
  font-size: 24px;
  line-height: 31px;
}
.schoolLiveEating .subTitle {
  height: 19px;
  font-size: 14px;
  line-height: 19px;
}
.schoolLiveMoney {
  position: relative;
  float: right;
  width: 420px;
  height: 120px;
  padding: 27px 30px 32px 50px;
  color: rgb(39, 88, 0);
  background: linear-gradient(
    135deg,
    rgb(216, 255, 193) 0%,
    rgb(132, 229, 139) 100%
  );
  border-radius: 10px;
  cursor: pointer;
}
.schoolLiveMoney .title1 {
  height: 31px;
  margin-bottom: 11px;
  font-size: 24px;
  line-height: 31px;
}
.schoolLiveMoney .subTitle {
  height: 19px;
  font-size: 14px;
  line-height: 19px;
}
.schoolFamous {
  margin-top: 20px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.famousItem {
  margin-top: 0px;
}
.userName {
  position: relative;
  margin-bottom: 10px;
  color: rgb(51, 51, 51);
  font-size: 20px;
  line-height: 26px;
}
.userAny {
  color: rgb(153, 153, 153);
  font-size: 14px;
  line-height: 19px;
}
.userName::after {
  position: absolute;
  top: 10px;
  left: -12px;
  width: 8px;
  height: 8px;
  background: rgb(0, 175, 240);
  border-radius: 50%;
  content: "";
}
.schoolFamousBtnWrap {
  margin-top: 20px;
  text-align: center;
}
.btn {
  height: 60px;
  width: 150px;
  font-size: 14px;
  background: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.screenWrap {
  padding-top: 18px;
}
.banner {
  height: 250px;
  /* background-color: blue; */
}
.banner .box {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.schoolDetail {
  margin: 20px 0px 60px;
  overflow: hidden;
}
.leftItem {
  float: left;
  position: relative;
  width: 420px;
  height: 120px;
  padding-left: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.rightItem {
  float: right;
  position: relative;
  width: 420px;
  height: 120px;
  padding-left: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
}
.tbox {
  height: 120px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: center;
}
.tbox .title-name {
  color: #333;
  font-size: 24px;
}
.canvasWrap {
  position: absolute;
  top: 15px;
  right: 50px;
  width: 90px;
  height: 90px;
  font-size: 20px;
  line-height: 90px;
  text-align: center;
}

.mt20 {
    /* margin-left: 20px; */
}
.ml50 {
  margin-left: 50px;
}
.mt20 {
  margin-top: 20px;
}
.mt05 {
  margin-top: 5px;
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
.tishiOne {
  border: 1px solid red;
  color: rgb(235, 16, 16);
}
.tishiTwo {
  border: 1px solid red;
  background-color: red;
  color: white;
}
.thirdRow {
  background-color: #f95e5a;
  width: 100%;
  height: 70px;

}
.tj {
    text-align: justify;
}

.btnWord {
    color: cornflowerblue;
    cursor: pointer;
    word-break: keep-all;
}
</style>
