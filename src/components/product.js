import React from 'react'
import {Row,Col,Form} from 'react-bootstrap';
import img2 from '../assets/images/ladies.jpeg';
import img3 from '../assets/images/chair.jpeg';
import img4 from '../assets/images/singlepro5.jpeg';
import img5 from '../assets/images/singlepro6.jpeg';
export default class Product extends React.Component {
   
    render(){
        return (
            <>  
                <div className="outer main-wrapper">
                    <div className="container-fluid">
                        <Row>
                            <Col md={2}>
                                <div className="main-filters border-gray-light bg-white">
                                    <div className="filter-header border-bottom">
                                        <div className="filter__right ">
                                            <span className="filter-text text-capitalize">filters</span>
                                        </div>
                                        <div className="filter__left d-none">
                                            <span className="filter-text text-danger text-right">clear all</span>
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">brand</div>
                                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                </svg>  
                                            </div>
                                            <div className="filter-head d-none">
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="filter-main-text">puma</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">Discount</div>
                                                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                    </svg>  
                                            </div>
                                            <div className="filter-head d-none">
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="filter-main-text">70% or more</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">size</div>
                                                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                    </svg>  
                                            </div>
                                            <div className="filter-head d-none">{/* es nu display karna on click */}
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="filter-main-text">10</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">color</div>
                                                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                    </svg>  
                                            </div>
                                            <div className="filter-head d-none">
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="color-chose"></div>
                                                                    <div className="filter-main-text text-uppercase color">red</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">Discount</div>
                                                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                    </svg>  
                                            </div>
                                            <div className="filter-head d-none">
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="filter-main-text">70% or more</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="filter-cat"> {/*filter-name div */}
                                        <div className="filter-cat-inner">
                                            <div className="catheader-outer">
                                                <div className="filter-name filter__text">Discount</div>
                                                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="filter-icon">
                                                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="icon-fill"></path>
                                                    </svg>  
                                            </div>
                                            <div className="filter-head d-none">
                                                <div className="filter-inner-1st">
                                                     <div className="filter-inner-2nd ml-3"> {/*es nu dynamic karna */}
                                                        <div className="fi3 filter-inner-3rd">
                                                            <div className="filter-inner-4th">
                                                                <label>
                                                                    <input type="checkbox" className="cbox-orignal" readonly="" value="" />
                                                                    <div className="c-box-show"></div>
                                                                    <div className="filter-main-text">70% or more</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="products-right">
                                    <div className="products">
                                        <div className="product-outer">
                                            <div className="product-main">
                                                <div className="">
                                                    <img src={img2} className="" alt=""/>
                                                </div>
                                                <div className="product-detail-outer">
                                                    <div className="p-brand">nike</div>
                                                    <div className="p-detail">good for health</div>
                                                    <div className="p-prize">
                                                        <span className="">1200</span>
                                                        <del className="oriznal-p">1800</del>
                                                        <span className="dis-persent">35%</span>
                                                    </div>
                                                    <div className="p-size"><span className="text-muted text-uppercase">size</span>1,2,3,4,6</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
               
            </> 
        )
    }
}