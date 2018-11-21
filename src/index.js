import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LinkBox from './Link';
import AboutBox from './About';
import * as serviceWorker from './serviceWorker';
//import {Router, Route} from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={App} />
            <Route path="/link" component={LinkBox}/>
            <Route path="/about" component={AboutBox}/>
        </Switch>
    </ BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
