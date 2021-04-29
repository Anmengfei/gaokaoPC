import request from '@/utils/request_test'

// 用户信息完善
export function completeInformation (data) {
  return request({
    url: '/userApp/completeInformation',
    method: 'post',
    params: data
  })
}
export function getUserInfo (data) {
  return request({
    url: '/userApp/getInformation',
    method: 'get',
    params: data
  })
}
