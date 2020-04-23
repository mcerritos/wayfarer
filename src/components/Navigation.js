import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, NavbarToggler} from 'reactstrap';

const Navigation = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);      

        return ( 
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Wayfarer</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/cities/">Cities</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/profile/">Profile</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        );
}
 
export default Navigation;