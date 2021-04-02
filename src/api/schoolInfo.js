import request from '@/utils/request_my'

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
