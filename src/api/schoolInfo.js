import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'extendApp/getSchoolFirst2',
    method: 'get',
    params: req
  })
}

export function getAllMajor (req) {
  return request({
    url: 'extendApp/getMajorFirst2',
    method: 'get',
    params: req
  })
}
