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

// 删除图片
export const reqDeleteImg = (name) => ajax({
    method: 'post',
    url: BASEURL + '/admin/img/delete',
    data: { name }
})

/**
 * 上传图片
 * response：
 * {
 *      "status":0,
 *      "data":{"name":"image-xxxx.jpg","url":"http://localhost:xxx/upload/image-xxxx.jpg"}
 * }
 */

//  添加/修改商品
export const reqAddorUpdateProduct = (product) => ajax({
    method: "post",
    url: BASEURL + "/admin/product/" + (product._id ? 'update' : 'add'),
    data: product
})

// 获取所有角色列表
export const reqRoles = () => ajax({
    method: 'get',
    url: '/role/list'
})

// 添加角色
export const reqAddRole = (roleName) => ajax({
    method: 'post',
    url: '/role/add',
    data: { roleName }
})

// 更新角色
export const reqUpdateRole = (role) => ajax({
    method: 'post',
    url: '/role/update',
    params: { role }
})

// 获取所有用户列表
export const reqUsers = () => ajax({
    method: 'get',
    url: '/user/list'
})

// 删除指定用户
export const reqDeleteUser = (userId) => ajax({
    method: 'post',
    url: '/user/delete',
    data: { userId }
})

// 添加/更新用户
export const reqAddOrUpdateUser = (user) => ajax({
    method: 'get',
    url: '/user/' + (user._id ? 'update' : "add"),
    data: {user}
})

// 获取logs列表
export const reqLogs = ()=> ajax({
    method:'get',
    url:'/admin/logs'
})