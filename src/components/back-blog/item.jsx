import React from 'react'
import './item.css'

function Item(props) {

    return (
        <div className={'item' + (props.active ? ' active' : '')}
            draggable="true"
            onDragStart={() => props.onDragStart(props.data.id)}
            id={props.data.id}
        >
            <header className="item-header">
                <span className="item-header-username">{props.data.username}</span>
                <span className="item-header-message">{props.data.message}</span>
            </header>
            <content className="item-content">{props.data.title}</content>
        </div>
    )
}

export default Item