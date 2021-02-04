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
                                    <Col xs={2}>
                                        <div className="order-left">
                                            <img src={proimg} className="img-fluid or__img" alt="order img" />
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="order-detail text-capitalize text-muted">
                                            <h4 className="or__brand">nike</h4>
                                            <span className="prod__color">color : red</span><br/>
                                            <span className="prod__size pl-1">size : 11</span>
                                        </div>
                                    </Col>
                                    <Col xs={2}>
                                        <div className="order-prize">
                                            <h5 className="or-prz">₹2400</h5>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="order-status">
                                            <span className="delivery-date">Delivered on Feb 20, 2018</span>
                                            <p className="or-status">Your item has been delivered</p>
                                        </div>
                                        <div className="status-bottom">
                                            <button className="bill btn btn-success text-uppercase mr-3">invoice</button>
                                            <button className="btn btn-danger text-uppercase text-right">cancel order</button>
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