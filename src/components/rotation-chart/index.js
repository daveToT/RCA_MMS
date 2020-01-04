import React, { Component } from 'react';
import './index.less'

/**
 * 
 * <RotationChart w={300} h={100}>
 *       <img />
 *       <img />
 *       ... ...
 *       <img />
 * </RotationChart>
 * 
 */
class RotationChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            active: 0,
            flag: false
        }
    }

    changeIndexLeft(index) {
        let nextIndex = index;
        const ln = this.props.children.length;
        if (index > 0) {
            nextIndex = index - 1
        } else if (index === 0) {
            nextIndex = ln - 1
        }
        this.setState({
            currentIndex: nextIndex,
            active: nextIndex
        })
    }

    changeIndexRight(index) {
        let nextIndex = index;
        const ln = this.props.children.length;
        if (index < ln - 1) {
            nextIndex = index + 1
        } else if (index === ln - 1) {
            nextIndex = 0
        }
        this.setState({
            currentIndex: nextIndex,
            active: nextIndex
        })
    }

    changeFlagx(e) {
        e.stopPropagation()
        this.setState({
            flag: true
        })
    }

    changeFlagy(e){
        e.stopPropagation()
        this.setState({
            flag: false
        })
    }

    render() {
        const { currentIndex, active, flag } = this.state;
        const { w, h, children } = this.props;

        return (
            <div className='rotation' style={{ width: w, height: h }}  onMouseEnter={this.changeFlagx.bind(this)} onMouseLeave={this.changeFlagy.bind(this)}>
                <div className='rotation-frame'>
                    <div>{this.props.children[currentIndex]}</div>
                </div>
                <div className='rotation-msg'>
                    <button className='left-button' onClick={this.changeIndexLeft.bind(this, currentIndex)}
                        style={{ display: flag === false ? "none" : "block" }} >&lt;</button>
                    <button className='right-button' onClick={this.changeIndexRight.bind(this, currentIndex)}
                        style={{ display: flag === false ? "none" : "block" }}>&gt;</button>
                    <div className='bottom-index' >
                        {children.map((item, index) => {
                            return <button index={index} className={`item ${index === active ? 'active' : ''}`} key={index + item} >{index + 1}</button>
                        })}
                    </div>
                </div>
            </div >
        )
    }

}

export default RotationChart;
