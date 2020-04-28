import React, { Component } from 'react';
import axios from 'axios';
import PostModel from '../models/posts';


export default class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
                title: '',
                city: '',
                content: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let newPost = {
            title: this.state.title,
            author: this.props.userId,
            content: this.state.content
        }

        console.log(newPost);

        PostModel.create(newPost);
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
                                    name="title" 
                                    value={this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Content</label>
                                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" name="content" value={this.state.content} />
                            </div>
                            <button className="btn btn-primary float-right" type="submit" onClick={this.handleSubmit}>Submit</button>
                        </form>
                        <div>
                            {this.state.author}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
