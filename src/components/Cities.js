import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import '../styles/cities.css';
import CityModel from '../models/cities.js';
import PostModel from '../models/posts.js';
import PostModal from './PostModal.js';



import CityListItem from '../components/CityListItem.js';
import CityDetail from '../components/CityDetail.js';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            modal: false,
            cityPicked: false,
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
                    },
                    cityPicked: true
                })
            })
            .catch((err) => (console.log(err)))

        PostModel.getCityPosts(event.target.id)
            .then((res) => {
                let selectedCityCopy = JSON.parse(JSON.stringify(this.state.selectedCity))
                selectedCityCopy.posts = res.data
                this.setState({
                    selectedCity: selectedCityCopy
                })
            })
            .catch((err) => (console.log(err)))
    }

    toggleModal = () => {
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

    createPostList() {

        if (this.state.selectedCity.posts == undefined) {
            return;
        } else {
            let list = this.state.selectedCity.posts.map((post) =>
            <>
                <Card id={post._id}>
                    <CardBody>
                        <CardTitle> <h4>{post.title}</h4> </CardTitle>
                        <CardText> {post.content} </CardText>
                        <Link to={`/post/${post._id}`}>See More?</Link>
                    </CardBody>
                </Card>
                <br />
            </>
            );
    
            return list;
        }
    }

    render() { 
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
                        {this.state.cityPicked ?
                            <CityDetail cityPosts={this.createPostList()} toggleModal={this.toggleModal} name={this.state.selectedCity.name} src={this.state.selectedCity.img}/>
                        :
                            <div></div>
                        }
                    </Col>
                    <PostModal cityid={this.state.selectedCity.id} toggle={this.toggleModal} toggleState={this.state.modal} userId={this.props.currentUser}/>
                </Row>
        );
    }
}
 
export default Cities;
