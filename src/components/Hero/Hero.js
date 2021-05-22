import React, { Component } from 'react';
import image from '../images/home.svg'
import './Hero.css';

class Hero extends Component {
    render() {
        return (
         
                <div className = "hero" style={{ backgroundImage: "url(/background.svg)", backgroundRepeat: 'no-repeat'}}>
                    <div className = "container">
                        <div className = "row">
                                    <div className = "col-md-6">
                                        <br/>
                                        <br/>
                                        <div className = "left">
                                        <p className = "text">
                                                Let Raahee be your 
                                                buddy for every step 
                                                you take ahead !!
                                        </p>
                                        <p className = "bottom-text">
                                                Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor 
                                                incididunt ut labore et 
                                                dolore magna aliqua.
                                                Ut enim ad minim veniam,
                                                quis nostrud exercitation 
                                                ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. 
                                        </p> 
                                        <button className = "top dis btn btn-primary " > Chat Now </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                    </div>
                                </div>
                                <div className = "item col-md-6">
                                    <div>
                                        <img  alt = "" className = "item" src = {image} width = {650} />
                                    </div>
                                </div> 
                            </div>
                    </div>  
                </div>
              
        )
    }
}


export default Hero;