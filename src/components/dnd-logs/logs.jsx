import React, { useState, useEffect, useCallback } from 'react';
import { reqLogs } from '../../services'
import Item from './item'
import './logs.less'
import update from 'immutability-helper'


function Logs() {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await reqLogs()
            if (result.code === 0) {
                setLogs(result.data.list)
            }
        };
        fetchData();
    }, []);

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        const dragItem = logs[dragIndex]
        setLogs(update(logs, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragItem]]
        }))
    }, [logs])

    const renderItem = (item, index) => {
        return (<Item
            key={item.code}
            index={index}
            code={item.code}
            name={item.name}
            moveItem={moveItem}
        />)
    }

    return (
        <>
            <div className='logs-container'>
                {logs.map((log, index) => renderItem(log, index))}
            </div>
        </>
    )
}

export default Logs