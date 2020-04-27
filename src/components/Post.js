import React, { Component } from 'react';
import axios from 'axios';
// import PostModel from '../models/posts';


export default class Post extends Component {

    constructor() {
        super();

    this.state = {
        posts: {
            title: '',
            author: '',
            city: '',
            content: '',
        }
    }
}

    handleChange = (event) => {
        console.log(event)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.get('http://localhost:3000/api/v1/posts', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4 className="mb-3">Posts</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Title</label>
                                <input 
                                    onChange={this.handleChange} 
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Content</label>
                                <input onChange={this.handleChange} className="form-control form-control-lg" type="content" id="content" name="content" value={this.state.content} />
                            </div>
                            <button className="btn btn-primary float-right" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
