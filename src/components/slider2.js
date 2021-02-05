import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../assets/images/offer-1.jpg';
import slider1 from '../assets/images/offer-6.jpg';
import slider3 from '../assets/images/offer-1.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows:false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      // cssEase: "linear",
      pauseOnHover: true,
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
      <div className="main-top-slider py-3">
        <Slider {...settings}>
                <div className="slider-item my-3">
                <img  className="slider__img mx-auto" src={slider1} />
                </div>
                <div className="slider-item my-3 ">
                <img  className="slider__img mx-auto" src={slider2} />
                </div>
                <div className="slider-item my-3 ">
                <img  className="slider__img mx-auto" src={slider3} />
                </div>
                <div className="slider-item my-3 ">
                <img  className="slider__img mx-auto" src={slider1} />
                </div>
                <div className="slider-item my-3 ">
                <img  className="slider__img mx-auto" src={slider2} />
                </div>
                <div className="slider-item my-3">
                <img  className="slider__img mx-auto" src={slider3} />
                </div>
        </Slider>
      </div>
    );
  }
}