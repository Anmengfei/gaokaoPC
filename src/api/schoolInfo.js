import request from '@/utils/request'

export function getAllSchool(data) {
    return request({
        url: 'findAllSchool',
        method: 'get',
        //  后端接口要求的参数
        params: data
    })
}