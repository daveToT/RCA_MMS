import ajax from './ajax';
import jsonp from 'jsonp';

const BASEURL = ''

// 登陆
export const reqLogin = (username, password) => ajax({
    method: 'post',
    url: BASEURL + '/login',
    data: { username, password }
})

// 获取天气信息
export const reqWeather = (city) => {
    return new Promise(
        (resolve, reject) => {
            const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
            jsonp(url, (err, data) => {
                if (!err && data.error === 0) {
                    const { dayPictureUrl, weather } = data.results[0].weather_data[0]
                    resolve({ dayPictureUrl, weather })
                }
            })
        })
}

// 获取商品分页列表
// pageNum-页码；pageSize-每页条数
export const reqProducts = (pageNum, pageSize) => {
    return ajax({
        method: "get",
        url: BASEURL + '/admin/products',
        params: { pageNum, pageSize }
    })
}

// 根据ID/Name搜索产品分页列表
export const reqSearchProducts = ({ pageNum, pageSize, searchName, searchType }) => ajax({
    method: 'get',
    url: BASEURL + '/admin/products/search',
    params: { pageNum, pageSize, [searchType]: searchName }
})

// 商品进行上架下架处理
export const reqUpdateStatus = (productId, status) => ajax({
    method: 'post',
    url: BASEURL + '/admin/products/updateStatus',
    data: { productId, status }
})

// 根据分类id获取类别
export const reqCategory = (categoryId) => ajax({
    method: 'get',
    url: BASEURL + '/admin/category/info',
    params: { categoryId }
})

// 获取所有分类的列表
export const reqCategorys = () => ajax({
    method: "get",
    url: BASEURL + '/admin/category/lists'
})