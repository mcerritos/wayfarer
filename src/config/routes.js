import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing.js';
import Cities from '../components/Cities.js';
import Register from '../components/Register.js';
import LoginModal from '../components/LoginModal.js';
import ProfileContainer from '../components/ProfileContainer.js';
import PostForm from '../components/PostForm.js';
import PostShow from '../components/PostShow.js'

export default (props) => (
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route path="/cities" render={ (routeProps) => {
          return <Cities 
                  {...routeProps}
                  currentUser = {props.currentUser}
                  getCurrentUser={props.getCurrentUser}
                  /> 
                } } />
        <Route path="/profile" render={ (routeProps) => {
          return <ProfileContainer 
                  {...routeProps}
                  currentUser = {props.currentUser}
                  getCurrentUser={props.getCurrentUser}
                  /> 
    } } />
        <Route path="/login" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <LoginModal 
                { ...routeProps }
                setdbId={this.setdbId}
                getdbId={this.getdbId}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
      <Route path="/register" render={ (routeProps) => {
      return <Register 
                { ...routeProps }
                setdbId={this.setdbId}
                getdbId={this.getdbId}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />

      <Route path="/posts" render={ (routeProps) => {
      return <PostForm 
                { ...routeProps }
                currentUser={props.currentUser}
              /> 
    } } />

<Route path="/post/:id" render={ (routeProps) => {
      return <PostShow 
                { ...routeProps }
                currentUser={props.currentUser}
    
              /> 
    } } />
    

    </Switch>
)