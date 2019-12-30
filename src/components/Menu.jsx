import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  MenuNavbar,
  MenuLink
} from "./Menu.style";

export class Menu extends React.PureComponent {
	render() {
		return (
			<MenuNavbar variant="dark" expand="md">
  				<Navbar.Brand>
            <MenuLink to="/">Haas & Milan</MenuLink>
          </Navbar.Brand>
  				<MenuNavbar.Toggle />
  				<MenuNavbar.Collapse>
    				<Nav className="mr-auto"/>
            <Nav>
              <Nav.Link as="div">
                <MenuLink to="/about">About</MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink to="/schedules">Schedules</MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink to="/settings">Settings</MenuLink>
              </Nav.Link>
            </Nav>
  				</MenuNavbar.Collapse>
			</MenuNavbar>
		);
	}
}