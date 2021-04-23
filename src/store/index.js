import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:
    // localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')):
      {
    loginflag:'',
    showlogin: false,
    phoneNum:'',
    vip:'',
    showUserInfo:false,
    userinfo:{},
    obj: {}
  },
  mutations: {
    SET_PHONE(state,flag){
      state.phoneNum = flag
    },
    SET_INFOFLAG(state,flag){
      state.showUserInfo = flag
    },
    SET_FLAG(state,flag){
      state.loginflag = flag
    },
    SET_USERINFO(state,info){
      // // 创建一个新的对象，将info,state.personInfo对象复制到新对象中
      // let data = Object.assign({},state.userinfo,info);
      // // 将state.personInfo指向新对象的引用地址
      state.userinfo = info;
    },
    SET_SHOWLOGIN(state,flag){
      state.showlogin = flag
    },
    SET_VIP(state,flag){
      state.vip = flag
    },
  },
  actions: {
    getVip({commit},flag){
      commit('SET_VIP',flag)
    },
    getPhone({commit},flag){
      commit('SET_PHONE',flag)
    },
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
  }

})

export default store
