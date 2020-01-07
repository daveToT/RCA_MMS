export const menuLists = [
    { title: "首页", key: '/admin/home', icon: 'home', round: '1' },
    {
        title: "商品管理", key: '/goods', icon: 'container', round: '1',
        children: [
            { title: "商品管理", key: '/admin/products' }]
    },
    {
        title: "角色管理", key: '/admin/role', icon: 'team', round: '1'
    },
    {
        title: '生成页面', key: '/gen-page', icon: 'line-chart', round: '1',
        children: [
            { title: '手机端', key: '/gen-page/mobile' },
            { title: 'PC端', key: '/gen-page/pc' }
        ]
    }
]

export const BASE_IMG = 'http://localhost:3000/upload';
export const PAGE_SIZE = 4;