import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/banner2.png';
import shoes from '../assets/images/shoes2.jpg';
import img1 from '../assets/images/banner1.jpg';
import img2 from '../assets/images/discount.png';
import {Figure,Col,} from 'react-bootstrap';
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
        fetch(base_url + 'api/v1/products', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
          }).then(response => response.json()).then(response => { 
              this.setState({ products : response.data.data , total : response.data.total });
              console.log(this.state.products)
          })
          .catch(err => console.log(err))
      }
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
                                        <Link to="/" className="btn btn-danger text-uppercase  my-3"> view all</Link>
                                    </div>
                                    <div className="row">
                                    {this.state.products.map((product, i) => {
                                        return<div className="col-sm-6 col-md-4 col-lg-2">        
                                                    <div className="card my-3">
                                                        <div className="card-body">
                                                        <img src={img2} alt="discount image" className="d-img"/>
                                                            <span className="text-white position-absolute cbn">10% off</span>
                                                            <img src={image_url + JSON.parse(product.image)[0]} alt="product image" className="p-img  w-100 rounded-circle"/>
                                                        </div>
                                                        <div className="card-footer d-flex">
                                                            <div className="footer-left w-50">
                                                                <span className="prouduct-price"></span>
                                                            </div>
                                                            <div className="footer-right w-50 text-right text-right">
                                                            {product.product_name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                        })}   
                                        
                                    </div>
                                    
                                    
                                    
                                    <div className="col-8 bg-white">
                                        <h4 className="pro-category text-uppercase">best of ladies Footwear</h4>
                                        <span className="pro-sub-category">women footwear</span>
                                    </div>
                                    <div className="col-4 bg-white text-right">
                                        <Link to="/" className="btn btn-danger text-uppercase  my-3"> view all</Link>
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