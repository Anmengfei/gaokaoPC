import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    img: 'https://zhongkeruitong.top/towerImg/cms-manager/moren.jpg',
    obj: {}
  },
  actions: {
    changeMsg (mss, msg) {
      mss.commit('changeMsg', msg)
    }
  },
  mutations: {
    changeMsg (state, msg) {
      state.img = msg
    }
  }
})

export default store
