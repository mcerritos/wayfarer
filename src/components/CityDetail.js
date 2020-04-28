import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import '../styles/citylistitem.css';

class CityDetail extends Component {

    // createPostList() {
    //     let list = this.props.cityPosts.map((post) => 
    //     <Card id={post._id}>
    //         <CardBody>
    //             <CardTitle> <h4>{post.title}</h4> </CardTitle>
    //             <CardText> {post.content} </CardText>
    //             <Link to={`/post/${post._id}`}>See More?</Link>
    //         </CardBody>
    //     </Card>
    //     );

    //     return list;
    // }

    render() {
        console.log(this.props)

        return (
            <div className="city-detail-container">
                <Card>
                    <CardBody>
                        <Row className="title">
                            <h4>{this.props.name}</h4>
                        </Row>
                        <Row>
                            <img className="detail-img" src={this.props.src} alt={this.props.name} />
                        </Row>
                        <br />
                        <Button onClick={this.props.toggleModal}>Add Post</Button>
                        <br />
                        <br />
                        <Row>
                            <div className="posts-container">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Posts</CardTitle>
                                        {this.props.cityPosts}
                                    </CardBody>
                                </Card>
                            </div>
                            
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CityDetail; 