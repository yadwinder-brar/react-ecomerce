import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import proimg from '../assets/images/profile-pic-male.svg';
import { FaUser} from 'react-icons/fa';
export default class Profile extends React.Component {
   
    render(){
        return (
            <>  
                <div className="main-profile">
                    <Container>
                        <div className="profile-inner">
                            <Row>
                                <Col xs={4}>
                                    <div className="profile-left">
                                        <div className="profile-header bg-white b-shadow">
                                            <div className="user-info d-flex p-3">
                                                <div className="header-img">
                                                    <a href="" class=""><img src={proimg} alt="profile-img" className="img-fluid client__img"/></a>
                                                </div>
                                                <div className="user-info ml-3">
                                                    <span className="user-name text-capitalize">hello</span>
                                                </div>
                                            </div>    
                                        </div>
                                        <div className="profile-body b-shadow bg-white mt-3">
                                            <div className="profile-body-main">
                                                <div className="orders p-3">
                                                    <a href="" className="order-link">
                                                        <span className="acc-icon text-danger"><FaUser/></span>
                                                        <span className="order-text text-muted text-uppercase pl-3">my orders</span>
                                                        <span className="order-icon">
                                                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="HQ">
                                                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class=""></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="BB"></div>
                                                <div className="account-setting text-muted p-3">
                                                    <span className="acc-icon text-danger"><FaUser/></span>
                                                    <span className="acc-text text-uppercase pl-3">account settings</span>
                                                </div>
                                                <div className="">
                                                    <div className="text-muted text-capitalize acc__2nd">Profile Information</div>
                                                    <div className="text-muted text-capitalize acc__2nd">Manage Addresses</div>
                                                    <div className="text-muted text-capitalize acc__2nd">PAN Card Information</div>
                                                </div>
                                                <div className="BB"></div>
                                                <div className="payment text-muted p-3">
                                                    <span className="acc-icon text-danger"><FaUser/></span>
                                                        <span className="acc-text text-uppercase pl-3">PAYMENTS</span>
                                                </div>
                                                    <div className="">
                                                        <div className="text-muted text-capitalize acc__2nd">Gift Cards<span class="PK">₹0</span></div>
                                                        <div className="text-muted text-capitalize acc__2nd">Saved Cards</div>
                                                    </div>
                                                    <div className="BB"></div>
                                                
                                                <div className="chats p-3">
                                                    <a href="" className="order-link">
                                                        <span className="acc-icon text-danger"><FaUser/></span>
                                                        <span className="order-text text-muted text-uppercase pl-3"> my chats</span>
                                                        <span className="order-icon">
                                                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="HQ">
                                                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class=""></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="BB"></div>
                                                <div className="account-setting text-muted p-3">
                                                    <span className="acc-icon text-danger"><FaUser/></span>
                                                    <span className="acc-text text-uppercase pl-3">my stuff</span>
                                                </div>
                                                <div className="">
                                                    <div className="text-muted text-capitalize acc__2nd">My Coupons</div>
                                                    <div className="text-muted text-capitalize acc__2nd">My Reviews & Ratings</div>
                                                    <div className="text-muted text-capitalize acc__2nd">All Notifications</div>
                                                    <div className="text-muted text-capitalize acc__2nd">My Wishlist</div>
                                                </div>
                                                <div className="BB"></div>
                                                <div className="logout p-3">
                                                    <a href="" className="order-link p-3">
                                                        <span className="acc-icon text-danger"><FaUser/></span>
                                                        <span className="order-text text-muted text-uppercase pl-3">logout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="profile-right-main b-shadow bg-white">
                                        <div className="inner-1st">
                                            <div className="info-main">
                                                <div className="top-info-main">
                                                    <div className="top-info">
                                                        <span class="p-info">Personal Information</span><span class="info-edit">Edit</span>
                                                    </div>
                                                    <form>
                                                        <div class="_1TlPi6 row">
                                                            <div class="_1YVqbV">
                                                                <div class="_1Jqgld">
                                                                    <input type="text" class="_1w3ZZo _1YmvCG _2mFmU7" name="firstName" required="" disabled="" autocomplete="name" tabindex="1" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="_1YVqbV">
                                                                <div class="_1Jqgld">
                                                                    <input type="text" class="_1w3ZZo _1YmvCG _2mFmU7" name="lastName" disabled="" autocomplete="name" tabindex="2" value=""/>
                                                                </div>
                                                                <button class="_2KpZ6l _3eVCfA d-none" type="submit" tabindex="5">SAVE</button>
                                                            </div>
                                                        </div>
                                                        <div class="_1509Hs text-uppercase">your gender </div>
                                                        <div>
                                                            <label for="Male" class="_2Fn-Ln _2fnqkz _2LcXZ- _3iI7Qn">
                                                                <input type="radio" disabled="" class="_3DAmyP" name="gender" readonly="" id="Male" value="on"/>
                                                                <div class="_1XFPmK"></div>
                                                                <div class="_2jIO64">
                                                                    <span disabled="" tabindex="3">Male</span>
                                                                </div>
                                                            </label>
                                                            <label for="Female" class="_2Fn-Ln _2fnqkz _2LcXZ- _3iI7Qn">
                                                                <input type="radio" disabled="" class="_3DAmyP" name="gender" readonly="" id="Female" value="on"/>
                                                                <div class="_1XFPmK"></div>
                                                                <div class="_2jIO64">
                                                                    <span disabled="" tabindex="4">Female</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="_30ILIt">
                                                    <div class="_2GZbEx">
                                                        <span class="bgOhjx">Email Address</span>
                                                            <a class=" info-edit" href="#">Edit</a>
                                                            {/* <a class="_14Me7y" href="#">Change Password</a> */}
                                                    </div>
                                                    <form>
                                                        <div class="_2509-j row">
                                                            <div class="_1tli27">
                                                                <div class="_1Jqgld">
                                                                    <input type="text" class="_1w3ZZo _3sranR _2mFmU7 ml-3" name="email" autocomplete="email" required="" value="" disabled=""/>
                                                                </div>
                                                            </div>
                                                            <button class="_2KpZ6l _25vsmg _1-iOO7 d-none" type="submit">SAVE</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="_30ILIt">
                                                    <div class="_2GZbEx">
                                                        <span class="bgOhjx">Mobile Number</span>
                                                        <a class="_3memBI _14Me7y info-edit" href="#">Edit</a>
                                                    </div>
                                                    <form>
                                                        <div class="_2509-j row">
                                                            <div class="_1tli27">
                                                                <div class="_1Jqgld">
                                                                    <input type="text" class="_1w3ZZo _3sranR _2mFmU7 ml-3" name="mobileNumber" autocomplete="tel" required="" disabled="" value=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>   
                    </Container> 
                </div>
            </> 
        )
    }
}