import React, { Component } from 'react';
import Post from './Post.js'
import { Card, CardImg, CardText, CardBody,
          CardTitle, CardSubtitle, Button } from 'reactstrap';


class Profile extends Component {
  
    
    render() {
        // let posts = this.props.posts.map((post) => {
        //     return (
        //       <Post
        //         key={postMessage._id}
        //         // title={title}
        //       />
        //     );
        //   });

        return (
            <div>
                Profile page
                <Card>
                  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
            </div>
        )
    }
}

export default Profile;
