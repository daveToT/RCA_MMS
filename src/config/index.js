export const menuLists = [
    { title: "首页", key: '/admin/home', icon: 'home', round: '1' },
    // { title: "迭代", key: '/admin/backblog', icon: 'tags', round: '1' },
    {
        title: "管理", key: '/goods', icon: 'container', round: '1',
        children: [
            { title: "商品管理", key: '/admin/products' }]
    },
    {
        title: "Next", key: '/sum', icon: 'line-chart', round: '1',
        children: [
            { title: "waiting", key: '/admin/product-chart' }
        ]
    }
]