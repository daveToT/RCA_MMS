import React, { useState } from 'react';
import { Layout } from "antd";
import { Redirect, Switch, Route } from 'react-router-dom';

// import memoryUtils from '../../utils/memoryUtils';
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

import Home from '../admin-home/home';
import Bug from "../admin-stats/Bug";
import Report from "../admin-stats/report";

const { Content, Sider } = Layout;

function Admin(props) {
    // const user = memoryUtils.user;
    // if (user._id) {
    //     return <Redirect to='/login' />
    // }

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout >
            <Header />
            <Layout style={{ backgroundColor: "white"}}>
                <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}><LeftNav /></Sider>
                <Content >
                    <Switch>
                        <Route path='/admin/home' component={Home} />
                        <Route path='/admin/bug' component={Bug} />
                        <Route path='/admin/report' component={Report} />
                        <Redirect to='/admin/home' />
                    </Switch>
                </Content>

            </Layout>
        </Layout>

    )
}

export default Admin;