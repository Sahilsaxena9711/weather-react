import React from 'react';
import _ from 'lodash';
import Ionicon from 'react-ionicons';

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
        return(
            <div>
                 {_.isEmpty(this.state.data) ? 
                 null : 
                 <div className="white-board">
                    <div>
                        { 
                            this.props.condition === 'Clear' ? <Ionicon icon="ios-sunny" fontSize="85px"/>
                            : 
                            this.props.condition === 'Rain' ? <Ionicon icon="ios-rainy" fontSize="85px"/>
                                :
                            this.props.condition === 'Clouds' ? <Ionicon icon="ios-partly-sunny" fontSize="85px"/>
                                :
                            this.props.condition === 'Haze' ? <Ionicon icon="ios-cloudy" fontSize="85px"/>
                                :
                            this.props.condition === 'Thunderstorm' ? <Ionicon icon="ios-thunderstorm" fontSize="85px"/>
                                :
                            <Ionicon icon="md-rainy" fontSize="85px" />                            
                        }
                    </div>
                    <div >
                        <span className="temp-cond">Temprature: {this.props.temprature.toFixed(1)}°C</span><br />
                        <span className="temp-cond">Weather: {this.props.condition}</span><br />
                        <span className="temp-cond">Humidity: {this.state.data.main.humidity}%</span><br />
                        <span className="temp-cond">High: {this.state.data.main.temp_max  - 273.15}°C, Low: {this.state.data.main.temp_min - 273.15}°C</span>
                    </div>
                 </div>
                 }
            </div>
        );
    }
}

export default WeatherDisplay;