import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginflag:'',
    showlogin: false,
    showUserInfo:false,
    userinfo:{},
    img: 'https://zhongkeruitong.top/towerImg/cms-manager/moren.jpg',
    obj: {}
  },
  mutations: {
    SET_INFOFLAG(state,flag){
      state.showUserInfo = flag
    },
    SET_FLAG(state,flag){
      state.loginflag = flag
    },
    SET_USERINFO(state,info){
      state.userinfo = info
    },
    SET_SHOWLOGIN(state,flag){
      state.showlogin = flag
    },
    changeMsg (state, msg) {
      state.img = msg
    }
  },
  actions: {
    showuserInfo({commit},flag){
      commit('SET_INFOFLAG',flag)
    },
    resUserInfo({commit},info){
      commit('SET_USERINFO',info)
    } ,
    getShowLogin({commit},flag){
      commit('SET_SHOWLOGIN',flag)
    },
    getloginstate({commit},flag){
      commit('SET_FLAG',flag)
    },

    changeMsg (mss, msg) {
      mss.commit('changeMsg', msg)
    }
  }

})

export default store
