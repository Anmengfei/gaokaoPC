<template>
  <div class="eightRow">
    <div class="eR-l">
      <dl>
        <dt>常见问题</dt>
        <dd>产品白皮书</dd>
        <dd>产品说明书</dd>
      </dl>
      <dl>
        <dt>关于我们</dt>
        <dd>团队介绍</dd>
        <dd>联系我们</dd>
        <dd>隐私政策</dd>
        <dd>用户协议</dd>
      </dl>
      <dl>
        <dt>2020微信群</dt>
      </dl>
      <dl>
        <dt>合作伙伴</dt>
        <dd>合作机构</dd>
        <dd>合作导师</dd>
      </dl>
      <dl>
        <dt>关注微信公众号</dt>
      </dl>
      <dl>
        <dt>商务合作</dt>
      </dl>
    </div>
    <div class="eR-r">
      <p class="p1">考哪儿期待为您服务</p>
      <p class="p2">工作日：9:30-18:30</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.eightRow {
  height: 420px;
  background-color: #333333;
  margin-top: 40px;
}
.eR-l {
  float: left;
  height: 420px;
  width: 1400px;
  background-color: #333333;
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

.eR-r {
  float: left;
  height: 420px;
  width: 400px;
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

</style>
