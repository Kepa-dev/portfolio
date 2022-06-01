import React from "react";
import { Link } from "react-router-dom";

class Er404 extends React.Component{
    render(){
        return(
            <div className="margin-top-5vh center">
              
                <p>Error 404</p>
                <Link to="/"><button>Powót</button></Link>
            </div>
            
        )
    }
        
    
}
export default Er404;
