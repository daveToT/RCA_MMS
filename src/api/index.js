/**
 * 接口-请求函数
 */

import ajax from './ajax';
import jsonp from 'jsonp';
import { message } from 'antd';


const BASEURL = ''

// 请求登陆
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

// 发送jsonp请求获取天气信息
export const reqWeather = (city) => {
    return new Promise(
        (resolve, reject) => {
            const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
            jsonp(url, (err, data) => {
                if (!err && data.error === 0) {
                    const { dayPictureUrl, weather } = data.results[0].weather_data[0]
                    resolve({ dayPictureUrl, weather })
                } else {
                    message.error('获取天气失败')
                }
            })
        })
}


// 获取分类列表
// export const reqCategories = () => ajax.get(BASEURL + '/manage/category/list')
// export const reqCategories = () => ajax({
//     method: 'GET', // get请求时，这个可以省略
//     url: BASEURL + '/manage/category/list'
// })
export const reqCategories = () => ajax(BASEURL + '/manage/category/list')


// 添加分类
export const reqAddCategory = (categoryName) => ajax.post(BASEURL + '/manage/category/add', { categoryName })

// 更新分类
export const reqUpdateCategory = ({ categoryId, categoryName }) => ajax.post(BASEURL + '/manage/category/update',
    { categoryId, categoryName })