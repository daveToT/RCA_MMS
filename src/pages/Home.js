import React from 'react';
import { Button, message } from 'antd';

function Home() {
    function handleClick() {
        message.success('--- success ---')
    }
    return (
        <div className="home-header">
            <Button type='primary' onClick={handleClick}>点击完成测试</Button>
        </div>
    )
}

export default Home;