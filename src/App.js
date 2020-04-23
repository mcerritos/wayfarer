import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navigation from './components/Navigation'


class App extends Component {
    
    state = {
        currentUser: localStorage.getItem('uid')
    }

    setCurrentUser = (userId) => {
        this.setState({ currentUser: userId })
        localStorage.setItem('uid', userId)
    }

    logout = (event) => {
        event.preventDefault();

        localStorage.removeItem('uid');
        UserModel.logout()
            .then(res => {
                console.log(res)
                this.setState({ currentUser: null })
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navigation />
                <div className="container">
                    <Routes />
                </div>
            </>
        );
    }
}

export default withRouter(App);