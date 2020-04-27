import React, { Component } from 'react'
import Profile from './Profile.js'
import UserModel from '../models/user.js'

export default class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            city: "",
            date: Date.now,
            posts: [],
            id: ""
        };
    };

    updateProfile = (_name, _city) => {
        console.log(_name, _city)
        console.log("Update profile has been called!")
        let dbid = this.props.getCurrentUser();
        // uses a static method to call the database and change the user info
        UserModel.update(dbid, _name, _city)
        .then((res) => {
            this.setState({
                name : _name,
                city : _city,
            })
        }).catch((err) => {console.log(err)});
  }

    componentDidMount() {
        let dbid = this.props.getCurrentUser()
            UserModel.user(dbid).then((res) => {
                console.log(res);
                this.setState({
                    name : res.data.data.name,
                    city: res.data.data.city,
                    date: res.data.data.dateJoined
                })
            }) 
            .catch((err) => {console.log(err)})
        };
 
    render() {
        return (
            <div>
                <Profile name={this.state.name} city={this.state.city} date={this.state.date} posts={this.state.posts} 
                updateProfile={this.updateProfile} />
            </div>
        )
    }
}

 // // get the user's posts when the posts load
    // componentDidMount() {
    //     this.fetchData();
    // };

    // get the users posts
    // fetchData = () => {
    //     PostModel.all().then((res) => {
    //         this.setState ({
    //         posts: res.data.posts,
    //         });
    //     });
    // };
;


