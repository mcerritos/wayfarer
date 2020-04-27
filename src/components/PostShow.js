import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

class PostShow extends Component {
    return() {
        render (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle> Title </CardTitle>
                        <CardText> Text </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PostShow;