import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  MenuNavbar,
  MenuLink
} from "./Menu.style";

export class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {expanded: false};

    this.toggleOnClick = this.toggleOnClick.bind(this);
    this.closeOnClick = this.closeOnClick.bind(this);
  }

  toggleOnClick(event) {
    this.setState({expanded:!this.state.expanded});
  }

  closeOnClick(event) {
    this.setState({expanded:false});
  }

	render() {
		return (
			<MenuNavbar expanded={this.state.expanded} bg="dark" variant="dark" expand="md" fixed="top">
          <Navbar.Brand>
            <MenuLink to="/" onClick={this.closeOnClick}>
              Haas & Milan
            </MenuLink>
          </Navbar.Brand>
  				<MenuNavbar.Toggle onClick={this.toggleOnClick}/>
  				<MenuNavbar.Collapse>
          <Nav className="mr-auto"/>
            <Nav>
              <Nav.Link as="div">
                <MenuLink to="/search" onClick={this.toggleOnClick}>
                  Search
                </MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink to="/schedules" onClick={this.toggleOnClick}>
                  Schedules
                </MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink to="/settings" onClick={this.toggleOnClick}>
                  Settings
                </MenuLink>
              </Nav.Link>
            </Nav>
  				</MenuNavbar.Collapse>
			</MenuNavbar>
		);
	}
}