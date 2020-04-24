  
import React, { Component } from 'react'
import UserModel from '../models/user'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


class Register extends Component {
  state = {
    // store the default values for the fields in the register form
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  // handles changes made to the form fields: handleChange()
  handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  // handles submit event when the user submits the form: handleSubmit()
  handleSubmit = (event) => {
    // stop the default form event from firing
    event.preventDefault()
    // make an axios call to the API register route
    UserModel.create(this.state)
      .then(res => {
        this.setState({
          name: '',
          email: '',
          password: '',
          password2: ''
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <Modal centered={true} isOpen={this.props.toggleState} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Register</ModalHeader>

            <ModalBody>
              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" 
                      type="text" id="name" name="name" value={this.state.name}/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Password</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                </div>

                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
                </div>

                <button className="btn btn-primary float-right" type="submit" data-dismiss="modal">Register</button>
              </form>

            </ModalBody>
        </Modal>
    );
  }
}

export default Register;