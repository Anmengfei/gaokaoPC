import request from '@/utils/request_my'

//获取所有学校的省份
export function getAllprovinces (data) {
  return request({
    url: '/extendApp/getAllProvinces',
    method: 'get',
    params: data
  })
}
//获取所有学校类型
export function getAllCollegeType (data) {
  return request({
    url: '/extendApp/findAllSchoolTypes',
    method: 'get',
    params: data
  })
}
//获取所有学校的层次
export function getAllLevel (data) {
  return request({
    url: '/extendApp/findAllFeatures',
    method: 'get',
    params: data
  })
}
//获取所有专业大类
export function getAllMajorType (data) {
  return request({
    url: '/majorApp/findAllFirstSubject',
    method: 'get',
    params: data
  })
}
