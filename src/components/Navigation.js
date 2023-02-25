import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="dark" className="mb-5" dark {...args}>
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
          <UncontrolledDropdown nav inNavbar dark>
              <DropdownToggle caret>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/events/admin">Event Manager</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;