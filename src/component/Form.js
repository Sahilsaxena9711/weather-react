import React from 'react';


class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            city: '',
        }
        this.onSubmitCity = this.onSubmitCity.bind(this);
    }

    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.onSubmitCity(e);
        }
    }

    onSubmitCity = (e) => {
        e.preventDefault();
        this.props.submitCity(this.state.city);
    }

    render(){
        return(
            <div onKeyPress={(e) => this.handleKeyPress(e)}>
                <form onSubmit={(event) => this.onSubmitCity(event)} >
                    <input type="text" className="city-input" placeholder="Enter City/Country" value={this.state.city} onChange={(e) => this.setState({city: e.target.value})} required/>
                    <br/>
                    <button type="submit" className="search-button">
                        Explore
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;