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
            path: '/WorkIndex',
            name: 'WorkIndex',
            component: resolve => require(['@/components/schoolRecommand/index'], resolve)
        },
        {
            path: '/SchoolInfo',
            name: 'SchoolInfo',
            component: resolve => require(['@/components/schoolInfo/index'], resolve)
        },
        // {
        //   path: '/',
        //   name: 'homepage',
        //   component: resolve => require(['@/components/homePage/index'], resolve)
        // },
        // {
        //   path: '/SchoolRecommand',
        //   name: 'SchoolRecommand',
        //   component: resolve => require(['@/components/schoolRecommand/index'], resolve)
        // },
        // {
        //   path: '/SchoolInfo',
        //   name: 'SchoolInfo',
        //   component: resolve => require(['@/components/schoolInfo/index'], resolve)
        // },
        {
            path: '/Recruit',
            name: 'Recruit',
            component: resolve => require(['@/components/recruit/index'], resolve)
        },
        {
            path: '/Guanzhu',
            name: 'Guanzhu',
            component: resolve => require(['@/components/guanzhu/guanzhu'], resolve)
        },
        {
            path: '/Article',
            name: 'Article',
            component: resolve => require(['@/components/article/article'], resolve)
        }, {
            path: '/VideoList',
            name: 'VideoList',
            component: resolve => require(['@/components/VideoList/VideoList'], resolve)
        }

    ]
})