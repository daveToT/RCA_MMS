import React, { Component } from 'react';
import "./index.less"
import { formateDate } from '../../utils/date'
import { reqWeather } from '../../services'
import RotationChart from '../../components/rotation-chart'
import p1 from '../../assets/rotation/1.png';
import p2 from '../../assets/rotation/2.png';
import p3 from '../../assets/rotation/3.png';
const images = [p1, p2, p3]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: formateDate(Date.now()),
            dayPictureUrl: '',
            weather: ''
        }
    }

    componentDidMount() {
        this.interValID = setInterval(() => {
            this.setState({ currentTime: formateDate(Date.now()) });
        }, 1000);

        this.getWeather()
    }

    componentWillUnmount() {
        clearInterval(this.interValID)
    }

    getWeather = async () => {
        const { dayPictureUrl, weather } = await reqWeather('苏州')
        this.setState({
            dayPictureUrl, weather
        })
    }

    changeShow = show => {
        this.setState({ show })
    }

    render() {
        const { currentTime, dayPictureUrl, weather } = this.state
        return (
            <div className='home'>
                <div className='home-date'>
                    <span>{currentTime}</span>&nbsp;&nbsp;
                    <span>苏州</span>
                    <img src={dayPictureUrl} alt='weather' />
                    <span>{weather}</span>
                </div>

                <div className='home-rotation'>
                    <RotationChart w={300} h={100}>
                        {images.map((image, index) => <img src={image} alt="" key={index} />)}
                    </RotationChart>
                </div>
            </div>
        );
    }
}

export default Home;