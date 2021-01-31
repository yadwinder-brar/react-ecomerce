import React from 'react'

import FeaturedProducts from './FeaturedProducts.js';
export default class Product extends React.Component {
   
    render(){
        return (
            <>  
                <h2 className="text-center">Category Name</h2>
                <FeaturedProducts/>
                <div className="outer main-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <div className="main-filters border-gray-light bg-white">
                                    <div className="filter-header border-bottom">
                                        <div className="filter__right">
                                            <span className="filter-text">filters</span>
                                        </div>
                                        <div className="filter__left">
                                            <span className="filter-text text-danger">clear all</span>
                                        </div>
 
                                    </div>
                                    <div className="filter-catcat">
                                        <div className="_213eRC _2ssEMF">
                                            <div className="_2gmUFU _3V8rao">Discount</div>
                                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="ttx38n _3DyGEM"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="IIvmWM"></path></svg>
                                            <div className="_3FPh42">
                                                <div className="_2d0we9">
                                                    <div className="_4921Z t0pPfW" title="70% or more">
                                                        <div className="_1Y4Vhm _4FO7b6">
                                                            <div className="_2iDkf8 t0pPfW">
                                                                <label>
                                                                    <input type="checkbox" className="_30VH1S" readonly="" value="on" />
                                                                    <div className="_24_Dny"></div>
                                                                    <div className="_3879cV">70% or more</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-cat">
                                        <div className="_213eRC _2ssEMF">
                                            <div className="_2gmUFU _3V8rao">Size - UK/India</div>
                                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="ttx38n _3DyGEM">
                                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="IIvmWM"></path>
                                                </svg>
                                            <div className="_4921Z t0pPfW" title="5.5">
                                                <div className="_1Y4Vhm _4FO7b6">
                                                    <div className="_2iDkf8 t0pPfW">
                                                        <label><input type="checkbox" className="_30VH1S" readonly="" value="on" />
                                                            <div className="_24_Dny"></div>
                                                            <div className="_3879cV">5.5</div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="products">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </> 
        )
    }
}