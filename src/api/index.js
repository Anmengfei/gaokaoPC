import request from '@/utils/request_my'

//获取所有学校信息
export function getAllschoolInfo (data) {
  return request({
    url: '/schoolApp/findAllSchool',
    method: 'get',
    params: data
  })
}

//获取所有学校的省份
export function getAllprovinces (data) {
  return request({
    url: '/extendApp/getAllProvinces',
    method: 'get',
    params: data
  })
}
// 获取所有学校类型
export function getAllCollegeType (data) {
  return request({
    url: '/extendApp/findAllSchoolTypes',
    method: 'get',
    params: data
  })
}
// 获取所有学校的层次
export function getAllLevel (data) {
  return request({
    url: '/extendApp/findAllFeatures',
    method: 'get',
    params: data
  })
}
// 获取所有专业大类
export function getAllMajorType (data) {
  return request({
    url: '/majorWX/findAllFirstSubject',
    method: 'get',
    params: data
  })
}
// 获取院校优先列表
export function getAllschoolFirst (data) {
  return request({
    url: '/extendApp/getSchoolFirst',
    method: 'get',
    params: data
  })
}
// 模糊搜索，返回学校名字
export function getsearchSchool (data) {
  return request({
    url: '/searchApp/searchSchoolName',
    method: 'get',
    params: data
  })
}
// 关注学校
export function followSchool (data) {
  return request({
    url: '/extendApp/followSchool',
    method: 'post',
    params: data
  })
}
// 关注专业
export function followMajor (data) {
  return request({
    url: '/extendApp/followMajor',
    method: 'post',
    params: data
  })
}
// 获取用户关注学校
export function getAllFollowSchool (data) {
  return request({
    url: '/extendApp/getAllFollowSchool',
    method: 'get',
    params: data
  })
}
// 获取用户关注专业
export function getAllFollowMajor (data) {
  return request({
    url: '/extendApp/getAllFollowMajor',
    method: 'get',
    params: data
  })
}
// 判断专业是否关注
export function findMajorFollowOrNot (data) {
  return request({
    url: '/extendApp/findMajorFollowOrNot',
    method: 'get',
    params: data
  })
}
// 判断学校是否关注
export function findSchoolFollowOrNot (data) {
  return request({
    url: '/extendApp/findSchoolFollowOrNot',
    method: 'get',
    params: data
  })
}
