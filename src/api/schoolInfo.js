import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'extendApp/getSchoolFirst',
    method: 'get',
    params: req
  })
}
