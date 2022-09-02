import http from '@/utils/http'

/**
 * 登录接口
 * @param {Object} data 请求参数
 * @returns 
 */
 export const userLogin = data => {
    return http({
        url: '/user/login',
        method: 'post',
        data
    })
}