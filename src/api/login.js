import request from '@/utils/request_my'

//通过手机验证码登录
export function withVerifyCodelogin (data) {
  return request({
    url: '/userApp/loginByVerifyCode',
    method: 'post',
    params: data
  })
}
