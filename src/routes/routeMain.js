import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Routings from './routing';

import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Index from '../components/index.js';
import Product from '../components/product';
import Profile from '../components/profile';
import Slider from '../components/slider.js';
import TopCategories from '../components/TopCategories.js';
import Singleproduct from '../components/singleproduct.js';
export default class MainRouting extends React.Component {
  
    render(){
        return (
            <>
                <Router>    
                    <div class="page-wrapper chiller-theme toggled">
                        <Header/>
                            <TopCategories/>
                            {/* <Slider/> */}
                            <Switch>
                                <Route exact path='/' component={Index}/>
                                <Route exact path='/product' component={Product}/>
                                <Route exact path='/singleproduct' component={Singleproduct}/>
                                <Route exact path='/profile' component={Profile}/>

                            </Switch>                        
                        <Footer/>                                                   
                    </div>
                </Router>
            </>
        )
    }
}