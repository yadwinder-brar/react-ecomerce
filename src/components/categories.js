import React from 'react'
import {Card,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import { base_url } from './config';
import img from '../assets/images/banner2.png';
import shoes from '../assets/images/shoes2.jpg';
import img1 from '../assets/images/banner1.jpg';
import img2 from '../assets/images/discount.png';
import shoes1 from '../assets/images/shoes4.jpeg';
export default class Categories extends React.Component {
  
    render(){
        return (
                <div className="proudects">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="main-product">
                                    <div className="col-8 bg-white">
                                        <h4 className="pro-category text-uppercase">fresh arrival</h4>
                                        <span className="pro-sub-category">women footwear</span>
                                    </div>
                                    <div className="col-4 bg-white text-right">
                                        <a className="btn btn-danger text-uppercase  my-3"> view all</a>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">           
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                    
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                    <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 bg-white">
                                        <h4 className="pro-category text-uppercase">best of juti</h4>
                                        <span className="pro-sub-category">punjabi juti</span>
                                    </div>
                                    <div className="col-4 bg-white text-right">
                                        <a className="btn btn-danger text-uppercase  my-3"> view all</a>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-8 bg-white">
                                        <h4 className="pro-category text-uppercase">on sale</h4>
                                        <span className="pro-sub-category">sports shoes</span>
                                    </div>
                                    <div className="col-4 bg-white text-right">
                                        <a className="btn btn-danger text-uppercase  my-3"> view all</a>
                                    </div>
                                    <div className="row">    
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                   
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={shoes} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 bg-white">
                                        <h4 className="pro-category text-uppercase">best of ladies Footwear</h4>
                                        <span className="pro-sub-category">women footwear</span>
                                    </div>
                                    <div className="col-4 bg-white text-right">
                                        <a className="btn btn-danger text-uppercase  my-3"> view all</a>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-2">        
                                            <div className="card my-3">
                                                <div className="card-body">
                                                <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">           
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img2} alt="discount image" className="d-img"/>
                                                    <span className="text-white position-absolute cbn">10% off</span>
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                    
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$90</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                    <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-2">       
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <img src={img1} alt="product image" className="p-img  w-100"/>
                                                </div>
                                                <div className="card-footer d-flex">
                                                    <div className="footer-left w-50">
                                                        <span className="prouduct-price">$100</span>
                                                    </div>
                                                    <div className="footer-right w-50 text-right">
                                                        <span className="buy"><button className="btn btn-danger btn__addcart" >Add to cart</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                  
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>           
                </div>    
        )
    }
}