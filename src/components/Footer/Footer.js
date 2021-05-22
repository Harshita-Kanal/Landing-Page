import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (  
            <div>
            <footer className="footer-section">
            <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                              <br/>
                              RAAHEE
                            </div>
                            <div className="footer-text">
                                <p>The first aid to your invisible wounds. Together we spread love and positivity.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="/"><i className="fa fa-facebook-f facebook-bg"></i></a>
                                <a href="/"><i className="fa fa-twitter twitter-bg"></i></a>
                                <a href="/"><i className="fa fa-instagram google-bg"></i></a>
                                <a href="/"><i className="fa fa-linkedin google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                           <div className="footer-widget-heading">
                                <br/>
                                <h3>Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Blogs</a></li>
                                <li><a href="/">Teams</a></li>
                                <li><a href="/">Community</a></li>
                                <li><a href="/">Contact us</a></li>
                            
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <br/>
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Subscribe Now to get special resources</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="/">
                                    <input type="text" placeholder="Email Address"/> <br/>
                                </form>
                                <br/>
                                <button className = "btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All RightS Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
     </footer>
</div>                        
        )
    }
}


export default Footer;