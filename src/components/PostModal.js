import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const PostModal = (props) => {
    return (
        <div>
            <Modal centered={true} isOpen={props.toggleState} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Login</ModalHeader>
                <ModalBody>
                    Login form stuff
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default PostModal;
