import React, { Component } from 'react';
import "./home.less"
import { formateDate } from '../../utils/date'
import { reqWeather } from '../../api'

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
            this.setState({ currentTime: formateDate(Date.now()) })
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
    render() {
        const { currentTime, dayPictureUrl, weather } = this.state
        return (
            <div className='home'>
                <div className='home-header'>
                    <div className='home-title'>Home</div>
                </div>
                <div className='home-date'>
                    <span>{currentTime}</span>&nbsp;&nbsp;
                    <span>苏州</span>
                    <img src={dayPictureUrl} alt='weather' />
                    <span>{weather}</span>
                </div>
            </div>
        );
    }
}

export default Home;