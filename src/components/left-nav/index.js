import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import "./index.less";

const { SubMenu } = Menu;


class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                { title: "首页", key: '/admin/home', icon: 'home', round: '1' },
                {
                    title: "商品", key: '/goods', icon: 'container', round: '1',
                    children: [
                        { title: "种类管理", key: '/admin/category' },
                        { title: "商品管理", key: '/admin/goods'}]
                },
                {
                    title: "统计", key: '/sum', icon: 'line-chart', round: '1',
                    children: [
                        { title: "问题统计", key: '/admin/bug' },
                        { title: "项目报告", key: '/admin/report' }]
                },
                {
                    title: '生成页面', key: '/gen-page', icon: 'line-chart', round: '1',
                    children: [
                        { title: '手机端', key: '/gen-page/mobile' },
                        { title: 'PC端', key: '/gen-page/pc' }
                    ]
                }
            ]
        }
        this.getMenuNodes = this.getMenuNodes.bind(this)
    }

    getMenuNodes(menuList) {
        const selectedKey = this.props.location.pathname;

        return menuList.map(item => {
            if (!item.children) {
                if (item.round) {
                    return (
                        <Menu.Item key={item.key}>
                            <Link to={item.key} ><Icon type={item.icon} /><span>{item.title}</span></Link>
                        </Menu.Item>
                    )
                } else {
                    return (
                        <Menu.Item key={item.key}>
                            <Link to={item.key} ><span>{item.title}</span></Link>
                        </Menu.Item>
                    )
                }

            } else {
                const cItem = item.children.find(cItem => cItem.key === selectedKey)
                if (cItem) {
                    this.openKey = item.key
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
            }
        })
    }

    UNSAFE_componentWillMount(){
        this.menuNodes = this.getMenuNodes(this.state.menuList);
    }

    render() {
        // const menuNodes = this.getMenuNodes(this.state.menuList);
        const selectedKey = this.props.location.pathname;

        return (
            <div className='left-nav'>
                <Menu mode='inline' theme='light' defaultOpenKeys={[this.openKey]} selectedKeys={[selectedKey]}>
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftNav);
