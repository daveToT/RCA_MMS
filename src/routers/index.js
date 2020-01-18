export const menuLists = [
    { title: "react-dnd", key: '/admin/home', icon: 'google', round: '1' },
    { title: "echarts-for-react", key: '/admin/eachrts', icon: 'gitlab', round: '1' },
    {
        title: "商品管理", key: '/goods', icon: 'ant-design', round: '1',
        children: [
            { title: "商品管理", key: '/admin/products' }]
    },
    {
        title: "用户管理", key: '/admin/user', icon: 'chrome', round: '1'
    },
    {
        title: "角色管理", key: '/admin/role', icon: 'codepen', round: '1'
    },
    {
        title: '生成页面', key: '/gen-page', icon: 'heat-map', round: '1',
        children: [
            { title: '手机端', key: '/admin/gen-page/mobile' },
            { title: 'PC端', key: '/admin/gen-page/pc' }
        ]
    }
]