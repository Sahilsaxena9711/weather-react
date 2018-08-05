import React from 'react';


class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            city: '',
        }
        this.onSubmitCity = this.onSubmitCity.bind(this);
    }

    onSubmitCity(){
        this.props.submitCity(this.state.city);
    }

    render(){
        return(
            <div>
                <input type="text" className="city-input" placeholder="Enter City/Country" value={this.state.city} onClick={() => this.setState({city: ''})} onChange={(e) => this.setState({city: e.target.value})}/>
                <br/>
                <button onClick={() => this.onSubmitCity()} className="search-button">
                    Explore
                </button>
            </div>
        )
    }
}

export default Form;