import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'homepage',
            component: resolve => require(['@/components/homePage/index'], resolve),
        },
        {
            path: '/BasicInfo',
            name: 'BasicInfo',
            component: resolve => require(['@/components/common/basicInfo'], resolve)
        },

    ]
})