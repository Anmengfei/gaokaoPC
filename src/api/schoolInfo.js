import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'findAllSchool',
    method: 'get',
    params: req
  })
}
