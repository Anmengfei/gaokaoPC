import request from '@/utils/request_my'

//获取所有学校信息
export function getAllschoolInfo(data) {
    return request({
        url: '/schoolApp/findAllSchool',
        method: 'get',
        params: data
    })
}

//获取所有学校的省份
export function getAllprovinces(data) {
    return request({
        url: '/extendApp/getAllProvinces',
        method: 'get',
        params: data
    })
}
//获取所有学校类型
export function getAllCollegeType(data) {
    return request({
        url: '/extendApp/findAllSchoolTypes',
        method: 'get',
        params: data
    })
}
//获取所有学校的层次
export function getAllLevel(data) {
    return request({
        url: '/extendApp/findAllFeatures',
        method: 'get',
        params: data
    })
}
//获取所有专业大类
export function getAllMajorType(data) {
    return request({
        url: '/majorWX/findAllFirstSubject',
        method: 'get',
        params: data
    })
}
//获取大家都在关注
// data是我传给它
export function getFollowingList(data) {
    return request({
        url: '/HomePage/getFollowingList',
        method: 'get',
        params: data
    })
}
//通过id获取文章
export function getArticleById(data) {
    return request({
        url: '/HomePage/getArticleById',
        method: 'get',
        params: data
    })
}
//获取大家都在学
//获取大家都在学的视频列表
export function getAllIsLearning(data) {
    return request({
        url: '/extendApp/getAllIsLearning',
        method: 'get',
        params: data
    })
}
// 获取院校优先列表
export function getAllschoolFirst(data) {
    return request({
        url: '/extendApp/getSchoolFirst',
        method: 'get',
        params: data
    })
}