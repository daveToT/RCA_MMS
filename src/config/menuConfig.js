const menuList = [
    { title: "首页", key: '/home', icon: 'home' },
    {
        title: "商品", key: '/products', icon: 'appstore',
        chidren: [{ title: "A", key: '/categoryA', icon: 'bars' }, { title: "B", key: '/categoryB', icon: 'tool' }]
    }
]

export default menuList;