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
        },
        {
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
        },
        {
            path: '/Recruit',
            name: 'Recruit',
            component: resolve => require(['@/components/recruit/index'], resolve)
        },
        {
            path: '/Zhaoshengyuanxiao',
            name: 'Zhaoshengyuanxiao',
            component: resolve => require(['@/components/zhaoshengyuanxiao/schoolListContent'], resolve)
        }

    ]
})