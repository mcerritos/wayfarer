import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import PostModel from '../models/posts'

class PostShow extends Component {
    state = {
        title: '',
        author: '',
        content: '',
    }

    componentDidMount() {
        PostModel.getPost(this.props.match.params.id)
        .then((res) => {
            console.log(res)
            this.setState({
                title : res.data.title,
                content: res.data.content
            })
            console.log("Testing get post info")
        }).catch((err) => {console.log(err)});
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle> {this.state.title} </CardTitle>
                        <CardText> {this.state.content} </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PostShow;