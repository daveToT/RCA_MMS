const Mock = require('mockjs');

Mock.mock('/login', 'post', ({ body }) => {
    const params = JSON.parse(body);
    if (params.username === 'admin' && params.password === 'admin') {
        return {
            code: 0,
            msg: '登录成功',
            data: {
                username: 'kk'
            }
        }
    } else {
        return {
            code: 1,
            msg: '用户名或密码错误'
        }
    }
})