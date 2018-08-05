import React from 'react';
import '../style/index.css'
import axios from 'axios';
import Form from '../component/Form';
import WeatherDisplay from '../component/WeatherDisplay';
import About from '../component/About';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temprature:  '',
            condition:   'background',
            data:        {},
            error:       false
        }
        this.submitCity = this.submitCity.bind(this);
    }

    submitCity(city){
        this.setState({error: false})
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ae38f85cf20362c16d54ed0e88f312`)
        .then((response)=> {
            this.setState({
                data:        response.data,
                temprature:  response.data.main.temp - 273.15,
                condition:   response.data.weather[0].main
            })
        }).catch((error)=> {
            alert('Error! Invalid City/Country name')
        })
    }
    componentWillReceiveProps(props){

    }

    render(){
        return(
            <div>
                <div className={this.state.condition}>   
                    <div className="row header">
                        <div className="col-sm-offset-6 col-sm-6" style={{padding: '0px'}}>
                            <About />
                        </div>
                    </div> 
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
            </div>
        );
    }
}

export default Weather;