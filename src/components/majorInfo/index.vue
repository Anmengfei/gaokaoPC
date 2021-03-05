<template>
  <div class="leftContent">
    <!-- 专业简介 -->
    <div class="wrap">
      <div class="title">专业简介</div>
      <div class="schoolMsgWrap">
        <div class="omit-box">
          {{ message1 }}
          <!-- <span class="show-all theme-primary-color">收起</span> -->
        </div>
      </div>
    </div>
    <!-- 培养目标 -->
    <div class="wrap">
      <div class="title">培养目标</div>
      <div class="schoolMsgWrap">
        <div class="omit-box">
          {{ message2 }}
          <!-- <span class="show-all theme-primary-color">收起</span> -->
        </div>
      </div>
    </div>
    <!-- 培养要求 -->
    <div class="wrap">
      <div class="title">培养要求</div>
      <div class="schoolMsgWrap">
        <div class="omit-box">
          {{ message3 }}
          <!-- <span class="show-all theme-primary-color">收起</span> -->
        </div>
      </div>
    </div>
    <!-- 知识能力 -->
    <div class="wrap">
      <div class="title">知识能力</div>
      <div class="schoolMsgWrap">
        <div class="omit-box">
          {{ message4 }}
          <!-- <span class="show-all theme-primary-color">收起</span> -->
        </div>
      </div>
    </div>
    <!-- 主要课程 -->
    <div class="wrap">
      <div class="title">主要课程</div>
      <div class="maincontent">
        <div class="lesson">
          {{ message5 }}
        </div>
      </div>
    </div>
    <!-- 实践教学 -->
    <div class="wrap">
      <div class="title">实践教学</div>
      <div class="content" style="padding-left: 22px">
        <div class="omit-box">
          {{ message6 }}
        </div>
      </div>
    </div>
    <!-- 查看开设专业 -->
    <div class="buttonwrap">
      <div class="btnwrap">查看开设该专业的院校</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message1: `基础医学主要研
        究人体的健康与疾病的本质及其规
        律等，涉及生物学、解剖学、病理学、生理学
        、药理学等多个学科，进行人体疾病的诊断与治疗等。例如：
        医院的医生对患者疾病进行初步诊断和用药，体检科医生对体检者进行身体健
        康检查等。关键词：生物解剖医生医院`,
      message2:
        "本专业培养具备自然科学、生命科学和医学科学基本理论知识和实验技能，能够在高等医学院校和医学科研机构等部门从事基础医学各学科的教学、科学研究及基础与临床相结合的医学实验研究工作的医学高级专门人才。",
      message3:
        " 本专业学生主要学习现代自然科学和生命科学、基础医学各学科的基本理论，掌握临床医学的基本知识，受到基础医学各学科实验技能的基本训练，重点掌握几类基本的生物医学实验技术。",
      message4:
        "毕业生应获得以下几方面的知识和能力 :1.掌握基础医学的基本理论、基本知识；2.掌握医学实验的分析、设计方法和操作技术；3.具有基础医学科学研究的基本能力；4.熟悉基础医学教学工作的基本原理和方法；5.熟悉临床医学基本知识并了解临床医学的新进展和新成就；6.掌握文献检索、资料查询的基本方法，具有-定的科学研究和实际工作能力。",
      message5:
        " 人体解剖学与组织胚胎学、医学生物化学与分子生物学、医学生理学、细胞生物学、医学遗传学、医学免疫学、病原生物学、药理学、病理及病理生理学、内科学、外科学",
      message6: "教学及科研训练、基础实验、临床实践、毕业实习及论文",
    };
  },
  methods: {},
};
</script>
<style scoped>
.leftContent {
  float: left;
  /*暂时布置要做什么*/
  width: 935px;
  box-sizing: border-box;
  padding-right: 60px;
  padding-bottom: 30px;
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

/* .scholeMsgWrap {
  padding: 20px 0 0 22px;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
} */
.maincontent {
  margin-top: 20px;
  padding-left: 22px;
}
.omit-box {
  overflow: hidden;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0px;
  margin-top: 20px;
}
.buttonwrap {
  margin-top: 20px;
  text-align: center;
}
.btnwrap {
  display: inline-block;
  width: 290px;
  height: 45px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: #00aff0 !important;
}
.lesson {
  padding: 30px 15px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
  overflow: hidden;
  color: #333;
  font-size: 0.14rem;
  line-height: 0.3rem;
  letter-spacing: 0;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.omit-box {
  overflow: hidden;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>