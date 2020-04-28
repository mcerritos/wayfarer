import React, { Component } from 'react';

import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import '../styles/citylistitem.css';

class CityDetail extends Component {
    render() {
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
                        <Row>
                            <Card>
                                <CardBody>
                                    <CardTitle>Posts</CardTitle>
                                </CardBody>
                            </Card>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CityDetail; 