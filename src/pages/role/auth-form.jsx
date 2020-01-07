import React, { Component } from 'react';
import menuLists from '../../config'
import { Tree, Form, Input } from 'antd'
import PropTypes from 'prop-types'

const { TreeNode } = Tree
const Item = Form.Item

export default class AuthForm extends Component {
    static propTypes = {
        role: PropTypes.object
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { role } = this.props
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 15 }
        }

        return (
            <div>
                <Item label='角色名称' {...formItemLayout}>
                    <Input value={role.name} disabled />
                </Item>
            </div>
        )
    }
}