import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homepage',
    component: resolve => require(['@/components/homePage/index'], resolve)
  },
  {
    path: '/SchoolRecommand',
    name: 'SchoolRecommand',
    component: resolve => require(['@/components/schoolRecommand/index'], resolve)
  },
  {
    path: '/SchoolInfo',
    name: 'SchoolInfo',
    component: resolve => require(['@/components/schoolInfo/index'], resolve)
  }

  ]
})
