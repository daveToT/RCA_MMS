const Mock = require('mockjs');

let data1;
data1 = Mock.mock({
    "status": 0,
    "data|15": [{
        "menus|3": ["/admin/home", "/goods", "/admin/role", "/gen-page"],
        "_id|+1": 101,
        "name|1": ["管理员", '测试', "开发"],
        "create_time": '@date("yyyy-MM-dd")',
        "auth_time": '@date("yyyy-MM-dd")',
        "auth_name": "@cname"
    }]
});


// 获取角色列表
Mock.mock('/role/list', 'get', data1)