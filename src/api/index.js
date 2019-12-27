/**
 * 接口-请求函数
 */

import ajax from './ajax';
import jsonp from 'jsonp';
import { message } from 'antd';


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