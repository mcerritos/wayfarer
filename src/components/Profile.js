import React, { Component } from 'react';
import Post from './Post.js';
import { Card, CardImg, CardText, CardBody,
          CardTitle, CardSubtitle, Button } from 'reactstrap';
import ProfileForm from './ProfileForm.js';


class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formStyle: {
          display: 'none',
        },
      };
    };

    toggleBodyForm = () => {
      this.state.formStyle.display === 'block'
      ? this.setState({ formStyle: {display: 'none'} })
      : this.setState({ formStyle: {display:'block'} });
    };

    render() {
       
        return (
            <div>
                <Card>
                  {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                  <CardBody>
                    <CardTitle>Welcome to your profile, {this.props.name} !</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <span className='edit' onClick={this.toggleBodyForm}>Edit</span>
                  </CardBody>
                </Card>

                <ProfileForm 
                  style={this.state.formStyle}
                  autoFocus={true}
                  buttonName="Update Profile!"
                  updateProfile={this.props.updateProfile}
                  toggleBodyForm={this.toggleBodyForm} />

            </div>
        )
    }
}

export default Profile;


 // let posts = this.props.posts.map((post) => {
        //     return (
        //       <Post
        //         key={postMessage._id}
        //         // title={title}
        //       />
        //     );
        //   });
