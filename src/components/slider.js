import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import slider from '../assets/images/slider2.jpg';
import slider1 from '../assets/images/bgimg.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends React.Component {
    render() {
        return (
            <Carousel autoPlay interval="500" className="main-slider mt-3">
                  
                    <div>
                        <img height={500} src={slider1} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                    
                    
                    <div>
                        <img height={500} src={slider} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                    
                    
                    <div>
                        <img height={500} src={slider1} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                    <div>
                        <img height={500} src={slider} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                    <div>
                        <img height={500} src={slider1} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                    <div>
                        <img height={500} src={slider} />
                        <h6 className="legend1 text-uppercase">fresh arrivall <span className="change-text text-capitalize"> changeable text</span></h6>
                    </div>
                
            </Carousel>
        );
    }
}

