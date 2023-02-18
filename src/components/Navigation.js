import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="dark" dark {...args}>
        <NavbarBrand href="/">Event Calendar App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem >
              <NavLink tag={RRNavLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem >
              <NavLink tag={RRNavLink} to="/events">Events</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;