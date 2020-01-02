import React from 'react'
import s from './index.module.css'
import classnames from 'classnames'

const DraggableBox = props => {
    const { children } = props

    return (
        <div className={s.draggableBox}>
            <div className={s.draggableBoxRotate}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxLeft)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxTop)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxRight)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxBottom)}></div>
            {children}
        </div>
    )
}

export default DraggableBox