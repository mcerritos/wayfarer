import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap';

import LoginModal from './LoginModal.js';
import Register from './Register'

const Navigation = (props) => {

        const [isOpen, setIsOpen] = useState(false);
        const toggleNav = () => setIsOpen(!isOpen);

        // variable that stores modal state
        const [modal, setModal] = useState(false);
        const toggleModal = () => setModal(!modal);

        const [registerModal, setRegisterModal] = useState(false);
        const toggleRegisterModal = () => setRegisterModal(!registerModal);

        return ( 
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Wayfarer</NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/cities">Cities</NavLink>
                    </NavItem>
                    { props.currentUser ?
                        <>
                            <NavItem>
                                <NavLink href="/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={props.logout}>Logout</NavLink>
                            </NavItem>
                        </>
                        :
                        <>
                            <NavItem>
                                <NavLink onClick={toggleRegisterModal} >Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggleModal} >Login</NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
                </Collapse>

                <LoginModal currentUser={props.currentUser} getCurrentUser={props.getCurrentUser} setCurrentUser={props.setCurrentUser}
                 toggle={toggleModal} toggleState={modal} />

                 <Register  currentUser={props.currentUser} getCurrentUser={props.getCurrentUser} setCurrentUser={props.setCurrentUser}
                 toggle={toggleRegisterModal} toggleState={registerModal} />
            </Navbar>
        );
}
 
export default Navigation;
