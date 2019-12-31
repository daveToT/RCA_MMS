import React, { Component } from 'react';
import RotationChart from '../../components/rotation-chart'

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
const images = [p1, p2, p3]

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div>
                <div className='home-rotation'>
                    {/* <img src={require('./1.png')} alt='img1' /> */}
                    {/* <img src={p1} alt='img1' /> */}
                    <RotationChart w={300} h={100}>
                        {images.map((image, index) => <img src={image} alt="" key={index} />)}
                    </RotationChart>
                </div>
            </div>
        );
    }
}

export default Report;