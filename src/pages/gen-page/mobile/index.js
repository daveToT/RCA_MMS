import React, { Component } from 'react'
import style from './index.module.css'
import { tools } from './contants'
import DraggableBox from '../../../components/draggable-box'

class GenPageWithMobile extends Component {
    render() {
        return (
            <div className={style.root}>
                <div className={style.tools}>
                    {
                        tools.map(tool => (
                            <div className={style.tool} key={tool.id}>
                                {tool.name}
                            </div>
                        ))
                    }
                </div>
                <div className={style.mobile}>
                    <DraggableBox>
                        <div>编辑文字</div>
                    </DraggableBox>
                </div>
            </div>
        )
    }
}

export default GenPageWithMobile