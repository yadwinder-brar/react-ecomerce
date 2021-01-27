import React from 'react'
import {Card,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import { base_url } from './config';
import img from '../assets/images/banerfk.jpg';
import img2 from '../assets/images/banner3.jpg';
import img1 from '../assets/images/main-baner.jpg';
export default class Baner extends React.Component {
  
    render(){
        return (
                <div className="main-banner my-3 mx-auto">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="b-img">
                                    <img src={img} className="w-100 round"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="b-img">
                                    <img src={img1} className="w-100 round"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="b-img">
                                    <img src={img2} className="w-100 round"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )           
    }
}