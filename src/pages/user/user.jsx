import React, { Component } from 'react';
import LinkButton from '../../components/link-button';
import { formatDate } from '../../utils/date';
import { Card, Button, Table, Modal } from 'antd';
import { reqUsers, reqDeleteUser, reqAddOrUpdateUser } from '../../services'
import AddUser from './add-user'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowAdd: false,
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
                        <LinkButton>修改</LinkButton>
                        <LinkButton>删除</LinkButton>
                    </span>
                )
            }
        ]
    }

    addUser = async () => {

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

    showAdd = () => {
        this.setState({ isShowAdd: true })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const { isShowAdd, users, roles } = this.state;
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
                    title={user._id ? '修改用户' : '添加用户'}
                    visible={isShowAdd}
                    onCancel={() => this.setState({ isShowAdd: false })}
                    onOk={this.addUser}
                >
                    <AddUser roles={roles} />
                </Modal>
            </Card>
        );
    }
}

export default User;