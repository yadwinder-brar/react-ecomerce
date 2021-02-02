import React from 'react'


import Banner from './banner.js';
import Slider2 from '../components/slider2.js';
import Slider from '../components/slider.js';
import FeaturedProducts from './FeaturedProducts.js';
export default class Index extends React.Component {
   
    render(){
        return (
            <>  
                <Slider/>
                <FeaturedProducts/> 
                <Banner/>
                <Slider2/>
                <FeaturedProducts/>
                <FeaturedProducts/>
                <Banner/>
                <FeaturedProducts product="all"/>  
                <FeaturedProducts product="hot"/>  
            </> 
        )
    }
}