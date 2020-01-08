import React, { Component } from 'react'
import { menuLists } from '../../config'
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
        this.state = {
            checkedKeys: this.props.role.menus || []
        }
        this.treeNodes = this.getNodes(menuLists)
    }

    getMenus = () => this.state.checkedKeys

    getNodes = (lists) => {
        return lists.map(item => {
            return (
                <TreeNode key={item.key} title={item.title}>
                    {item.children ? this.getNodes(item.children) : null}
                </TreeNode>
            )
        })
    }

    render() {
        const { role } = this.props
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 15 }
        }
        const { checkedKeys } = this.state

        return (
            <div>
                <Item label='角色名称' {...formItemLayout}>
                    <Input value={role.name} disabled />
                </Item>
                <Tree
                    checkable
                    defaultExpandAll
                    checkedKeys={checkedKeys}
                    onCheck={(checkedKeys) => this.setState({ checkedKeys })}
                >
                    <TreeNode title="权限" key="all">
                        {
                            this.treeNodes
                        }
                    </TreeNode>
                </Tree>
            </div >
        )
    }
}