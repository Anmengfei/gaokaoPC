import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'schoolApp/findAllSchool',
    method: 'get',
    params: req
  })
}

export function getMajorofSchool (req) {
  return request({
    url: 'schoolWX/getSchoolDetails',
    method: 'get',
    params: req
  })
}
