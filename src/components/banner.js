import React from 'react'
import img from '../assets/images/banerfk.jpg';
import img2 from '../assets/images/banner3.jpg';
import img1 from '../assets/images/main-baner.jpg';
export default class Banner extends React.Component {
  
    render(){
        return (
                <div className="main-banner my-3 mx-auto">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="b-img my-3">
                                    <img src={img} className="w-100 round" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="b-img my-3">
                                    <img src={img1} className="w-100 round" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="b-img">
                                    <img src={img2} className="w-100 round" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )           
    }
}