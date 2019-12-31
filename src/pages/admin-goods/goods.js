import React, { Component } from 'react';
import {
    Card,
    Select,
    Input,
    Button,
    Icon,
    Table
} from "antd";

const Option = Select.Option

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            columns: [
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
                    // render: (product) => '￥' + product.price
                },
                {
                    title: '商品状态',
                    dataIndex: "status",
                    render: (status) => {
                        let btnText = '下架';
                        let text = '在售中';
                        if (status === 2) {
                            btnText = '上架'
                            text = '已下架'
                        }
                        return (
                            <span>
                                <button>下架</button>
                                <span>在售中</span>
                            </span>
                        )
                    }
                },
                {
                    title: '操作',
                    render: (product) => (
                        <spna>
                            <Button>详情</Button>
                            <Button>修改</Button>
                        </spna>
                    )
                }
            ],
            products: []
        }
    }

    componentDidMount() {
        const data = [{
            "status": 1,
            "imgs": [""],
            "_id": 1,
            "name": "QWE",
            "desc": 1,
            "price": 331,
            "categoryId": 1,
            "detail": ""
        },
        {
            "status": 2,
            "imgs": [""],
            "_id": 1,
            "name": "ASD",
            "desc": 1,
            "price": 125,
            "categoryId": 1,
            "detail": ""
        },
        {
            "status": 1,
            "imgs": [""],
            "_id": 1,
            "name": "ZXC",
            "desc": 1,
            "price": 313,
            "categoryId": 1,
            "detail": ""
        }]

        this.setState({
            products: data
        })
    }

    render() {
        const { loading, columns, products } = this.state;

        const title = (
            <span>
                <Select style={{ width: 200 }} value="2" >
                    <Option value='1'>按xxx搜索</Option>
                    <Option value='2'>按xxx搜索</Option>
                </Select>
                <Input style={{ width: 200, margin: '0 10px' }} />
                <Button type='primary'>搜索</Button>
            </span>
        )

        const extra = (
            <Button type='primary'>
                <Icon type='plus' />
                添加商品
            </Button>
        )

        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    rowKey="_id"
                    loading={loading}
                    columns={columns}
                    dataSource={products}
                    pagination={{ defaultPageSize: 3, showQuickJumper: true }}
                />
            </Card>
        );
    }
}

export default Goods;

/**
 * 获取商品分页列表
 *
 * 请求url：.../manage/product/list
 *
 * 请求方式：GET
 *
 * 参数类型：
 *  参数-pageNum  是否必选-Y 类型-Number 说明-页码
 *  参数-pageSize 是否必选-Y 类型-Number 说明-每页条目数
 *
 * 返回示例：
 * {
 *      "status":0,
 *      "data":{
 *                  "pageNum":1,
 *                  "total":12,
 *                  "pages":3,
 *                  "pageSize":5,
 *                  "list":[
 *                              {
 *                                  "status":1,  在售
 *                                  "imgs":[...],
 *                                  "_id":1,
 *                                  "name":1,
 *                                  "desc":1,
 *                                  "price":1,
 *                                  "categoryId":1,
 *                                  "detail":"<p><span style=\"color:rgb(228,57,60);...">xxxxxxxxx</span></p>",
 *                              },
 *                              {
 *                                  "status":2,  下架
 *                                  "imgs":[...],
 *                                  "_id":1,
 *                                  "name":1,
 *                                  "desc":1,
 *                                  "price":1,
 *                                  "categoryId":1,
 *                                  "detail":"<p><span style=\"color:rgb(228,57,60);...">xxxxxxxxx</span></p>",
 *                              }
 *                          ]
 *              }
 * }
 */