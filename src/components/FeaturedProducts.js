import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/banner2.png';
import shoes2 from '../assets/images/shoes3.jpeg';
import shoes3 from '../assets/images/jutti1.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { base_url,image_url } from './config';
export default class FeaturedProducts extends React.Component {
    constructor() {
        super();
        this.state = { checked: true,products: [],categories: [] , total : 0 };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(checked) {
        this.setState({ checked,products: {} }); 
    }
    componentDidMount() {
        fetch(base_url + 'api/v1/new_arrival', {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: 'GET',
        }).then(response => response.json()).then(response => {
        console.log(response)
        this.setState({ products : response.data});
        console.log('live productst',this.state.products)
        })
        .catch(err => console.log(err))
        }
    render(){
        const settings = {
            arrows:true,
            infinite:false,
            slidesToShow: 7,
            slidesToScroll: 3,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1
                    }
                  },
                {
                breakpoint: 800,
                settings: {
                  arrows:false,
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
                <div className="proudects mb-5">
                    <div className="container-fluid">
                        <div className="main-product mt-3">
                            <div className="mainpro-des border-bottom">
                                <div className="row no-gutters">
                                    <div className="col-8 bg-white pt-3">
                                        <h4 className="pro-category text-capitalize">fresh arrival</h4>
                                        <span className="pro-sub-category text-muted text-capitalize">men footwear</span>
                                    </div>
                                    <div className="col-4 bg-white pt-3 text-right pr-3">
                                        <Link to="/" className="btn btn-danger text-uppercase  my-3"> view all</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="main-top-slider">
                                <Slider {...settings}>
                                    {this.state.products.map((product, i) => { 
                                        return<div className="slider-item my-3" >
                                            <Link to={"singleproduct/"+product.product_uri}>
                                            <img height={150} width={150} className="slider-img mx-auto" src={image_url + product.images_details[0].image} />
                                                <div className="d-block text-center pro-detail">
                                                    <div class="pro-cat pro-des mb-1">{product.product_name}</div>
                                                    <div class="pro-des pro-prize-range text-success pt-1">starting from Rs.{product.price}</div>
                                                    <div class="pro-des pro-brand text-muted pt-1">{product.product_type}</div>
                                                </div>
                                            
                                            </Link>
                                           
                                        </div>
                                    })}  
                                   
                                   
                                    {/* <div className="slider-item my-3">
                                        <img height={150} width={150} className="slider-img mx-auto" src={shoes3} />
                                         <div className="d-block text-center">
                                            <div class="pro-cat pro-des mb-1">men shoes</div>
                                            <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                            <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                        </div>
                                    </div>
                                    <div className="slider-item my-3">
                                        <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                         <div className="d-block text-center">
                                            <div class="pro-cat pro-des mb-1">men shoes</div>
                                            <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                            <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                        </div>
                                    </div>
                                    <div className="slider-item my-3">
                                        <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                         <div className="d-block text-center">
                                            <div class="pro-cat pro-des mb-1">men shoes</div>
                                            <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                            <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                        </div>
                                    </div> */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                           
        )
    }
}