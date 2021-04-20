import request from '@/utils/request'

export function getAllSchool (req) {
  return request({
    url: 'extendPC/getSchoolFirstForPC',
    method: 'get',
    params: req
  })
}

export function getAllMajor (req) {
  return request({
    url: 'extendPC/getMajorFirstForPC',
    method: 'get',
    params: req
  })
}
