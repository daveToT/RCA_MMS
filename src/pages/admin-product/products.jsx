import React, { Component } from 'react';
import { Card, Select, Button, Icon, Input, Table, message } from 'antd';
import { reqProducts, reqSearchProducts, reqUpdateStatus } from '../../api';
import LinkButton from '../../components/link-button';
import memoryUtils from '../../utils/memoryUtils'
const Option = Select.Option;

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
            searchType: "productName",
            searchName: "",
            total: 0,
        }
        this.initColumns()
    }

    initColumns = () => {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: "name"
            },
            {
                title: '商品描述',
                dataIndex: "desc"
            },
            {
                title: '商品价格',
                dataIndex: "price",
                render: (price) => '￥' + price
            },
            {
                title: '状态',
                width: 100,
                render: ({ status, _id }) => {
                    let btnText = '下架';
                    let text = '在售中';
                    if (status === 2) {
                        btnText = '上架'
                        text = '已下架'
                    }
                    return (
                        <span>
                            <button onClick={() => { this.updateStatus(_id, status) }}>{btnText}</button><br />
                            <span>{text}</span>
                        </span>
                    )
                }
            },
            {
                title: '操作',
                width: 100,
                render: (product) => (
                    <span>
                        <LinkButton onClick={() => {
                            memoryUtils.product = product;
                            this.props.history.push('/admin/product/detail')
                        }}>详情</LinkButton><br />
                        <LinkButton onClick={() => {
                            memoryUtils.product = product;
                            this.props.history.push('/admin/reproduct')
                        }}>修改</LinkButton>
                    </span>
                )
            }
        ]
    }

    getProducts = async (pageNum) => {
        let result;
        this.pageNum = pageNum;
        const { searchName, searchType } = this.state;

        if (!searchName) {
            result = await reqProducts(pageNum, 8)
        } else {
            result = await reqSearchProducts({ pageNum, pageSize: 8, searchName, searchType })
        }

        if (result.code === 0) {
            const { total, list } = result.data
            this.setState({ products: list, total })
        }
    }

    updateStatus = async (productId, status) => {
        status = status === 1 ? 2 : 1;
        const result = await reqUpdateStatus(productId, status);
        if (result.code === 0) {
            this.getProducts(this.pageNum)
            message.success("更新成功")
        }
    }

    componentDidMount() {
        this.getProducts(1)
    }

    render() {
        const { loading, searchType, products, total } = this.state;
        const title = (
            <span>
                <Select style={{ width: 200 }} value={searchType} onChange={(value) => this.setState({ searchType: value })}>
                    <Option value='productName'>按名称搜索</Option>
                    <Option value='productDesc'>按描述搜索</Option>
                </Select>
                <Input style={{ width: 200, margin: '0 10px' }} onChange={(e) => this.setState({ searchName: e.target.value })} />
                <Button type='primary' onClick={() => this.getProducts(1)}>搜索</Button>
            </span>
        )

        const extra = (
            <Button type='primary' onClick={() => {
                memoryUtils.product = {};
                this.props.history.push('/admin/reproduct')
            }} ><Icon type='plus' />添加商品</Button>
        )

        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    rowKey="_id"
                    loading={loading}
                    columns={this.columns}
                    dataSource={products}
                    pagination={{ total, defaultPageSize: 8, showQuickJumper: true, onChange: this.getProducts, current: this.pageNum }}
                />
            </Card>
        );
    }
}

export default Products;