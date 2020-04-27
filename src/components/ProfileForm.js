import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  };

  //updates component state as it is updated in form
  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
    console.log(this.state.name);
  }

  //takes component state and sends it to the update function
  onSubmit = (event) => {
    event.preventDefault();
    const name = String(this.state.name);
    this.props.updateProfile(name);
    this.setState({ name: '' });
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
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

// copy the input later for city

export default ProfileForm;