import React from 'react';
import Ionicon from 'react-ionicons';

class About extends React.Component{
    render(){
        return(
            <div>
                <a href="http://www.github.com/Sahilsaxena9711" target="_blank" className="git-logo"><Ionicon icon="logo-github" fontSize="40"/></a>
                <a href="http://www.linkedin.com/in/sahil-saxena-b65595a6/" target="_blank" className="git-logo"><Ionicon icon="logo-linkedin" fontSize="40"/></a>
            </div>
        )
    }
}

export default About;