import React, { Component } from 'react';
import './Playstore.css'
import Image from '../images/bullet.svg'
import Phone from '../images/phone.PNG'
import Play from '../images/g-play.svg'
class Playstore extends Component {
    render() {
        return (  
            <div>
                <div className = "container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>    
                    <br/>
                    <div className = "p-flex row">
                        <div className = "p-display col-md-6">
                            <p className = "p-head">Get the Raahee App</p>  
                            <br/>
                            <p className = "p-bullet"><img src = {Image} width = {30}  alt = ""/>&nbsp;&nbsp;Meditation and venting features</p> 
                            <br/>  
                            <p className = "p-bullet"><img src = {Image} width = {30}  alt = ""/>&nbsp;&nbsp;Extensive library of resources</p>
                            <br/>
                            <p className = "p-bullet"><img src = {Image} width = {30}  alt = ""/>&nbsp;&nbsp;Community as close knit as a family</p>
                            <br/>
                            <p className = "p-bullet"><img src = {Image} width = {30}  alt = ""/>&nbsp;&nbsp;Affordable sessions with verified therapists</p>
                            <br/>
                            <p className = "p-bullet"><img src = {Image} width = {30}  alt = ""/>&nbsp;&nbsp;Mood trackers and guided journaling</p>
                            <div className = "p-play"><a href = "/"><img src = {Play} alt = ""/></a></div>
                        </div>
                    
                        <div className = "col-md-6">
                            <img className = "p-image"  alt = "" src = {Phone}/>
                        </div>

                    </div>
             </div>
             <br/>
            <br/>
            <br/>
            <br/>
         </div>                        
        )
    }
}


export default Playstore;