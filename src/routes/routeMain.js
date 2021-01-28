import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Routings from './routing';

import Header from '../components/header.js'
import Footer from '../components/footer.js';
import Index from '../components/index.js';

import TopCategories from '../components/TopCategories.js';
export default class MainRouting extends React.Component {
  
    render(){
        return (
            <>
                <Router>
                    
                    <div class="page-wrapper chiller-theme toggled">
                        <Header/>
                            <TopCategories/>
                            <Switch>
                                <Route exact path='/' component={Index}/>
                                <Routings path='/catgories'>
                                </Routings> 
                            </Switch>                        
                        <Footer/>                                                   
                    </div>
                </Router>
            </>
        )
    }
}