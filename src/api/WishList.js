import request from '@/utils/request'

// 保存志愿表单，这个接口不用了
export function addWishListPC (req) {
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
  })
}
export function changeWishListPC (params,data) {
  return request({
    url: '/userPC/changeWishListPC',
    method: 'post',
    params: params,
    data:data,
    // params:params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
}
export function getWishListByphoneNum (data) { // 通过手机号获取志愿表单
  return request({
    url: 'wishApp/getWishListByPhoneNum?phoneNum=' + data,
    method: 'get'
  })
}

//获取用户志愿表单中的所有志愿，这个接口不用了
export function getWishListById (data) {
  return request({
    url: 'wishApp/getAllWishByListId?listId=' + data,
    method: 'get'
  })
}
