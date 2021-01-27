import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../assets/images/offer-2.png';
import slider1 from '../assets/images/offer-1.png';
import slider3 from '../assets/images/offer-3.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows:false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="main-top-slider bg-dark">
        <Slider {...settings}>
                <div className="slider-item my-3">
                <img height={200} className="slider__img mx-auto" src={slider1} />
                </div>
                <div className="slider-item my-3 ">
                <img height={200} className="slider__img mx-auto" src={slider2} />
                </div>
                <div className="slider-item my-3 ">
                <img height={200} className="slider__img mx-auto" src={slider3} />
                </div>
                <div className="slider-item my-3 ">
                <img height={200} className="slider__img mx-auto" src={slider1} />
                </div>
                <div className="slider-item my-3 ">
                <img height={200} className="slider__img mx-auto" src={slider2} />
                </div>
                <div className="slider-item my-3">
                <img height={200} className="slider__img mx-auto" src={slider3} />
                </div>
        </Slider>
      </div>
    );
  }
}