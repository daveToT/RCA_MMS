import React, { Component } from 'react';
import { Card, Button, Table, Modal } from 'antd';
import LinkButton from '../../components/link-button';
import { formateDate } from '../../utils/date';
import { reqRoles, reqAddRole } from '../../api';
import AddForm from './add-role';


class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            isShowAdd: false
        }
        this.initialColumn()
        this.roleRef = React.createRef()
    }

    initialColumn = () => {
        this.columns = [
            { title: '角色名称', dataIndex: "name" },
            { title: '创建时间', dataIndex: "create_time", render: formateDate },
            { title: '授权时间', dataIndex: "auth_time", render: formateDate },
            { title: '授权人', dataIndex: "auth_name" },
            { title: '操作', render: (role) => <LinkButton onClick={() => this.isShowAuth(role)}>设置权限</LinkButton> }
        ]
    }

    getRoles = async () => {
        const result = await reqRoles()
        if (result.status === 0) {
            const roles = result.data
            this.setState({ roles })
        }
    }

    addRole = (role) => {
        // reqAddRole
    }

    handleOk = () => {
        FIXME:"Ref获取子组件数据失败"
        console.log(this.roleRef.current.handleSubmit)
        this.addRole()
    }

    componentDidMount() { this.getRoles() }

    render() {
        const { roles, isShowAdd } = this.state;
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
            </Card>
        );
    }
}

export default Role;