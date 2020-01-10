const Mock = require('mockjs');

let data1 = Mock.mock({
    "status": 0,
    "data": {
        "users|8": [
            {
                "_id|+1": 123,
                "username": "@cname",
                "password": "12313",
                "phone": "23324",
                "email": "adf",
                "role_id|+1": 101,
                "create_time": '@date("yyyy-MM-dd")'
            }
        ],
        "roles|8": [{
            "menus|1": [["/admin/home"], ["/goods"], ["/admin/role"], ["/gen-page"]],
            "_id|+1": 101,
            "name|1": ["管理员", '测试', "开发"],
            "create_time": '@date("yyyy-MM-dd")',
            "auth_time": '@date("yyyy-MM-dd")',
            "auth_name": "@cname"
        }
        ]
    }
});

let data2 = Mock.mock({
    "status": 0,
    "msg": "message"
});

// 获取所有用户列表
Mock.mock('/user/list', 'get', data1)

// 删除指定用户
Mock.mock('/user/delete', 'post', data2)

// 添加用户
Mock.mock('/user/add', 'post', data2)

// 更新用户
Mock.mock('/user/update', 'post', data2)
