import React, { Component } from 'react'
import Profile from './Profile.js'
import UserModel from '../models/user.js'
import PostModel from '../models/posts.js'
import PostForm from './PostForm.js';
import { Redirect, Link } from "react-router-dom";

import '../styles/posts.css'
import { Card, CardBody, CardText, CardTitle, CardHeader } from 'reactstrap';



export default class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            date: Date.now,
            posts: [],
            id: "",
            redirect: null
        };
    };

    // this updates the profile
    updateProfile = (_name, _city) => {
        console.log(_name, _city)
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
            this.setState({
                name : res.data.data.name,
                city: res.data.data.city,
                id: dbid
            })
        }) 
        .catch((err) => {console.log(err)})
        
        PostModel.all(dbid)
            .then((res) => {
                console.log('boop');
                console.log(res.data);

                this.setState({
                    posts: res.data
                })
            })
            .catch((err) => {console.log(err)})
    };

    // this calls the show post when the title is clicked on
    // onPostClick = (event) => {
    //     console.log("is this on???")
    //     let dbid = this.props.getCurrentUser()
    //     // pass props to redirect, but how??
    //     return(
    //         <Redirect to={{
    //             pathname: '/post',
    //             state: { postId: event.target.id, userId: dbid }
    //         }}
    //         />
    //     )
    // }
   
    // this maps the post data to the info in state
    renderPostList() {
        let list = this.state.posts.map((post) =>
        <Card className= 'postCard' id={post._id} onClick={this.onPostClick}>
            <CardBody>
                <CardTitle> <h4>{post.title}</h4> </CardTitle>
                <CardText> {post.content} </CardText>
                <Link to={`/post/${post._id}`} className = 'seeMore'>See More?</Link>
            </CardBody>
        </Card>
        );

        return list;
    }
    
    render() {
        return (
            <div>
                <Profile name={this.state.name} city={this.state.city} date={this.state.date} posts={this.state.posts} 
                updateProfile={this.updateProfile} />
                {this.renderPostList()} 
            </div>
        )
    }
}


