// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import clipboard from 'clipboard'
import 'videojs-flash'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.prototype.$axios = axios

Vue.prototype.clipboard = clipboard


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
