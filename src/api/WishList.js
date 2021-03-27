import request from '@/utils/request_my'
import { getToken } from '@/utils/auth.js'

export function addWishListPC (req) { // 保存志愿表单
  return request({
    url: '/userPC/addWishListPC',
    method: 'post',
    params: req
    // params: para
    // headers: {
    //   token: '2c90e1093aa14a58bfd0cc9938b52b25'
    // }

  })
}

export function getAllWishListID (data) { // 获取用户已经关注的所有志愿的id
  return request({
    url: 'wishApp/getAllWishId?phoneNum=' + data,
    method: 'get'

  })
}

export function getAllWishList (data) { // 获取用户志愿表单中的所有志愿
  return request({
    url: 'wishApp/getAllWishByListId?listId=' + data,
    method: 'get'
  })
}
