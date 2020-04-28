import React, { Component, useState } from 'react';
import Routes from './config/routes'
import Navigation from './components/Navigation'
import UserModel from './models/user';
import { withRouter } from 'react-router-dom'

class App extends Component {
    
    state = {
        currentUser: localStorage.getItem('uid'),
        dbId : "1"
    }

    setCurrentUser = (userId) => {
        this.setState({ currentUser: userId })
        localStorage.setItem('uid', userId)
    }

    getCurrentUser = (userId) => {
        return this.state.currentUser
    }

    logout = (event) => {
        event.preventDefault();

        localStorage.removeItem('uid');
        UserModel.logout()
            .then(res => {
                console.log(res)
                this.setState({ currentUser: null })
                this.setState({ dbId: "" })
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navigation setCurrentUser={this.setCurrentUser} getCurrentUser={this.getCurrentUser} currentUser={this.state.currentUser}
                 logout={this.logout} />
                <div className="container-fluid">
                <Routes currentUser={this.state.currentUser} getCurrentUser={this.getCurrentUser} setCurrentUser={this.setCurrentUser} 
                />
                </div>
            </>
        );
    }
}

export default withRouter(App);