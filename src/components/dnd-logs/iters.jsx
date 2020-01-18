import React, { useState, useCallback } from 'react'
import Item from './item'
import update from 'immutability-helper'
import './iters.less'

function Iters() {
    const [cards, setCards] = useState([
        {
            id: 1,
            text: 'Write a cool JS library',
        },
        {
            id: 2,
            text: 'Make it generic enough',
        },
        {
            id: 3,
            text: 'Write README',
        },
        {
            id: 4,
            text: 'Create some examples',
        },
        {
            id: 5,
            text:
                'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
            id: 6,
            text: '???',
        },
        {
            id: 7,
            text: 'PROFIT',
        },
    ])
    const moveItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex]
            setCards(
                update(cards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [cards],
    )
    const renderCard = (card, index) => {
        return (
            <Item
                key={card.id}
                index={index}
                code={card.id}
                name={card.text}
                moveItem={moveItem}
            />
        )
    }

    return (
        <>
            <div className='iters-container'>

                {cards.map((card, i) => renderCard(card, i))}

            </div>
        </>
    )
}

export default Iters