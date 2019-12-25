import React from 'react';
import "./index.less";
import { Avatar, Icon } from 'antd';

function Header() {
    return (
        <div className='header'>
            <div>项目</div>
            <div className='header-right'>
                <Icon type="bell" style={{ fontSize: '22px', color: '#525050' }} />
                <Avatar style={{ backgroundColor: "#525050" }} size={26}>USER</Avatar>
            </div>
        </div>
    )
}

export default Header;