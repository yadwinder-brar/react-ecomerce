import React from 'react'


import Banner from './banner.js';
import Slider2 from '../components/slider2.js';
import FeaturedProducts from './FeaturedProducts.js';
export default class Index extends React.Component {
   
    render(){
        return (
            <>  
                <Slider2/>
                {/* <Banner/> */}
                <FeaturedProducts/>   
            </> 
        )
    }
}