import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select } from 'antd'

class AddUser extends Component {
    static propTypes = {
        roles: PropTypes.array.isRequired,
        user: PropTypes.object

    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate(nextProps, nextstate) {
        if (this.props.roles !== nextProps.roles) {
            return true;
        }
        return false;
    }
    render() {
        const { roles } = this.props
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 15 }
        }
        return (
            <Form {...formItemLayout}>
                <Form.Item label="用户名">
                    {
                        getFieldDecorator('username', {
                            initialValue: "",
                            rules: [{ required: true, message: '必须输入用户名' }]
                        })(<Input type='txt' placeholder='请输入用户名' />)
                    }
                </Form.Item>
                <Form.Item label="密码">
                    {
                        getFieldDecorator('password', {
                            initialValue: "",
                            rules: [{ required: true, message: '必须输入密码' }]
                        })(<Input type='password' placeholder='请输入密码' />)
                    }
                </Form.Item>
                <Form.Item label="手机号">
                    {
                        getFieldDecorator('phone', {
                            initialValue: "",
                            rules: [{ required: true, message: '必须输入手机号' }]
                        })(<Input type='password' placeholder='请输入手机号' />)
                    }
                </Form.Item>
                <Form.Item label="邮箱">
                    {
                        getFieldDecorator('email', {
                            initialValue: "",
                            rules: [{ message: '请输入正确格式的邮箱' }]
                        })(<Input type='password' placeholder='请输入邮箱' />)
                    }
                </Form.Item>
                <Form.Item label="角色">
                    {
                        getFieldDecorator('roles', {
                            initialValue: "",
                            rules: [{ required: true, message: '必须选择一种角色' }]
                        })(<Select>
                            {
                                roles.map((item) => {
                                    return <Select.Option key={item._id}>{item.name}</Select.Option>
                                })}
                        </Select>)
                    }
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(AddUser);