import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing.js';
import Cities from '../components/Cities.js';
import Profile from '../components/Profile.js';
import Register from '../components/Register.js';


export default (props) => (
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route path="/cities" component={ Cities }/>
        <Route path="/profile" component={ Profile }/>
        <Route path="/api/v1/auth/register" component={ Register }/>
    </Switch>
)