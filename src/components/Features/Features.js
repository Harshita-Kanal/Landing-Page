import React, { Component } from 'react';
import './features.css'
import Image from '../images/moving.png'
class Features extends Component {
    render() {
        return (  
            <div>
                <div className = "container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                      <p className = "f-heading">Features</p>  
                </div>
                <img className = "f-img" alt = "" src = {Image}/>
                <div className = "container">
                <div className = "row">
                    <div className = "col-md-4">
                        <p className = "f-head">Resolve</p>
                        <p className = "f-body">
                        Participate in 7 day of Mindfulness based programs to change behaviour
                        </p>
                    </div>
                    <div className = "col-md-4">
                        <p className = "f-head">Relax</p>
                        <p className = "f-body">
                        Participate in 7 day of Mindfulness based programs to change behaviour
                        </p>
                    </div>
                    <div className = "col-md-4">
                        <p className = "f-head">Sleep Better</p>
                        <p className = "side f-body">
                        Participate in 7 day of Mindfulness based programs to change behaviour
                        </p>
                    </div>

                </div>
                </div>
            </div>                        
        )
    }
}


export default Features;