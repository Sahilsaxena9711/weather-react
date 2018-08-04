import React from 'react';
import styles from '../style/index.css'
import axios from 'axios';
import Form from '../component/Form';
import WeatherDisplay from '../component/WeatherDisplay'
import About from '../component/About'

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temprature:  '',
            condition:   'background',
            data:        {},
            diaplaydata: false
        }
        this.submitCity = this.submitCity.bind(this);
    }
    componentWillReceiveProps(props){
        console.log(props);
        
    }
    submitCity(city){
        // axios.get(`https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')&format=json`,)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ae38f85cf20362c16d54ed0e88f312`)
        .then((response)=> {
            this.setState({
                diaplaydata: true,
                data:        response.data,
                temprature:  response.data.main.temp - 273.15,
                condition:   response.data.weather[0].main
            })
        }).catch((error)=> {
            console.log(error);
        })
    }
    componentWillReceiveProps(props){

    }

    render(){
        return(
            <div>
                <div className={this.state.condition}>    
                    <div className="row">
                        <div className="col-sm-offset-4 col-sm-4 content">
                            
                            <Form 
                            submitCity = {this.submitCity}
                            />

                            <WeatherDisplay
                            {...this.props}
                            data = {this.state.data}
                            temprature = {this.state.temprature}
                            condition = {this.state.condition}
                            />

                        </div>
                    </div>
                </div>
                <About />
            </div>
        );
    }
}

export default Weather;