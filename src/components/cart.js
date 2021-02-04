import React from 'react'
import {GoLocation} from 'react-icons';
import {Row,Col,Form,Card,Container} from 'react-bootstrap';
import img2 from '../assets/images/cart-img.jpeg';
import img3 from '../assets/images/pin.png';
export default class Cart extends React.Component {
   
    render(){
        return (
            <> 
                <div className="cart-main">
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="cart-left-outer">
                                    <Card>
                                        <Card.Header className="border-bottom" >
                                            <div className="header-main text-capitalize d-flex">
                                                <div className="header-description w-50">
                                                    <span className="cart-number text-capitalize">my cart(1)</span>
                                                </div>
                                                <div className="client-address d-flex w-50">
                                                    <div className="location px-1">
                                                        <div className="cart-pageicon"><img src={img3} className="iconn-immgg img-fluid" alt="location img"/></div>
                                                    </div>
                                                    <div class="address">
                                                        <input type="text" placeholder="Enter delivery pincode" value="" maxlength="6" autocomplete="off" class="pincode-input"/>
                                                         <span class="address-check">Check</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="main-body border-bottom">
                                                <div className="body-inner">
                                                    <div className="pro-img1st">   {/*ist div  */}
                                                        <div className="product-imgselected">
                                                            <img src={img2} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="pro-quantity mt-3">
                                                            <div class="pro-quan-outer p-3">
                                                                <button class="quant-button" disabled=""> – </button>
                                                                <div class="quant-input">
                                                                    <input type="text" value="1" class="count-input"/>
                                                                </div>
                                                                <button class="quant-button"> + </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-inffoo">
                                                        <div className="pro-detail">
                                                            <h5 className="prod-brand">Puma Core Runner Shoes For Men</h5>
                                                        </div>
                                                        <div className="produ-size">
                                                            <span className="pro-size text-muted">size -11, black</span>
                                                        </div>
                                                        <div className="price__pro">
                                                            <span className="p-prod">₹2100</span> <del className="old-prize text-muted">₹4000</del> <span className="dis-onpro">35%off</span>
                                                        </div>
                                                        <div className="action text-uppercase">
                                                            <span className="action-1st pr-3">save for later</span>
                                                            <span className="action-1st">remove</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main-body border-bottom">
                                                <div className="body-inner">
                                                    <div className="pro-img1st">   {/*ist div  */}
                                                        <div className="product-imgselected">
                                                            <img src={img2} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="pro-quantity mt-3">
                                                            <div class="pro-quan-outer p-3">
                                                                <button class="quant-button" disabled=""> – </button>
                                                                <div class="quant-input">
                                                                    <input type="text" value="1" class="count-input"/>
                                                                </div>
                                                                <button class="quant-button"> + </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-inffoo">
                                                        <div className="pro-detail">
                                                            <h5 className="prod-brand">Puma Core Runner Shoes For Men</h5>
                                                        </div>
                                                        <div className="produ-size">
                                                            <span className="pro-size text-muted">size -11, black</span>
                                                        </div>
                                                        <div className="price__pro">
                                                            <span className="p-prod">₹2100</span> <del className="old-prize text-muted">₹4000</del> <span className="dis-onpro">35%off</span>
                                                        </div>
                                                        <div className="action text-uppercase">
                                                            <span className="action-1st pr-3">save for later</span>
                                                            <span className="action-1st">remove</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="pro-footer">
                                            <div className="inner-footer text-right">
                                                <button className="btn btn-danger order-button text-uppercase">place order</button>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={5}>
                            <Card>
                            <Card.Header className="border-bottom">
                                <div className="bill-detail">
                                    <span className="text-uppercase bill-header">price details</span>
                                </div>            
                            </Card.Header>
                            <Card.Body>
                                <div className="body-outter">
                                    <div className="price-right-main">
                                        <span className="price-right">price (1 item)</span>
                                        <span className="amount">₹4200</span>
                                    </div>
                                    <div className="price-right-main">
                                        <span className="price-right">discount</span>
                                        <span className="amount">₹1400</span>
                                    </div>
                                    <div className="price-right-main">
                                        <span className="price-right">delivery charges</span>
                                        <span className="amount">₹42</span>
                                    </div>
                                    <div className="tootal-amount">
                                        <span className="price-right">total amount</span>
                                        <span className="amount">₹3400</span>
                                    </div>
                                    <div className="discount-description">
                                        <span className="text-capitalize dis-text ">you will save ₹3,162 on this order</span>
                                    </div>
                                </div>
                            </Card.Body>  
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </> 
  
        )
    }
}