import React, { useState, useRef } from 'react'
import s from './index.module.css'
import classnames from 'classnames'
import { Icon } from 'antd'

const initialStyle = {
    top: '50%',
}

const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
    const dot = x1 * x2 + y1 * y2
    const det = x1 * y2 - y1 * x2
    const angle = Math.atan2(det, dot) / Math.PI * 180
    return (angle + 360) % 360
}

const DraggableBox = ({ children }) => {
    const draggableBoxRef = useRef(null)
    const [dragStyle, setDragStyle] = useState(initialStyle)
    const [editing, setEditing] = useState(false)

    const handleRotateMouseDown = () => {
        setEditing(true)

        const { left, right, top, bottom } = draggableBoxRef.current.getBoundingClientRect()
        const centerPoint = {
            x: (right - left) / 2,
            y: (bottom - top) / 2,
        }

        const onMove = e => {
            if (editing) return

            const angle = getAngle(centerPoint, { x: e.x, y: e.y })

            dragStyle.transform = `rotate(${angle}deg)`
            setDragStyle({...dragStyle})
        }
        const onUp = e => {
            setEditing(false)

            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseup', onUp)
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onUp)
    }

    return (
        <div 
            ref={draggableBoxRef}
            className={s.draggableBox} 
            style={{...dragStyle}}>
            <div 
                className={s.draggableBoxRotate}
                onMouseDown={handleRotateMouseDown}>
                <Icon type="redo" />
            </div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxLeft)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxTop)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxRight)}></div>
            <div className={classnames(s.draggableBoxControl, s.draggableBoxBottom)}></div>
            {children}
        </div>
    )
}

export default DraggableBox