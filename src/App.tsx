import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Browse from './components/Browse';
import Details from './components/Details';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/details" component={Details} />
                    <Route exact path="/" component={Browse} />
                </Switch>
            </React.Fragment>
        );
    }
}