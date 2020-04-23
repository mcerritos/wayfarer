import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap';

import LoginModal from './LoginModal.js';

const Navigation = (props) => {

        const [isOpen, setIsOpen] = useState(false);
        const toggleNav = () => setIsOpen(!isOpen);

        const [modal, setModal] = useState(false);
        const toggleModal = () => setModal(!modal);

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
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggleModal}>Login</NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
                </Collapse>
                <LoginModal toggle={toggleModal} toggleState={modal}/>
            </Navbar>
        );
}
 
export default Navigation;