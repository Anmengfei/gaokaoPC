import request from '@/utils/request'
import { getToken } from '@/utils/auth.js'
import qs from 'qs'
export function addWishListPC (req) { // 保存志愿表单
  return request({
    url: '/userPC/addWishListPC',
    method: 'post',
    data: req
  })
}

export function updateWishListPC (params,data) { // 保存志愿表单
  return request({
    url: '/userPC/changeWishListPC',
    method: 'post',
    params:params,
    data
    // headers: {
    //   "Content-Type": "application/json;charset=UTF-8"
    // },
  })
}
// export function getAllWishListID (data) { // 获取用户已经关注的所有志愿的id
//   return request({
//     url: 'wishApp/getAllWishId?phoneNum=' + data,
//     method: 'get'
//
//   })
// }
//
// export function getAllWishList (data) { // 获取用户志愿表单中的所有志愿
//   return request({
//     url: 'wishApp/getAllWishByListId?listId=' + data,
//     method: 'get'
//   })
// }
export function getWishListByphoneNum (data) { // 通过手机号获取志愿表单
  return request({
    url: 'wishApp/getWishListByPhoneNum?phoneNum=' + data,
    method: 'get'
  })
}

export function getWishListById (data) { // 获取用户志愿表单中的所有志愿
  return request({
    url: 'wishApp/getAllWishByListId?listId=' + data,
    method: 'get'
  })
}
