import React from 'react'
import {Card,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import { base_url } from './config';
export default class Mainproduct extends React.Component {
  
    render(){
        return (
                <div className="sidebar-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="p-catageory">
                                        <ul className="ul-sidebar catgory-list d-flex">
                                            <li className="ul-sidebar-item catgory-list Dorpdown d-block">Men
                                                <span className="li-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className="collapse">
                                                    <li className="sub-cat text-capitalize">shoes</li>
                                                    <li className="sub-cat text-capitalize">punjabi jutti</li>
                                                    <li className="sub-cat text-capitalize">sports shoes</li>
                                                    <li className="sub-cat text-capitalize">punjabi jutti</li>
                                                </ul>
                                            </li>
                                            {/* <li className="ul-sidebar-item catgory-list Dorpdown">Women
                                                <span className="li-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className="collapse">
                                                    <li className="sub-cat text-capitalize">shoes</li>
                                                    <li className="sub-cat text-capitalize">punjabi jutti</li>
                                                    <li className="sub-cat text-capitalize">sports shoes</li>
                                                    <li className="sub-cat text-capitalize">punjabi jutti</li>
                                                </ul>
                                            </li>
                                            <li className="ul-sidebar-item catgory-list Dorpdown">kids sports shoes
                                                <span className="li-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className="collapse">
                                                    <li className="sub-cat text-capitalize">abc</li>
                                                    <li className="sub-cat text-capitalize">fegh</li>
                                                    <li className="sub-cat text-capitalize">ijkkl</li>
                                                    <li className="sub-cat text-capitalize">mnop</li>
                                                </ul>
                                            </li>
                                            <li className="ul-sidebar-item catgory-list Dorpdown">kids jutti
                                                <span className="li-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className="collapse">
                                                    <li className="sub-cat text-capitalize">abc</li>
                                                    <li className="sub-cat text-capitalize">fegh</li>
                                                    <li className="sub-cat text-capitalize">ijkkl</li>
                                                    <li className="sub-cat text-capitalize">mnop</li>
                                                </ul>
                                            </li>
                                            <li className="ul-sidebar-item catgory-list Dorpdown">punjabi jutti
                                                <span className="li-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className="collapse">
                                                    <li className="sub-cat text-capitalize">abc</li>
                                                    <li className="sub-cat text-capitalize">fegh</li>
                                                    <li className="sub-cat text-capitalize">ijkkl</li>
                                                    <li className="sub-cat text-capitalize">mnop</li>
                                                </ul>
                                            </li> */}
                                            <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="xyz">
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
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="xyz">
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
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="xyz">
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
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="xyz">
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
                                
                                        </ul>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            )
        }
    }