import React from 'react'
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import proimg from '../assets/images/abcs.jpeg';
import { FaUser} from 'react-icons/fa';
export default class Orders extends React.Component {
    render(){
        return (
            <>
                <div className="myorders">
                    <div className="myorder-outer">
                        <Container>
                            <div className="order-inner">
                                <Row>
                                    <Col sm={6} md={3}>
                                        <div className="order-left text-center mt-md-3 mt-5">
                                            <img src={proimg} className="img-fluid or__img" alt="order img" />
                                        </div>
                                    </Col>
                                    <Col sm={6} md={3}>
                                        <div className="order-detail text-capitalize text-center text-muted mt-md-3 mt-5">
                                            <h4 className="or__brand">nike</h4>
                                            <span className="prod__color">color : red</span><br/>
                                            <span className="prod__size pl-1">size : 11</span>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={2}>
                                        <div className="order-prize text-center mt-md-3 mt-5">
                                            <h5 className="or-prz">₹2400</h5>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <div className="order-status mt-md-3 mt-5 text-center">
                                            <span className="delivery-date">Delivered on Feb 20, 2018</span>
                                            <p className="or-status">Your item has been delivered</p>
                                        </div>
                                        <div className="status-bottom text-center">
                                            <button className="bill btn btn-success text-uppercase mr-3 mt-3">invoice</button>
                                            <button className="oc btn btn-danger text-uppercase text-right mt-3">cancel order</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>  
            </>
        )
    }
}