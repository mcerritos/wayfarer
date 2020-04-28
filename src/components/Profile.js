import React, { Component } from 'react';
// import Post from './Post.js'
import { Card, CardImg, CardText, CardBody,
          CardTitle, CardSubtitle, Button } from 'reactstrap';
import ProfileForm from './ProfileForm.js';
import '../styles/profile.css';


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
                <Card className = 'Card'>
                  {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                  <CardBody>
                    <CardTitle className = 'CardTitle'>Welcome to your profile, {this.props.name} !</CardTitle>
                    <CardText>Your current city is {this.props.city}.</CardText>
                    <CardText>You joined on {this.props.date}.</CardText>
                  </CardBody>
                  <span className='edit' onClick={this.toggleBodyForm}>Edit your profile?</span>
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

