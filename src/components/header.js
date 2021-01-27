import React from 'react'
import logo from '../assets/images/white_logo.png';
import { FaSearch,FaShoppingCart } from 'react-icons/fa';
import {Dropdown,DropdownButton} from 'react-bootstrap';
export default class Header extends React.Component {
   
    render(){
        return (
            <header className="section-header">
                <div className="header">
                    <div className=" container-fluid">
                        <div className="row no-gutters">
                            <div className="col-sm-2 col-5"> 
                                <div className="logo text-center">
                                    <a href="#" className="header-link" >
                                        <img src={logo} alt="company logo" className="logo__img img-fluid"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-2 col-5 order-2 order-md-1 text-center">
                                {/* <div className="dropdown">
                                    <button  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Footwear
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#"></a>
                                        <a className="dropdown-item" href="#">women shoes</a>
                                        <a className="dropdown-item" href="#">punjabi jutti</a>
                                        <a className="dropdown-item" href="#"></a>
                                        <a className="dropdown-item" href="#">sandel</a>
                                    </div>
                                </div> */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="danger" id="dropdown-basic" className="d__button">
                                        Footwear
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">men shoes</Dropdown.Item>
                                        <Dropdown.Item href="#">punjabi jutti</Dropdown.Item>
                                        <Dropdown.Item href="#">women shoes</Dropdown.Item>
                                        <Dropdown.Item href="#">sandel</Dropdown.Item>
                                        <Dropdown.Item href="#">punjabi jutti</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            
                            <div className="col-2 col-md-4 order-1 order-md-2">
                                <form action="#" className="search">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control d-none d-md-block" placeholder="Search"/>
                                        <div className="input-group-append">
                                        <button className="btn btn-header" type="submit">
                                            <FaSearch/>
                                        </button>
                                        </div>
                                    </div>
                                </form> 
                            </div>
                            <div className="col-sm-5 col-md-4 col-12 order-3 d-none d-sm-block text-md-center text-left">
                                <div class="widgets-wrap d-flex justify-content-md-center text-capitalize widget-header d-none d-md-block">
                                    <ul class="header-text header-nav d-inline-flex">
                                        <li class="nav-text cc">OFFER</li>
                                        {/* <li class="nav-text right-text">help</li> */}
                                        <li class="nav-text "> <a href="" class="btn-last">join</a>
                                        </li>
                                        {/* <li className="nav-cart"><FaShoppingCart/></li> */}
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