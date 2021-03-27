import request from '@/utils/request_my'

// 通过手机验证码登录
export function withVerifyCodelogin (data) {
  return request({
    url: '/userPC/loginByVerifyCode',
    method: 'post',
    params: data
  })
}
// 退出登录
export function userLogout (data) {
  return request({
    url: '/userApp/logOut',
    method: 'post',
    params: data
  })
}
// 用户信息完善
export function completeInformation (data) {
  return request({
    url: '/userApp/completeInformation',
    method: 'post',
    params: data
  })
}

