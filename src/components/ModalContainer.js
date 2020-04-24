import React, { Component } from 'react'
import LoginModal from './LoginModal'
import Register from './Register'



export default class ModalContainer extends Component {
    render() {
        return (
            <div>
                 { props.currentUser ?
                        <>
                            <LoginModal currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}
                 toggle={toggleModal} toggleState={modal}/>
                        </>
                        :
                        <>
                           <Register/>
                        </>
                    }
            </div>
        )
    }
}
