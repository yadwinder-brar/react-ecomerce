import React from 'react'

import FeaturedProducts from './FeaturedProducts.js';
export default class Product extends React.Component {
   
    render(){
        return (
            <>  
                <h2 className="text-center">Category Name</h2>
                <FeaturedProducts/>   
            </> 
        )
    }
}