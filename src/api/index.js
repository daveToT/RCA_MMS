/**
 * 接口-请求函数
 */

import ajax from './ajax';

const BASEURL = ''

export const reqLogin = (username, password) => {
    return ajax({
        method: 'post',
        url: BASEURL + '/login',
        // data 为 json格式
        data: {
            username,
            password
        }
    })
}