import React from 'react';
import "./index.less";
import { Avatar, Icon, Modal } from 'antd';
import LinkButton from '../link-button'


function Header() {

    const logout = () => {
        Modal.confirm({
            title: '确认退出吗',
            onOk() {

            },
            onCancel() {

            }
        })
    }


    return (
        <div className='header'>
            <div>项目</div>
            <div className='header-right'>
                <Icon type="bell" style={{ fontSize: '22px', color: '#525050' }} />
                <Avatar style={{ backgroundColor: "#525050" }} size={26}>USER</Avatar>
                <LinkButton onClick={logout}>退出</LinkButton>
            </div>
        </div>
    )
}

export default Header;