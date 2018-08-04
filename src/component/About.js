import React from 'react';
import Ionicon from 'react-ionicons';

class About extends React.Component{
    
    openGit = () => {
        
    }

    render(){
        return(
            <div className="about">
                <div className="col-sm-12">
                    <div className="row">
                        <Ionicon icon="logo-github" onClick={() => window.location.href = "http://www.github.com/Sahilsaxena9711"} className="git-logo"  fontSize="40"/>
                        <Ionicon icon="logo-linkedin" onClick={() => window.location.href = "http://www.linkedin.com/in/sahil-saxena-b65595a6/"} className="git-logo"  fontSize="40"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;