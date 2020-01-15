import React from 'react'
import style from './index.module.css'
import { connect } from 'react-redux'
import Item from './item'
import { setLogs } from '../../redux/actions'


class Backblog extends React.PureComponent {
    state = {
        activeId: null
    }

    cancelSelect = () => {
        this.setState({
            activeId: null
        })
    }

    onDragStart = (id) => {
        this.setState({
            activeId: id
        })
    }

    handleDragOver = (e) => {
        e.preventDefault();
    }

    handleDrop = (e) => {
        e.preventDefault();
        if (this.props.logs[this.state.activeId].status === 'status_a') {
            const newData = this.props.logs
            newData[this.state.activeId].status = 'status_b'
            this.props.setLogs(newData)
        }
        this.cancelSelect()
    }

    cancelSelect = () => {
        this.setState({
            activeId: null
        })
    }

    render() {
        const logs = this.props.logs
        return (
            <div className={style.container}>
                <div
                    className={style.leftContainer}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDrop}
                >
                    {
                        logs.map((item, index) => {
                            return (
                                < div key={item.id + index} >
                                    {item.status === 'status_a' && <Item
                                        data={item}
                                        active={item.id === this.state.activeId}
                                        onDragStart={this.onDragStart}
                                    />}
                                </div>
                            )
                        })
                    }
                </div>
                <br />
                <div
                    className={style.rightContainer}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDrop}
                >
                    {
                        logs.map((item, index) => {
                            return (
                                < div key={item.id + index} >
                                    {item.status === 'status_b' && <Item
                                        data={item}
                                        active={item.id === this.state.activeId}
                                        onDragStart={this.onDragStart}
                                    />}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default connect(
    state => ({ logs: state.logs }),
    { setLogs }
)(Backblog);