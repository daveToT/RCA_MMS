import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import "./index.less";

const { SubMenu } = Menu;


class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                { title: "首页", key: '/home', icon: 'home' },
                {
                    title: "商品", key: '/products', icon: 'appstore',
                    children: [{ title: "A", key: '/categoryA', icon: 'bars' }, { title: "B", key: '/categoryB', icon: 'tool' }]
                }
            ]
        }
        this.getMenuNodes = this.getMenuNodes.bind(this)
    }

    getMenuNodes(menuList) {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.item key={item.key}>
                        <Link to={item.key} ><Icon type={item.icon} /><span>{item.title}</span></Link>
                    </Menu.item>
                )
            }
            return (
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }>
                    {
                        this.getMenuNodes(item.children)
                    }

                </SubMenu>
            )
        })
    }

    render() {
        return (
            <div className='left-nav'>
                <Menu defaultSelectedKeys={['/home']} mode='inline' theme='light'>
                    {
                        this.getMenuNodes(this.state.menuList)
                    }
                </Menu>
            </div>
        );
    }
}

export default LeftNav;
