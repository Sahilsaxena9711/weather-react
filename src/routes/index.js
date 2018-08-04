import React from 'react';
import Weather from '../container/Weather';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Route path="/" component={Weather}/>
            </BrowserRouter>
        );
    }
}
export default App;