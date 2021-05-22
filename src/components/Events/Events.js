import React from 'react';
import './Events.css'
import Slider from "react-slick";
import Image from "../images/yoga.svg"
function Events() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        responsive: [

            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        slidesToScroll: 1
      };
        return (  
            <div>
                <div className = "e-back">
                    <br/>
                    <br/>
                      <p className = "e-heading">Upcoming Events</p>
                      <br/>
                      <div className = "container">
                            <Slider {...settings}>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = "" /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m
                                       </p>
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = "" /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m
                                       </p>
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = "" /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m <br/>
                                       </p> 
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = ""  /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m
                                       </p>
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = "" /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m
                                       </p>
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                            <div>
                            <div>
                               <div className = "card slide">
                                   <div className = "card-body">
                                       <div className = "e-flex">
                                       <div className = "e-img"><img src = {Image} alt = "" /></div>
                                       <div className = "e-head">Mental health Awareness <br/> <p className = "e-body">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                       </p>
                                       <p className = "e-cal"><span><i className = "fa fa-calendar"></i></span> May 18th , 2021
                                       &nbsp;
                                       &nbsp;
                                       <span><i className = "fa fa-clock-o"></i></span> 10 p.m
                                       </p>
                                       <button className = "top dis btn btn-primary " > Register </button>
                                        <button className = "out dis btn btn-outline-primary" > Learn More </button>
                                       </div>       
                                       </div>
                                       <div>
                                       
                                      </div>
                                   </div>
                               </div>
                            </div>
                         </div>
                        </Slider>
                      </div>
                </div>
            </div>                        
        );
    }



export default Events;