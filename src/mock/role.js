const Mock = require('mockjs');

let data1 = Mock.mock({
    "status": 0,
    "data|15": [{
        "menus|1": [["/admin/home"], ["/goods"], ["/admin/role"], ["/gen-page"]],
        "_id|+1": 101,
        "name|1": ["管理员", '测试', "开发"],
        "create_time": '@date("yyyy-MM-dd")',
        "auth_time": '@date("yyyy-MM-dd")',
        "auth_name": "@cname"
    }]
});

let data2 = Mock.mock({
    "status": 0,
    "msg": "message"
});

// 获取角色列表
Mock.mock('/role/list', 'get', data1)

// 添加角色
Mock.mock('/role/add', 'post', data2)

// 更新角色
Mock.mock('/role/update', 'post', data1)