import React, { Component } from 'react';
import './achievements.css'
class Achievements extends Component {
    render() {
        return (  
            <div className = "container">
                <br/>
                <br/>
                <br/>
                <p className = "a-head">Achievements</p>
                <p className = "a-subhead">Some Numbers</p>

                <div className = "row">
                    <div className = "col-md-4">
                    <div className="a-card card">
                        <div className="card-body">
                            <div className = "a-c-try">
                            <p className = "a-c-head">10+</p>
                            <p className = "a-c-body">Potential Users</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className = "col-md-4">
                    <div className="a-card card">
                        <div className="card-body">
                            <div className = "a-c-try">
                            <p className = "a-c-head">10+</p>
                            <p className = "a-c-body">Potential Users</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className = "col-md-4">
                    <div className="a-card card">
                        <div className="card-body">
                            <div className = "a-c-try">
                            <p className = "a-c-head">2.5m</p>
                            <p className = "a-c-body">FeedBack Given</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>                        
        )
    }
}


export default Achievements;