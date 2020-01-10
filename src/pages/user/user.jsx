import React, { Component } from 'react';
import LinkButton from '../../components/link-button';
import { formatDate } from '../../utils/date';
import { Card, Button, Table, Modal } from 'antd';
import { reqUsers } from '../../services'
import AddUpdateUser from './add-update-user'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ishow: false,
            users: [],
            roles: []
        }
        this.initialColumn()
    }

    initialColumn = () => {
        this.columns = [
            { title: '用户名', dataIndex: "username" },
            { title: '邮箱', dataIndex: "email" },
            { title: '电话', dataIndex: "phone" },
            { title: '注册时间', dataIndex: "create_time", render: formatDate },
            {
                title: '所属角色', dataIndex: "role_id",
                render: (role_id) => this.role_name[role_id].name
            },
            {
                title: '操作', render: (user) => (
                    <span>
                        <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
                        <LinkButton onClick={() => this.deleteUser(user)}>删除</LinkButton>
                    </span>
                )
            }
        ]
    }

    showAdd = () => {
        this.user = null
        this.setState({ ishow: true })
    }

    showUpdate = (user) => {
        this.user = user
        this.setState({ ishow: true })
    }

    deleteUser = (user) => {
        Modal.confirm({
            title: `确认删除${user.username}吗？`,
            onOk() { }
        })
    }

    addOrupdateUser = async () => {
        this.setState({ ishow: false })
    }

    getUsers = async () => {
        const result = await reqUsers()
        if (result.status === 0) {
            const { users, roles } = result.data
            this.role_name = roles.reduce((pre, role) => {
                pre[role._id] = role
                return pre
            }, {})
            this.setState({ users, roles })
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const { ishow, users, roles } = this.state;
        const user = this.user || {}
        const title = (<Button type='primary' onClick={this.showAdd}>创建用户</Button>)

        return (
            <Card title={title}>
                <Table
                    columns={this.columns}
                    dataSource={users}
                    bordered
                    rowKey="_id"
                    pagination={{ defaultPageSize: 4, showQuickJumper: true }}
                />
                <Modal
                    title={user._id ? "修改用户" : "添加用户"}
                    visible={ishow}
                    onCancel={() => this.setState({ ishow: false })}
                    onOk={this.addOrupdateUser}
                >
                    <AddUpdateUser roles={roles} user={user} />
                </Modal>
            </Card>
        );
    }
}

export default User;