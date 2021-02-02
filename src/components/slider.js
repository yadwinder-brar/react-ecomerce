import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import slider from '../assets/images/slider2.jpg';
import slider1 from '../assets/images/bgimg.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { base_url,image_url } from './config';

import { Link } from 'react-router-dom'
export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = { banners: [] };
    }
    componentDidMount() {
        fetch(base_url + 'api/v1/home-page-header-banner', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
          }).then(response => response.json()).then(response => { 
              this.setState({ banners : response.data});
          })
          .catch(err => console.log(err))
      }
    render() {
        return (
            <Carousel autoPlay interval="2500" infiniteLoop useKeyboardArrows autoPlay className="main-slider mt-3">
                   {this.state.banners.map((banner, i) => { 
                       return<div>
                       <Link to="/product">
                           
                            <img className="top-slider-img" src={image_url+banner.image} />
                            <h6 className="legend1 text-uppercase">{banner.caption}<span className="change-text text-capitalize"> changeable text</span></h6>
                        </Link>
                        </div>
                    })}  
            </Carousel>
        );
    }
}

