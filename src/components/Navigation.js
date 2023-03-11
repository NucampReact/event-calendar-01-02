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
import { useSelector } from 'react-redux';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const myCart = useSelector(state => state.myCart);

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
          <UncontrolledDropdown nav>
              <DropdownToggle caret>
                My Cart ({myCart.length})
              </DropdownToggle>
              <DropdownMenu flip>
                {myCart.map(cartItem => {
                  return <DropdownItem>{cartItem.name}: {cartItem.quantity}</DropdownItem>
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown nav>
              <DropdownToggle caret>
                Admin
              </DropdownToggle>
              <DropdownMenu flip>
                <Link to="/events/admin">
                  <DropdownItem>Event Manager</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;