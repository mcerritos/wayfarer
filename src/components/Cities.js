import React, { Component, useState} from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import '../styles/cities.css';
import CityModel from '../models/cities.js'
import PostModal from './PostModal.js'


class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            selectedCity: "",
            modal: false,
        };
    }

    componentDidMount() {
        CityModel.all()
            .then((res) => {
                console.log(res.data);
            })
    }

    
   
    








    render() { 
        //const toggleModal = () => setModal(!modal); this is how it worked in the other file

        const toggleModal = () => this.setState({
            modal : !(this.modal)
        })
        
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
                        <Button onclick={toggleModal}> Add Post</Button>
                    </Col>
                    <PostModal toggle={toggleModal} toggleState={this.modal} userId={this.props.currentUser}/>
                </Row>

                
        );
    }
}
 
export default Cities;
