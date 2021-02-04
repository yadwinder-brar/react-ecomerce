import React from 'react'
import {Row,Col} from 'react-bootstrap'
export default class Footer extends React.Component {
    render(){
        return (
            <footer className="section-footer">
                <div className="footer-inner">
                    <Row>
                        <Col xs={6} sm={2}>
                            <div className="footer-ist">
                                <div className="about-head my-3">
                                    <span className="ab-head text-uppercase">about</span>
                                </div>
                                <div className="list">
                                    <span className="ab-body text-capitalize"> about us</span>
                                    <span className="ab-body text-capitalize"> contact us</span>
                                    <span className="ab-body text-capitalize"> careers</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={2}>
                            <div className="help-head my-3">
                                <span className="ab-head text-uppercase">help</span>
                            </div>
                            <div className="help-body">
                                <span className="ab-body text-capitalize"> payments</span>
                                <span className="ab-body text-capitalize"> shipping</span>
                                <span className="ab-body text-capitalize"> fAQ</span>
                                <span className="ab-body text-capitalize"> canclation & return</span>
                            </div>
                        </Col>
                        <Col xs={6} sm={2}>
                            <div className="policy my-3">
                                <span className="ab-head text-uppercase">policy</span>
                            </div>
                            <div className="policy-body">
                                <span className="ab-body text-capitalize">return policy</span>
                                <span className="ab-body text-capitalize"> term of use</span>
                                <span className="ab-body text-capitalize">security</span>
                                <span className="ab-body text-capitalize"> privacy</span>
                            </div>
                        </Col>
                        <Col xs={6} sm={2}>
                            <div className="social my-3">
                                <span className="ab-head text-uppercase">social</span>
                            </div>
                            <div className="social-body">
                                <span className="ab-body text-capitalize">facebook</span>
                                <span className="ab-body text-capitalize">twitter</span>
                                <span className="ab-body text-capitalize">you tube</span>
                                <span className="ab-body text-capitalize">instagram</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="add-main pl-md-5">
                                <div class="address my-3">
                                    <span className="ab-head text-uppercase">Registered Office Address:</span>
                                </div>
                                <div className="address-body">
                                    <span className="ab-body text-capitalize"> Zarroh craft Private Limited, </span>
                                    <span className="ab-body text-capitalize"> Buildings Alyssa, Begonia &amp; </span>
                                    <span className="ab-body text-capitalize"> Clove Embassy Tech Village, </span>
                                    <span className="ab-body text-capitalize"> Outer Ring Road, Devarabeesanahalli Village, </span>
                                    <span className="ab-body text-capitalize"> xxxxxxxxx, xxxxxxx, </span>
                                    <span className="ab-body text-capitalize"> xxxxxx, India </span>
                                    <span className="ab-body text-capitalize"> Telephone: <a href="">1800 xxxxxxxxx</a></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="fotter-bottom border-top">
                    <Row>
                        <Col xs={12}>
                            <div className="text-center p-3">
                                <span className="text-white">&copy; Copyright 2021 All rights reserved</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}