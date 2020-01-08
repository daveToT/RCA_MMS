import React, { Component } from 'react';
import { Card, Button, Table, Modal, message } from 'antd';
import LinkButton from '../../components/link-button';
import { formateDate } from '../../utils/date';
import { reqRoles, reqAddRole, reqUpdateRole } from '../../api';
import AddForm from './add-role';
import AuthForm from './auth-form';
import memoryUtils from '../../utils/memoryUtils'


class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            isShowAdd: false,
            isShowAuth: false
        }
        this.initialColumn()
        this.roleRef = React.createRef()
        this.authRef = React.createRef()
    }

    initialColumn = () => {
        this.columns = [
            { title: '角色名称', dataIndex: "name" },
            { title: '创建时间', dataIndex: "create_time", render: formateDate },
            { title: '授权时间', dataIndex: "auth_time", render: formateDate },
            { title: '授权人', dataIndex: "auth_name" },
            { title: '操作', render: (role) => <LinkButton onClick={() => this.showAuth(role)}>设置权限</LinkButton> }
        ]
    }

    getRoles = async () => {
        const result = await reqRoles()
        if (result.status === 0) {
            const roles = result.data
            this.setState({ roles })
        }
    }

    updateRole = async () => {
        this.setState({ isShowAuth: false })
        const { role } = this
        if (this.authRef && this.authRef.current) {
            console.log(this.authRef.current.getMenus())
            role.menus = this.authRef.current.getMenus()
            role.auth_time = Date.now()
            role.auth_name = memoryUtils.user.username
            console.log(memoryUtils.user.username)
            const result = await reqUpdateRole(role)
            if (result.status === 0) {
                message.success('角色权限修改成功')
                this.getRoles()
            } else {
                message.error(result.msg)
            }
        }

    }

    handleOk = async () => {
        if (this.roleRef && this.roleRef.current) {
            const roleName = this.roleRef.current.getForm().getFieldsValue().roleName;
            this.setState({ isShowAdd: false })
            const result = await reqAddRole(roleName)
            if (result.status === 0) { message.success('添加成功'); this.getRoles() } else { message.error(result.msg) }
        }
    }

    showAuth = (role) => {
        this.role = role
        this.setState({ isShowAuth: true })
    }

    componentDidMount() { this.getRoles() }

    render() {
        const { roles, isShowAdd, isShowAuth } = this.state;
        const role = this.role || {}
        const title = (
            <div>
                <Button onClick={() => this.setState({ isShowAdd: true })} >创建角色</Button>
                <Modal
                    title="添加角色"
                    visible={isShowAdd}
                    onOk={this.handleOk}
                    onCancel={() => this.setState({ isShowAdd: false })}
                >
                    <AddForm ref={this.roleRef} />
                </Modal>
            </div>)

        return (
            <Card title={title}>
                <Table
                    columns={this.columns}
                    dataSource={roles}
                    bordered
                    rowKey="_id"
                    pagination={{ defaultPageSize: 6, showQuickJumper: true }}
                />
                <Modal
                    title='设置角色权限'
                    visible={isShowAuth}
                    onOk={this.updateRole}
                    onCancel={() => { this.setState({ isShowAuth: false }) }}
                    destroyOnClose
                >
                    <AuthForm ref={this.authRef} role={role} />
                </Modal>

            </Card>
        );
    }
}

export default Role;