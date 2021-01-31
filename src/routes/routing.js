import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'


import Profile from '../components/profile'

export default class Routing extends React.Component {
    render(){
        return (
            <>
                <Router>
                <div class="page-wrapper chiller-theme toggled">

                    <Switch>                         
                        <Route exact path='/site/profile' component={Profile}/>
                    </Switch>
                </div>
                </Router>
            </>
        )
    }
}