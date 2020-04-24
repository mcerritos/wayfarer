import React, { Component } from 'react';
import Post from './Post.js'

class Profile extends Component {
  
    
    render() {
        let posts = this.props.posts.map((post) => {
            return (
              <Post
                key={postMessage._id}
                // title={title}
              />
            );
          });

        return (
            <div>
                Profile page
            </div>
        )
    }
}

export default Profile;
