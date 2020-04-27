import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      city:''
    };
  };

  //updates component state as it is updated in form
  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
  }

  //takes component state and sends it to the update function
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const city = this.state.city;
    this.props.updateProfile(name, city);
    this.props.toggleBodyForm();
  };

  render() {
    return (
      <div style={this.props.style} className='profileForm'>
        <form onSubmit={ this.onSubmit }>
        <label> Name: </label>
          <input
            name="name" 
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            type='text' /> 
          <label> City: </label>
          <input
            name="city" 
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            type='text' /> 
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

// copy the input later for city

export default ProfileForm;