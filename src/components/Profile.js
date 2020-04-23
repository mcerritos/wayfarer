import React, { Component } from 'react';

class Profile extends Component {
    let posts = props.posts.map((post) => {
        return (
          <Post
            key={postMessage._id}
            title={title}
          />
        );
      });
    
    render() {
        return (
            <div>
                Profile page
            </div>
        )
    }
}

export default Profile;
