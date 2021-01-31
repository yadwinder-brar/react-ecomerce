import React from 'react'
import logo from '../assets/images/white_logo.png';
import { Link} from 'react-router-dom'
import { FaSearch,FaShoppingCart } from 'react-icons/fa';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import Login from  './login.js';
export default class Header extends React.Component {
   
    render(){
        return (
            <header className="section-header">
                <div className="header">
                    <div className=" container-fluid">
                        <div className="row">
                            <div className="col-4 col-sm-2"> 
                                <div className="logo text-center">
                                    <Link to="/" className="header-link" >
                                        <img src={logo} alt="company logo" className="logo__img img-fluid"/>
                                    </Link>
                                </div>
                            </div>        
                            <div className="col-1  col-sm-4 col-md-5 offset-lg-1">
                                <form action="#" className="search">
                                    <div className="input-group">
                                        <input type="text" className="form-control d-none d-sm-block" placeholder="Search"/>
                                        <div className="input-group-append">
                                        <button className="btn btn-header" type="submit">
                                            <FaSearch/>
                                        </button>
                                        </div>
                                    </div>
                                </form> 
                            </div>
                            <div className="col-7 col-sm-6 col-md-5 col-lg-3 offset-lg-1">
                                <div class="widgets-wrap d-flex text-capitalize widget-header">
                                    <ul class="header-nav d-flex">
                                        <li class="nav-text cc">OFFER</li>
                                        <li class="nav-text "> 
                                            <Login/> 
                                        {/* <a href="" class="btn-last">join</a> */}
                                        </li>
                                        <li className="nav-cart">
                                            <span className="text-white position-absolute cart-count">0</span>
                                            <a className="header-cart text-white"><FaShoppingCart/><span className="header-cart-text">Cart</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>  
                </div>
            </header> 
        )
    }
}