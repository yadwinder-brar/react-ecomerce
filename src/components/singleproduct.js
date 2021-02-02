import React from 'react'
import { Link} from 'react-router-dom'
import img from '../assets/images/singlepro1.jpeg';
import img1 from '../assets/images/singlepro2.jpeg';
import img2 from '../assets/images/singlepro3.jpeg';
import img3 from '../assets/images/singlepro7.jpeg';
import img4 from '../assets/images/singlepro5.jpeg';
import img5 from '../assets/images/singlepro6.jpeg';
import img11 from '../assets/images/singlepro11.jpeg';
import shoes from '../assets/images/abcs.jpeg';
import shoes1 from '../assets/images/shoes4.jpeg';
import shoes2 from '../assets/images/shoes3.jpeg';
import shoes3 from '../assets/images/shoes22.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row,Col,Container,Form,} from 'react-bootstrap';

export default class Singleproduct extends React.Component {
   
    render(){
        const settings = {
            arrows:false,
            infinite:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 4,
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
            <>
                <div className="main-outer pb-5">    
                    <Container>
                        <div className="singlepro-main-outer">
                            <div className="singlepro-main bg-white">
                                <Row>
                                    <Col xs={1}>
                                        <div className="single-proimg sidebar">
                                            <div className="bg-img-outer">
                                                <div className="top-img-1 side-img text-center"></div>
                                                <div className="top-img-2 side-img text-center"></div>
                                                <div className="top-img-3 side-img text-center"></div>
                                                <div className="top-img-4 side-img text-center"></div>
                                                <div className="top-img-5 side-img text-center"></div>
                                                <div className="top-img-6 side-img text-center"></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="product-fullimg">
                                            <img src={img11} className=" img-fluid full-img" id="myimage" alt=""/>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={7}>
                                        <div className="right-outer p-5">
                                            <div className="right-top1">
                                                <div class="zoom1 d-none">
                                                    <div id="myresult" class="img-zoom-result"></div>
                                                </div>
                                                <div className="brand-name text-capitalize">
                                                    <div className="category-name">
                                                        <h5 className="brand-name text-muted text-capitalize">ducati</h5>
                                                        <span className="shoes-type text-capitalize">casual for men</span>
                                                    </div>
                                                    <div className="category-price">
                                                        <div className="price-top">
                                                            <span className="price-top-text text-success">specil price</span>
                                                        </div>
                                                        <div className="price-bottom">
                                                            <span className="price-number">₹1,948<del className="old-price text-muted">₹3500</del></span>
                                                            <span className="off-on-price text-success">45% off</span>
                                                        </div>
                                                    </div>
                                                    <Form>
                                                        <div className="product-color mt-5">
                                                            <h4 className=" text-capitalize text-muted p-3">select color</h4>
                                                            <div class="color-type">
                                                                <div class="pro-colors d-flex px-3">
                                                                    <div class="color-1 pcolor mr-3">
                                                                        <a href="" className="text-dark"><div class="color-name1"></div></a>
                                                                        <div class="color__name mt-1 pt-1">
                                                                            <span>black</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="color-1 pcolor mr-3">
                                                                    <a href="" className="text-dark"><div class="color-name2"></div></a>
                                                                        <div class="color__name mt-1 pt-1">
                                                                            <span>red</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="color-1 pcolor mr-3">
                                                                    <a href="" className="text-dark"><div class="color-name4"></div></a>
                                                                        <div class="color__name mt-1 pt-1">
                                                                            <span>gray</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>
                                                
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                                 <Row>         
                                    <Col xs={5}>
                                        <div className="shoping-button d-flex py-3 text-uppercase">
                                            <div className="left-button w-50 p-1">
                                                <button className="btn btn-danger text-uppercase p-3 w-100">add to cart</button>
                                            </div>
                                            <div className="right-button w-50 p-1">
                                                <button className=" btn btn-warning text-uppercase text-white p-3 w-100">buy now</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={7}>

                                    </Col>
                                </Row>         {/*buttons  html end */}
                            </div>
                        </div>    
                    </Container>
                    <div className="related-product">
                        <Container>    
                            <div className="related-product-inner bg-white mt-5 px-3 pt-3 pb-5">
                                <div className="rp-text">
                                    <h3 className="text-capatilize">Similar Products</h3>
                                </div>
                                <div className="main-top-slider">
                                    <Slider {...settings}>
                                        <div className="slider-item my-3" >
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes3} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 " >
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3  ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
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
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
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
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

            </>
        )
    }
}