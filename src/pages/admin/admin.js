import React from 'react';
import { Layout } from "antd";
import { Redirect, Switch, Route } from 'react-router-dom';

// import memoryUtils from '../../utils/memoryUtils';
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

import Home from '../admin-home/home';
import Product from '../admin-product/product';
import Bar from '../admin-charts/bar';
import Line from '../admin-charts/line';


const { Content, Sider } = Layout;

function Admin(props) {
    // const user = memoryUtils.user;
    // if (user._id) {
    //     return <Redirect to='/login' />
    // }

    return (
        <Layout style={{ height: "100%" }}>
            <Header />
            <Layout>
                <Sider theme="light"><LeftNav /></Sider>
                <Content style={{ backgroundColor: "red" }}>
                    <Switch>
                        <Route path='/admin/home' component={Home} />
                        <Route path='/admin/product' component={Product} />
                        <Route path='/admin/charts/bar' component={Bar} />
                        <Route path='/admin/charts/line' component={Line} />
                        <Redirect to='/admin/home' />
                    </Switch>
                </Content>
            </Layout>
        </Layout>

    )
}

export default Admin;