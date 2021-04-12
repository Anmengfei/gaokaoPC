import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'homepage',
        component: resolve => require(['@/components/homePage/index'], resolve)
    }, {
        path: '/appCon',
        name: 'appCon',
        component: resolve => require(['@/components/APP/appCon'], resolve)
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
    },
    {
        path: '/VideoList',
        name: 'VideoList',
        component: resolve => require(['@/components/VideoList/VideoList'], resolve)
    },
    {
        path: '/zhiyuanBiao',
        name: 'zhiyuanBiao',
        component: resolve => require(['@/components/zhiyuanForm/zhiyuanBiao'], resolve)
    },
    {
        path: '/zhiyuanTable',
        name: 'zhiyuanTable',
        component: resolve => require(['@/components/zhiyuanForm/zhiyuanTable'], resolve)
    },
    {
        path: '/addSucceed',
        name: 'addSucceed',
        component: resolve => require(['@/components/zhiyuanForm/addSucceed'], resolve)
    },
    {
        path: '/volunteerVIP',
        name: 'volunteerVIP',
        component: resolve => require(['@/components/volunteerVIP/index'], resolve)
    },
    {
        path: '/UpdatePassword',
        name: 'UpdatePassword',
        component: resolve => require(['@/components/UserInformation/updatePassword'], resolve)
    },
    {
        path: '/touxiang',
        name: 'touxiang',
        component: resolve => require(['@/components/UserInformation/touxiang'], resolve)
    },
    // {
    //     path: '/onetoone',
    //     name: 'OnetoOne',
    //     component: resolve => require(['@/components/oneToone/index'], resolve)
    // },
    {
        path: '/myOrder',
        name: 'myOrder',
        component: resolve => require(['@/components/volunteerVIP/myOrder'], resolve)
    },
    {
        path: '/AllFollowMajor',
        name: 'AllFollowMajor',
        component: resolve => require(['@/components/UserInformation/AllFollowMajor'], resolve)
    }, {
        path: '/AllFollowSchool',
        name: 'AllFollowSchool',
        component: resolve => require(['@/components/UserInformation/AllFollowSchool'], resolve)
    }, {
        path: '/PayCenter',
        name: 'PayCenter',
        component: resolve => require(['@/components/volunteerVIP/PayCenter'], resolve)
    }, {
        path: '/OrderCenter',
        name: 'OrderCenter',
        component: resolve => require(['@/components/volunteerVIP/OrderCenter'], resolve)
    }
    ]
})
