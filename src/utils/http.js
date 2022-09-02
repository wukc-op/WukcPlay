/**
 * axios的封装
 */

// 1、引入axios
import axios from "axios";
import { Message } from 'element-ui';
import local from '@/utils/local'

import router from '@/router/index'

// 2、服务器地址,设置统一的服务器地址 
axios.defaults.baseURL = ''

// 请求拦截器 interceptors  ( ajax发送出去之前 )
axios.interceptors.request.use(config => {
    // 统一带令牌 ( 后端对接口进行了安全验证 如果不带令牌 所有的ajax都发不通 )
    let token = local.get('tk') // 从本地取出令牌

    if (token) {  // Authorization 授权证书
        config.headers.Authorization = token; // 所有的请求 都要携带令牌 才能正常
    }

    return config
})

// 响应拦截器 interceptors ( 接收到数据之前 )
axios.interceptors.response.use(response => {
    // 拦截到了请求返回的数据
    const { data } = response
    // 做兼容，后台没有code返回的情况下，直接返回整个response
    if (data.code !== undefined || data.msg !== undefined) {
        // 只有数据成功的时候，才返回
        if (data.code === 0 || data.code === 200) {
            // 成功之后的提示
            Message({
                message: data.msg,
                type: "success",
            });
            return data
        } else {
            Message({
                message: data.msg,
                type: "error",
            });
        }
    }else {
        return response
    }
    
   
}, err => {
    // 拦截到错误请求，在token错误的情况下跳转到登录页面
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})

// 暴露出去
export default axios