<template>
  <div class="eightRow">
    <div class="eR-l">
      <dl>
        <dt>常见问题</dt>
        <!-- <dd class="team" @click="handleClick()">产品白皮书</dd> -->
        <dd class="team" @click="handleClick()">产品说明书</dd>
      </dl>
      <dl>
        <dt>关于我们</dt>
        <dd class="team" @click="handleClick()">智禾考哪儿简介</dd>
        <dd class="team" @click="handleClick()">团队介绍</dd>
        <dd class="team" @click="gotoPolicy">隐私政策</dd>
        <dd class="team" @click="gotoTerms">服务条款</dd>
<!--        <dd class="team" @click="handleClick()">联系我们 : 400-168-6292</dd>-->
      </dl>
<!--      <dl>-->
<!--        97-->
<!--        <dt>2020微信群</dt>-->
<!--      </dl>-->
      <dl>
        <dt>合作伙伴</dt>
        <dd class="team" @click="handleClick()">合作机构</dd>
        <dd class="team" @click="handleClick()">合作导师</dd>
      </dl>
<!--      <dl>-->
<!--        <dt>关注微信公众号</dt>-->
<!--      </dl>-->
<!--      <dl>-->
<!--        <dt>商务合作</dt>-->
<!--      </dl>-->
    </div>
    <div class="eR-r">
      <p class="p1">考哪儿期待为您服务</p>
      <p class="p2">工作日：9:30-18:30</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer1",
  methods: {
    handleClick() {
      const { href } = this.$router.resolve({
        name: "appCon",
      });
      window.open(href, "_blank");
    },
    gotoTerms() {
      const { href } = this.$router.resolve({
        name: "TermsService",
      });
      window.open(href, "_blank");
    },
    gotoPolicy() {
      const { href } = this.$router.resolve({
        name: "PrivacyPolicy",
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped>
.eightRow {
  float: left;
  /*height: 100%;*/
  height: 270px;
  width: 100%;
  background-color: #333333;
  /*margin-top: 0.5rem;*/
}
.eR-l {
  float: left;
  height: 100%;
  width: 70%;
  background-color: #333333;
}
.eightRow dl {
  float: left;
  margin-top: 0.4rem;
  margin-left: 120px;
}
.eightRow dt {
  font-size: 0.05rem;
  color: #fff;
}
.eightRow dl dd {
  margin-top: 0.2rem;
  font-size: 100%;
  color: #7d7d7d;
}

.eR-r {
  float: right;
  width: 30%;
  background-color: #333333;
}
.p1 {
  display: block;
  margin-top: 80px;
  margin-left: 80px;
  color: #fff;
}
.p2 {
  display: block;
  margin-top: 30px;
  margin-left: 80px;
  color: #fff;
}
.team:hover {
  cursor: pointer;
  color: #e5623f;
}
</style>
