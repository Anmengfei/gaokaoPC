import request from '@/utils/request_my'

// 获取所有学校信息
export function getAllschoolInfo(data) {
    return request({
        url: '/schoolApp/findAllSchool',
        method: 'get',
        params: data
    })
}

// 获取所有学校的省份
export function getAllprovinces(data) {
    return request({
        url: '/extendApp/getAllProvinces',
        method: 'get',
        params: data
    })
}
// 获取所有学校类型
export function getAllCollegeType(data) {
    return request({
        url: '/extendApp/findAllSchoolTypes',
        method: 'get',
        params: data
    })
}
// 获取所有学校的层次
export function getAllLevel(data) {
    return request({
        url: '/extendApp/findAllFeatures',
        method: 'get',
        params: data
    })
}
// 获取所有专业大类
export function getAllMajorType(data) {
    return request({
        url: '/majorWX/findAllFirstSubject',
        method: 'get',
        params: data
    })
}
// 获取大家都在关注
// data是我传给它
export function getFollowingList(data) {
    return request({
        url: '/HomePage/getFollowingList',
        method: 'get',
        params: data
    })
}
// 模糊搜索，返回学校名字
export function getsearchSchool(data) {
    return request({
        url: '/searchApp/searchSchoolName',
        method: 'get',
        params: data
    })
}
// 模糊搜索，返回专业名字
export function getsearchMajor(data) {
    return request({
        url: '/searchApp/searchMajor',
        method: 'get',
        params: data
    })
}
// 关注学校
export function followSchool(data) {
    return request({
        url: '/extendApp/followSchool',
        method: 'post',
        params: data
    })
}
// 关注专业
export function followMajor(data) {
    return request({
        url: '/extendApp/followMajor',
        method: 'post',
        params: data
    })
}
// 获取用户关注学校
export function getAllFollowSchool(data) {
    return request({
        url: '/extendApp/getAllFollowSchool',
        method: 'get',
        params: data
    })
}
// 获取用户关注专业
export function getAllFollowMajor(data) {
    return request({
        url: '/extendApp/getAllFollowMajor',
        method: 'get',
        params: data
    })
}
// 判断专业是否关注
export function findMajorFollowOrNot(data) {
    return request({
        url: '/extendApp/findMajorFollowOrNot',
        method: 'get',
        params: data
    })
}
//取消关注专业
export function unfollowMajor(data) {
    return request({
        url: '/extendApp/unfollowMajor',
        method: 'delete',
        params: data
    })
}
// 判断学校是否关注
export function findSchoolFollowOrNot(data) {
    return request({
        url: '/extendApp/findSchoolFollowOrNot',
        method: 'get',
        params: data
    })
}
//取消关注学校
export function unfollowSchool(data) {
    return request({
        url: '/extendApp/unfollowSchool',
        method: 'delete',
        params: data
    })
}
// 通过id获取文章
export function getArticleById(data) {
    return request({
        url: '/HomePage/getArticleById',
        method: 'get',
        params: data
    })
}
// 获取大家都在学的视频列表
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
// 获取首页院校推荐
export function getFitSchool(data) {
    return request({
        url: '/HomePage/getFitSchool',
        method: 'get',
        params: data
    })
}
// 获取用户信息
// get从后端获取数据，使用的都是params，参数的意思，也就是url地址有一个params& post就是从后端传数据，就是data:req
export function getUserInfo(data) {
    return request({
        url: '/userApp/getInformation',
        method: 'get',
        params: data
    })
}
//获取支付二维码
export function getweiXinPay(data) {
    return request({
        url: '/PCpay/weiXinPay',
        method: 'get',
        params: data
    })
}
//获取订单编码
export function addPayOrder(data) {
    return request({
        url: '/PCpay/addPayOrder',
        method: 'get',
        params: data
    })
}
//微信支付状态轮询
export function orderPayState(data) {
    return request({
        url: '/PCpay/orderPayState',
        method: 'get',
        params: data
    })
}
//删除订单
export function delPayOrder(data) {
    return request({
        url: '/PCpay/delPayOrder',
        method: 'post',
        params: data
    })
}
//设置密码
export function setPassWord(data) {
    return request({
        url: '/userApp/setPassWord',
        method: 'post',
        params: data
    })
}
//判断原密码是否正确
export function checkPassWord(data) {
    return request({
        url: '/userApp/checkPassWord',
        method: 'get',
        params: data
    })
}
//获取学校详情
export function getSchoolDetails(data) {
    return request({
        url: '/schoolApp/getSchoolDetails',
        method: 'get',
        params: data
    })
}

// 获取用户志愿表单中的所有志愿
export function getAllWishByListId2 (data) {
    return request({
      url: '/wishApp/getAllWishByListId2',
      method: 'get',
      params: data

    })
  }
  //获取手动表单的id
  export function getAllHandleWishId(data) {
    return request({
        url: '/wishApp/getAllHandleWishId',
        method: 'get',
        params: data
    })
  }

//获取原价
export function getyuanmoney(data) {
  return request({
    url: '/Money/getOriginalMoney',
    method: 'get',
    params: data
  })
}
//获取优惠价格
export function getyouhuimoney(data) {
  return request({
    url: '/Money/getFavorableMoney',
    method: 'get',
    params: data
  })
}
