import React from 'react'

import {FaSearchPlus,FaTh,FaBars } from 'react-icons/fa';
import {Card,Row,Col,Figure} from 'react-bootstrap';
import { base_url,image_url } from './config';
export default class Products extends React.Component {
    constructor() {
        super();
        this.state = { checked: true,products: [] , total : 0 };
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
            <div class="col-md-9">
                <main class="">
                <header class="border-bottom mb-4 pb-3">
                    <div class="form-inline">
                        <span class="mr-md-auto">{this.state.total} Items found </span>
                        <select class="mr-2 form-control">
                            <option>Latest items</option>
                            <option>Trending</option>   
                            <option>Most Popular</option>
                            <option>Cheapest</option>
                        </select>
                        <div class="btn-group">
                            <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view"> 
                                <FaBars/>
                            </a>
                            <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view"> 
                            <FaTh/>    
                            </a>
                        </div>
                    </div>
                </header>
                <Row>
                    {this.state.products.map((product, i) => {
                        return<Col xs={12} md={4}>
                                <Figure className="card card-product-grid">
                                    <span className="badge badge-danger new"> NEW </span>
                                        <div className="img-wrap"> 
                                        
                                        <img src={image_url + JSON.parse(product.image)[0]} alt="product image"/>
                                        
                                        <a className="btn-overlay" href="#"><FaSearchPlus/> Quick view</a>
                                    </div> 
                                    <figcaption className="info-wrap">
                                        <div className="fix-height">
                                            <a href="#" className="title">{product.product_name}</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$1280</span>
                                                <del className="price-old">$1980</del>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>
                                    </figcaption>
                                </Figure>
                            </Col>   
                        })}                
                </Row> 
                <nav class="mt-4" aria-label="Page navigation sample">
                    <ul class="pagination">
                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                </main>
            </div>
            
        )
    }
}