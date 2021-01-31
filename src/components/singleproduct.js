import React from 'react'
import { Link} from 'react-router-dom'
import img from '../assets/images/singlepro1.jpeg';
import img1 from '../assets/images/singlepro2.jpeg';
import img2 from '../assets/images/singlepro3.jpeg';
import img3 from '../assets/images/singlepro7.jpeg';
import img4 from '../assets/images/singlepro5.jpeg';
import img5 from '../assets/images/singlepro6.jpeg';
import img11 from '../assets/images/singlepro11.jpeg';
import {Row,Col,Container} from 'react-bootstrap';

export default class Singleproduct extends React.Component {
   
    render(){
        return (
            <>
                <div className="main-outer pb-5">    
                    <Container>
                        <div className="singlepro-main-outer">
                            <div className="singlepro-main bg-white">
                                <Row>
                                    <Col xs={1}>
                                        <div className="single-proimg sidebar">
                                            <div className="bg-img-outer"><div className="top-img-1 side-img text-center"></div></div>
                                            <div className="top-img-2 side-img text-center"></div>
                                            <div className="top-img-3 side-img text-center"></div>
                                            <div className="top-img-4 side-img text-center"></div>
                                            <div className="top-img-5 side-img text-center"></div>
                                            <div className="top-img-6 side-img text-center"></div>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="product-fullimg">
                                            <img src={img11} className=" img-fluid full-img" alt=""/>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={7}>
                                        <div className="right-outer">
                                            <div className="right-top1">
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
                                </Row>
                            </div>
                        </div>    
                    </Container>
                </div>

            </>
        )
    }
}