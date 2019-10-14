import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomHome.css";

class Home extends Component {
    render() {
        return (
                    <div className="body card mb-3">
                        <div className = "card-header">
                            <h1>
                                Welcome to ShutterPlug!
                           </h1>
                           <p>
                               Let us help you find the professional you are looking for!
                           </p>
                        </div>
                        <div className = "card-body">  
                           <h3 className="text-left font-weight-bold px-2">
                               What is ShutterPlug?
                           </h3> 
                           <p className = "text-left px-2">
                                ShutterPlug is a one-stop application to find the photographer or artist
                                you need. Search based on your needs to sort through the many different
                                professionals you are looking for in your area.   
                            </p>
                            <h3 className="text-left font-weight-bold px-2">
                                Placeholder
                            </h3>
                        </div>       
                    </div>  
        )
    }
}

export default Home;