import React, {Component} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PostForm from './PostForm'


class PostModal extends Component {
   
    
   


    render() {
        return (
            <div>
                <Modal centered={true} isOpen={this.props.toggleState} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>New Post</ModalHeader>
                    <ModalBody>
                        <PostForm userId={this.props.userId}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default PostModal;
