import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { getToken } from './auth.js'
// 创建axios实例
const service = axios.create({
    // baseURL: 'https://www.zytb.top/NEMT/gk/'
    baseURL: '/api/'
})
// request拦截器
service.interceptors.request.use(config => {
    config['headers']['Content-Type'] = 'application/x-www-form-urlencoded'
    console.log()
    if (localStorage.getItem('token')) {
        config.headers['token'] = getToken()
    }
    if (config.method === 'POST' || config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
},

    error => {
        // 对请求错误做些什么
        console.info(error)
        return Promise.reject(error)
    })
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        console.log('err' + error) // for debug

        return Promise.reject(error)
    }
)

export default service
