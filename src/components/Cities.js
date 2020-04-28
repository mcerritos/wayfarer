import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import '../styles/cities.css';
import CityModel from '../models/cities.js'

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            selectedCity: ""
        };
    }

    componentDidMount() {
        CityModel.all()
            .then((res) => {
                console.log(res.data);
            })
    }

    render() { 
        return (
                <Row>
                    <Col className="city-col" md="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h4>Cities</h4></CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="city-col" md="8">
                        Col 2
                    </Col>
                </Row>
        );
    }
}
 
export default Cities;