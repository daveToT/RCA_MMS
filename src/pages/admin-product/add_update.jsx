import React, { Component } from 'react';
import { Card, Icon, Form, Input, Select, Button } from "antd";
import { reqCategorys } from '../../api';
import memoryUtils from '../../utils/memoryUtils'
import PicturesWall from './picture_wall';
import RichTextEditor from './rich-text-editor'

class AddUpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: []
        };
        this.product = memoryUtils.product;
        this.isUpdate = !!this.product._id;
        this.pwRef = React.createRef();
    }

    getCategorys = async () => {
        const result = await reqCategorys();
        if (result.code === 0) {
            const categorys = result.data;
            this.setState({ categorys })
        }
    }

    validatePrice = (rule, value, callback) => {
        if (!value) { callback() } else if (value * 1 <= 0) { callback('价格必须大于0') } else { callback() }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { name, desc, price, categoryId } = values;
                const images = this.pwRef.current.getImgs();
            }
        })
    }

    componentDidMount() {
        this.getCategorys()
    }

    render() {
        const { categorys } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { isUpdate, product } = this;


        const title = (
            <span>
                <button
                    style={{ border: "none", background: "transparent", color: 'pink', cursor: 'pointer' }}
                    onClick={() => this.props.history.goBack()}
                >
                    <Icon type='arrow-left' />
                </button>
                <span>{isUpdate ? "修改商品" : "添加商品"}</span>
            </span>
        )

        const formLayout = { labelCol: { span: 2 }, wrapperCol: { span: 8 } }

        return (
            <Card title={title}>
                <Form {...formLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="商品名称">
                        {
                            getFieldDecorator("name", {
                                initialValue: product.name,
                                rules: [{ required: true, message: "必须输入商品名称" }],
                            })(<Input placeholder='输入商品名称' />)
                        }
                    </Form.Item>
                    <Form.Item label="商品描述">
                        {
                            getFieldDecorator("desc", {
                                initialValue: product.desc,
                                rules: [{ required: true, message: "必须输入商品描述" }],
                            })(<Input placeholder='输入商品描述' />)
                        }
                    </Form.Item>
                    <Form.Item label="商品价格">
                        {
                            getFieldDecorator("price", {
                                initialValue: product.price,
                                rules: [{ required: true, message: "必须输入商品价格" },
                                { validator: this.validatePrice }],
                            })(<Input type="number" placeholder='输入商品价格' addonAfter="元" />)
                        }
                    </Form.Item>
                    <Form.Item label="商品分类">
                        {
                            getFieldDecorator("categoryId", {
                                initialValue: product.categoryId || "",
                                rules: [{ required: true, message: "必须输入商品分类" }],
                            })(<Select>
                                <Select.Option value="">未选择</Select.Option>
                                {
                                    categorys.map((c) => <Select.Option value={c._id} key={c._id} >{c.name}</Select.Option>)
                                }
                            </Select>)
                        }
                    </Form.Item>
                    <Form.Item label="商品图片">
                        <PicturesWall ref={this.pwRef} imgs={product.imgs} />
                    </Form.Item>
                    <Form.Item label="商品详情">
                        <RichTextEditor />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create()(AddUpdateProduct);