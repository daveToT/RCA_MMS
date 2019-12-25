/**
 * 封装了发送ajax请求的函数
 */

import axios from 'axios';
import qs from 'qs'

// 请求拦截器
axios.interceptors.request.use((config) => {
    // post 的 data 转为 urlencoded格式（如果后端只支持这种格式）
    const { method, data } = config;
    if (method.toLowerCase() === 'post' && typeof (data) === 'object') {
        config.data = qs.stringify(data)
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return new Promise(()=>{})
})



export default axios