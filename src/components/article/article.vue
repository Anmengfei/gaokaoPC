<template>
  <div  class="container">
    <div class="atitle">{{ article.title }}</div>
    <div class="comefrom">
      <span style="font-size: 15px">{{ article.date }}</span>
    </div>
    <p class="image">
      <img :src="article.cover" class="articleImage"  object-fit="cover"  />
    </p>
    <div class="articleContent">
      <pre class="articlepre">{{ article.article }}</pre>
    </div>
  </div>
</template>

<script>
import { getArticleById } from '@/api/index.js'
export default {
  data () {
    return {
      article: null
    }
  },
  // 调用 生命周期，在页面加载的同时进行调用
  mounted () {
    console.log(this.$route.query.article)
    this.initData(this.$route.query.article)
  },
  methods: {
    // 定义.then就是获取后端数据,token就是验证用得，可能每一个用户有一个特有的token
    initData (id) {
      // console.log(typeof id);
      // 必须这样
      let _this = this
      eval('id=' + id)
      let article = {
        id: id,
        type: 0,
        user: '13868786449'
      }
      getArticleById(article).then(function (response) {
        console.log(response.data)
        _this.article = response.data
      })
    }
  }
}
</script>

<style scoped>
@media (max-width: 800px) {
  .container {
    margin: 0px auto;
    padding: 10px 10px;
    width: 90vw;
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
    width: 100%;
    height: 100%;
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
}
@media (min-width: 810px) {
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
}

</style>
