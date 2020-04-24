import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing.js';
import Cities from '../components/Cities.js';
import Profile from '../components/Profile.js';
import Register from '../components/Register.js';
import LoginModal from '../components/LoginModal.js';


export default (props) => (
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route path="/cities" component={ Cities }/>
        <Route path="/profile" component={ Profile }/>
        {/* <Route exact path="/register" component={ Register }/> */}
        <Route path="/login" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <LoginModal 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
      <Route path="/register" render={ (routeProps) => {
      return <Register 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
    

    </Switch>
)