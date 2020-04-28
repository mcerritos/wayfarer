import React, { Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import '../styles/cities.css';
import CityModel from '../models/cities.js'
import PostModal from './PostModal.js'



import CityListItem from '../components/CityListItem.js';
import CityDetail from '../components/CityDetail.js';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            selectedCity: "",
            modal: false,
            selectedCity: {
                id: "",
                name: "",
                img: "",
                posts: []
            }
        };
    }
  

    
    componentDidMount() {
        CityModel.all()
        .then((res) => {
            this.setState({
                cities: res.data
            })
        })
}

chooseCity = (event) => {
    console.log(event.target.id)
    this.setState({
        selectedCity: event.target.id
    });

    CityModel.getCity(event.target.id)
        .then((res) => {
            this.setState({
                selectedCity: {
                    id: res.data._id,
                    name: res.data.name,
                    img: res.data.picture,
                    posts: res.data.linkedPosts
                }
            })
        }).catch((err) => (console.log(err))
        )}

toggleModal = () => {
    console.log("Uh, hit me.")
    let evilstate = !this.state.modal
    this.setState({
    modal : evilstate
    })
}

createCityList() {
    let list = this.state.cities.map((city, key) =>
        <CityListItem key={key} handleClick={this.chooseCity} name={city.name} cityId={city._id} img={city.picture} />
    );
    return list;
}
    render() { 
        //const toggleModal = () => setModal(!modal); this is how it worked in the other file

        
        
        return (
                <Row>
                    <Col className="city-col" md="4">
                        <Card className = 'CardCities'>
                            <CardBody>
                                <CardTitle className='CardTitle'><h4>Cities</h4></CardTitle>
                                {this.createCityList()}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="city-col" md="8">
                        <CityDetail toggleModal={this.toggleModal} name={this.state.selectedCity.name} src={this.state.selectedCity.img}/>
                    </Col>
                    <PostModal toggle={this.toggleModal} toggleState={this.state.modal} userId={this.props.currentUser}/>
                </Row>

                
        );
    }
}
 
export default Cities;
