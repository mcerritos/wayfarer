import React, { Component } from 'react';

import { Row, Col, Card, CardBody } from 'reactstrap';
import '../styles/citylistitem.css';

class CityListItem extends Component {
    render() {
        return (
            <>
                <Card className = 'Card'>
                    <CardBody>
                        <Row>
                            <Col className="city-list-col">
                                <img className="list-img" src={this.props.img} alt={this.props.name}/>
                            </Col>
                            <Col className="city-list-col">
                                <h4 onClick={this.props.handleClick} id={this.props.cityId}>{this.props.name}</h4>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <br />
            </>
        );
    };
}

export default CityListItem;