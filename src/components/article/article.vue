<template>
  <!-- 这里为什么加v-if -->
  <div v-if="article" class="container">
    <div class="atitle">{{ article.title }}</div>
    <div class="comefrom">
      <span style="font-size: 15px">{{ article.date }}</span>
      <!-- <span>来源:</span>
      <span>&nbsp;null</span>
      <span>&nbsp;null</span>
      <span>&nbsp;null</span> -->
    </div>
    <p class="image">
      <img :src="article.cover" class="articleImage" />
    </p>
    <div class="articleContent">
      <pre class="articlepre">{{ article.article }}</pre>
    </div>
  </div>
</template>

<script>
import { getArticleById } from "@/api/index.js";
export default {
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    console.log(this.$route.query.article);
    this.initData(this.$route.query.article);
  },
  methods: {
    initData(id) {
      console.log(typeof id);
      //必须这样
      let _this = this;
      eval("id=" + id);
      let article = {
        id: id,
        type: 0,
        user: "13868786449",
      };
      getArticleById(article).then(function (response) {
        console.log(response.data);
        _this.article = response.data;
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0px auto;
  width: 750px;
  background-color: #f3f5f7;
}
.atitle {
  font-family: PingFangSC-Medium;
  color: #1e1e1e;
  font-size: 40px;
  font-weight: bold;
  padding: 20px 16px;
}
.comefrom {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #969696;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 16px 20px;
}
.image {
  /* width: 700px;
  height: 400px;
  border-radius: 10px;
  text-align: center; */
}
.image .articleImage {
  margin-left: 0.1rem;
  width: 700px;
  height: 400px;
  border-radius: 10px;
}
.articleContent .articlepre {
  /* width: 700px;
  overflow: auto; */
  width: 100%;
  /* overflow: hidden; */
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f3f5f7;
  border: 1px solid #f3f5f7;
  font-family: PingFangSC-Regular;
  font-size: 21px;
}
</style>
