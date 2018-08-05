import React from 'react';
import _ from 'lodash';
import Ionicon from 'react-ionicons';
import moment from 'moment';

class WeatherDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            data: props.data
        })
    }

    render(){    
        const high = this.state.data.main == undefined ? null : (this.state.data.main.temp_max  - 273.15).toFixed(1);
        const low = this.state.data.main == undefined ? null : (this.state.data.main.temp_min - 273.15).toFixed(1);
        const sunrise = this.state.data.sys == undefined ? null : moment.unix(this.state.data.sys.sunrise).format('h:mm:ss a');
        const sunset = this.state.data.sys == undefined ? null : moment.unix(this.state.data.sys.sunset).format('h:mm:ss a');
        return(
            <div>
                 {_.isEmpty(this.state.data) ? 
                 null : 
                 <div className="white-board">
                    <div>
                        { 
                            this.props.condition === 'Clear' ? <Ionicon icon="ios-sunny" fontSize="45px"/>
                            : 
                            this.props.condition === 'Rain' ? <Ionicon icon="ios-rainy" fontSize="45px"/>
                                :
                            this.props.condition === 'Clouds' ? <Ionicon icon="ios-partly-sunny" fontSize="45px"/>
                                :
                            this.props.condition === 'Haze' ? <Ionicon icon="ios-cloudy" fontSize="45px"/>
                                :
                            this.props.condition === 'Thunderstorm' ? <Ionicon icon="ios-thunderstorm" fontSize="45px"/>
                                :
                            <Ionicon icon="md-rainy" fontSize="45px" />                            
                        }
                    </div>
                    <div >
                        <span className="temp-cond">Temprature: {this.props.temprature.toFixed(1)}°C</span><br />
                        <span className="temp-cond">Weather: {this.props.condition}</span><br />
                        <span className="temp-cond">Humidity: {this.state.data.main.humidity}%</span><br />
                        <span className="temp-cond">High: {high}°C, Low: {low}°C</span><br />
                        <span className="temp-cond">Sunrise: {sunrise}, Sunset: {sunset}</span>
                    </div>
                 </div>
                 }
            </div>
        );
    }
}

export default WeatherDisplay;