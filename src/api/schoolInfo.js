import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'extendApp/getSchoolFirst',
    method: 'get',
    params: req
  })
}

export function getAllMajor (req) {
  return request({
    url: 'extendApp/getMajorFirst',
    method: 'get',
    params: req
  })
}
