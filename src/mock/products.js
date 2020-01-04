const Mock = require('mockjs');

let data1, data2, data3, data4;
data1 = Mock.mock({
    "code": 0,
    "data": {
        "pageNum": 1,
        "total": 24,
        "pages": 3,
        "pageSize": 8,
        "list|8": [
            {
                "status|1-2": 1,
                "_id|+1": 12,
                "name": '@cname',
                "imgs|3": ["@image"],
                "desc": 1,
                "price": 1,
                "categoryId": 1,
                "detail": "asd",
            }
        ]

    }
});

data2 = Mock.mock({
    "code": 0,
    "data": {
        "pageNum": 1,
        "total": 24,
        "pages": 3,
        "pageSize": 8,
        "list|8": [
            {
                "status|1-2": 1,
                "_id|+1": 12,
                "name": '@cname',
                "imgs|3": ["@image"],
                "desc": 1,
                "price": 1,
                "categoryId": 1,
                "detail": "asd",
            }
        ]

    }
});

data3 = Mock.mock({
    "code": 0,
    "data": {
        "pageNum": 1,
        "total": 24,
        "pages": 3,
        "pageSize": 8,
        "list|8": [
            {
                "status|1-2": 1,
                "_id|+1": 12,
                "name": '@cname',
                "imgs|3": ["@image"],
                "desc": 1,
                "price": 1,
                "categoryId": 1,
                "detail": "asd",
            }
        ]

    }
});

// 翻页获取数据
Mock.mock('/admin/products?pageNum=1&pageSize=8', 'get', data1)
Mock.mock('/admin/products?pageNum=2&pageSize=8', 'get', data2)
Mock.mock('/admin/products?pageNum=3&pageSize=8', 'get', data3)

// 搜索
Mock.mock('/admin/products/search?pageNum=1&pageSize=8&productName=按名字搜索', 'get', data3)
Mock.mock('/admin/products/search?pageNum=1&pageSize=8&productDesc=按描述搜索', 'get', data3)

// 更新数据
Mock.mock('/admin/products/updateStatus', 'post', ({ body }) => {
    // console.log(body)
    return {
        "code": 0
    }
})

// 根据id获取类别
Mock.mock('/admin/category/info?categoryId=1', 'get', { "code": 0, "data": { "name": "xxyy" } })


data4 = Mock.mock({
    "code": 0,
    "data|8": [
        { "_id|+1": 12, "name": '@cname', }
    ]
});
// 获取商品类别列表
Mock.mock('/admin/category/lists', 'get', data4)