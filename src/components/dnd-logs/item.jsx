import React, { useRef } from 'react';
import style from './item.module.css'
import ItemTypes from './item-types.js'
import { useDrag, useDrop } from 'react-dnd'


export default function Item({ code, name, index, moveItem }) {
    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: ItemTypes.LOGS,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.LOGS, code, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1

    drag(drop(ref))

    return (
        <div className={style.itemContainer} ref={ref} style={{ opacity }}>
            <div className={style.itemAdd}>
                <div className={style.itemAddButton}></div>
                <div></div>
            </div>
            <div>
                {name}
            </div>
        </div>
    )

}