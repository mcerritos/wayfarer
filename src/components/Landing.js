import React, { Component } from 'react';

import { Row, Col, Container } from 'reactstrap';

class Landing extends Component {
    render() {
        return (
            <Container>
                <Row>
                    Header pic
                </Row>
                <Row noGutters={false}>
                    <Col style={{border: "1px solid red"}} md='4'>
                        Col 1
                    </Col>
                    <Col style={{border: "1px solid red"}} md='4'>
                        Col 2
                    </Col>
                    <Col style={{border: "1px solid red"}} md='4'>
                        Col 3
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Landing;