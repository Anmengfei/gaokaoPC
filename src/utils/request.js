import axios from 'axios'
import qs from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.zytb.top/NEMT/gk/'
})
// request拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // config['headers']['Content-Type'] = 'application/x-www-form-urlencoded'
  // if (config.method === 'POST' || config.method === 'post') {
  //   config.data = qs.stringify(config.data)
  // }
  return config
}, error => {
  // 对请求错误做些什么
  Promise.reject(error)
  console.info(error)
})

export default service
