import React, { Component } from 'react';
import {
    Card,
    Button,
    Icon,
    Table,
    Modal,
    message
} from "antd";

// import reqCategories from '../../api';
// import reqAddCategory from '../../api';
// import reqUpdateCategory from '../../api';

import UpdateForm from './update-form';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '种类名称',
                    dataIndex: 'name',
                },
                {
                    title: '修改分类',
                    width: 300,
                    render: (rowItem) => <Button onClick={
                        () => {
                            this.rowItem = rowItem;
                            this.setState({ showStatus: 2 })
                        }
                    }>修改分类</Button>
                }
            ],
            categories: [],
            loading: false,
            showStatus: 0
        }
    }

    getCategories = async () => {
        // this.setState({ loading:true })
        // const result = await reqCategories()
        // this.setState({ loading:false })
        // if (result.state === 0) {
        //     this.setState({
        //         categories: result["data"]
        //     })
        // }else{
        //     message.error('获取分类列表失败')
        // }    

        this.setState({ loading: true })
        this.setState({
            categories: [
                { "_id": "xczxczxcxzcsdas", "name": "种类1" },
                { "_id": "dasdasdasdsadxc", "name": "种类2" },
                { "_id": "werddfygfgfgdsc", "name": "种类3" },
                { "_id": "jdferkldatersdf", "name": "种类4" },
                { "_id": "jdferasdatersdf", "name": "种类5" },
                { "_id": "jdferxcvatersdf", "name": "种类6" },
                { "_id": "jvcerkldatersdf", "name": "种类7" },
                { "_id": "nbmfrkldatersdf", "name": "种类8" }
            ]
        })
        this.setState({ loading: false })
    }

    handleOk = async () => {
        // this.form.validateFields(async (err, values) => {
        //     if (!err) {
        //         this.form.resetFields()
        //         const { categoryName } = values
        //         const { showStatus } = this.state
        //         let result;
        //         if (showStatus === 1) {
        //             result = await reqAddCategory(categoryName)
        //         } else {
        //             const categoryId = this.category._id;
        //             result = await reqUpdateCategory({ categoryId, categoryName })
        //         }

        //         this.setState({ showStatus: 0 })
        //         const action = showStatus === 1 ? '添加' : '修改';
        //         if (result.status === 0) {
        //             this.getCategories()
        //         } else {
        //             message.error(action + '失败')
        //         }
        //     }
        // })

        this.form.validateFields(async (err, values) => {
            this.form.resetFields()
            if (!err) {
                const { categoryName } = values
                message.success(categoryName)
                this.setState({ showStatus: 0 })
                this.getCategories()
            }
        })
    }

    handleCancel = () => {
        this.form.resetFields()
        this.setState({ showStatus: 0 })
    }

    componentDidMount() {
        this.getCategories()
    }

    render() {
        const { columns, categories, loading, showStatus } = this.state;
        const rowItem = this.rowItem || {}
        const extra = (
            <Button type="primary" onClick={() => { this.setState({ showStatus: 1 }) }} >
                <Icon type="plus" />
                添加
            </Button>
        );

        return (
            <>
                <Card extra={extra}>
                    <Table
                        // bordered={true}
                        bordered
                        rowKey="_id"
                        loading={loading}
                        columns={columns}
                        dataSource={categories}
                        pagination={{ defaultPageSize: 4, showQuickJumper: true }}
                    />
                </Card>
                <Modal
                    title={showStatus === 1 ? "添加分类" : "修改分类"}
                    visible={showStatus !== 0}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/* 子组件传递过来的form对象，保存到当前组件对象上 */}
                    <UpdateForm setForm={form => this.form = form} rowItemName={rowItem.name} />
                </Modal>

            </>
        );
    }
}
export default Category;

/**
 * =====================================================
 * 获取分类列表
 *
 * 请求url: .../manage/category/list
 * 请求方式: GET
 * 参数类型: 无
 * 返回示例:
 * {
 *      "status":0,
 *      "data":[
 *          {"_id":"xczxczxcxzcsdas", "name":"种类1"},
 *          {"_id":"dasdasdasdsadxc", "name":"种类2"},
 *          {"_id":"werddfygfgfgdsc", "name":"种类3"},
 *          {"_id":"jdferkldatersdf", "name":"种类4"},
 *          {"_id":"jdferasdatersdf", "name":"种类5"},
 *          {"_id":"jdferxcvatersdf", "name":"种类6"},
 *          {"_id":"jvcerkldatersdf", "name":"种类7"},
 *          {"_id":"nbmfrkldatersdf", "name":"种类8"}
 *      ]
 * }
 *
 *
 * =====================================================
 * 添加分类
 *
 * 请求url: .../manage/category/add
 * 请求方式: POST
 * 参数类型:
 *          参数-categoryName 是否必选-Y 类型-string 说明-名称
 * 返回示例:
 *      添加分类:
 *      {
 *          "status":0,
 *          "data":{
 *                      "_id" : "xxxxxaaaaa"
 *                      "name": "分类N"
 *                  }
 *      }
 *
 * =====================================================
 * 更新分类
 *
 * 请求url: .../manage/category/update
 * 请求方式: POST
 * 参数类型:
 *          参数-categoryId   是否必选-Y 类型-string 说明-分类的ID
 *          参数-categoryName 是否必选-Y 类型-string 说明-名称
 * 返回示例:
 *      添加分类:
 *      {
 *          "status":0
 *      }
 */


