import React, {Component} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import UserModel from '../models/user'


class LoginModal extends Component {
    state = {
        email: '',
        password: '',
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
          .then((res) => {
            this.props.setCurrentUser(res.data.data)
            //this.props.setdbId(res.data._id)
            //const returnedId = this.props.getdbId()
            const returnedId = this.props.getCurrentUser()
            console.log(`This is the current dbid ${returnedId} `)
          })
          .catch((err) => console.log(err))
      }

        render() {
    return (
        <div>
            <Modal centered={true} isOpen={this.props.toggleState} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
                <ModalBody>
                    <div className="container mt-4">
                        <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h4 className="mb-3">Login</h4>
                            <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input onChange={this.handleChange} className="form-control form-control-lg" 
                                type="email" id="email" name="email" value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={this.handleChange} className="form-control form-control-lg" 
                                type="password" id="password" name="password" value={this.state.password} />
                            </div>
                            <button className="btn btn-primary float-right" type="submit" onClick={this.props.toggle}>Login</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Submit</Button>
                </ModalFooter>

            </Modal>
        </div>
    )
}
}

export default LoginModal;
