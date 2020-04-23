import React, { Component } from 'react'
import Profile from './Profile.js'

export default class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            city: ""
            posts: []
        };
    };

    // get the user's posts when the posts load
    componentDidMount() {
        this.fetchData();
    };

    // get the users posts
    fetchData = () => {
        PostModel.all().then((res) => {
            this.setState ({
            posts: res.data.posts,
            });
        });
    };

    // not sure how to update my user 
    updateUser = (user) => {
        const isUpdatedUser = u => {
            return u._id === user._id;
        };

        // uses a static method to call the database and change the user info
        UserModel.update(user)
        .then((res) => {
          let name = this.state.name;
          let city = this.state.city;
          users.find(isUpdatedUser).name = user.name;
          users.find(isUpdatedUser).city = user.city;
          this.setState({ user: user });
        });
  };
  
    render() {
        return (
            <div>
                <Profile posts={this.state.posts}/>
            </div>
        )
    }
}

export default ProfileContainer;
