import React, { Component } from 'react'
import Profile from './Profile.js'
import UserModel from '../models/user.js'
import PostModel from '../models/posts.js'
import PostForm from './PostForm.js';

import { Card, CardBody, CardText, CardTitle } from 'reactstrap';



export default class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            posts: [],
            id: ""
        };
    };

    updateProfile = (_name) => {
        console.log(_name)
        console.log("Update profile has been called!")
        let dbid = this.props.getCurrentUser();
        // uses a static method to call the database and change the user info
        UserModel.update(dbid, _name)
        .then((res) => {
            this.setState({
                name : _name,
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

    renderPostList() {
        let list = this.state.posts.map((post) =>
        <Card>
            <CardBody>
                <CardTitle> <h4>{post.title}</h4> </CardTitle>
                <CardText> {post.content} </CardText>
            </CardBody>
        </Card>
        );

        return list;
    }
    
    render() {
        return (
            <div>
                <Profile name={this.state.name} posts={this.state.posts} 
                updateProfile={this.updateProfile} />
                <PostForm userId={this.state.id}/>
                {this.renderPostList()} 
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


