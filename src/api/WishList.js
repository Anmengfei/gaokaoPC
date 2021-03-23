import request from '@/utils/request_my'

export function addWishListPC (req) {
  return request({
    url: '/userPC/addWishListPC',
    method: 'post',
    req
    // data: req,
    // headers: {
    //   'contentType': 'application/json;charset=utf-8'
    // }
  })
}
