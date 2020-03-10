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

    this.menuLinkOnClick = this.menuLinkOnClick.bind(this);
    this.menuNavbarOnToggle = this.menuNavbarOnToggle.bind(this);
  }

  menuLinkOnClick(event) {
    this.setState({expanded: false});
  }

  menuNavbarOnToggle(event) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <MenuNavbar
        bg="dark"
        variant="dark"
        expand="md"
        fixed="top"
        expanded={this.state.expanded}
        onToggle={this.menuNavbarOnToggle} >
          <Navbar.Brand>
            <MenuLink
              to="/"
              onClick={this.menuLinkOnClick}>
              Haas & Milan
            </MenuLink>
          </Navbar.Brand>
          <MenuNavbar.Toggle/>
          <MenuNavbar.Collapse>
            <Nav className="mr-auto"/>
            <Nav>
              <Nav.Link as="div">
                <MenuLink
                  to="/search"
                  onClick={this.menuLinkOnClick}>
                  Search
                </MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink
                  to="/about"
                  onClick={this.menuLinkOnClick}>
                  About
                </MenuLink>
              </Nav.Link>
            </Nav>
          </MenuNavbar.Collapse>
      </MenuNavbar>
    );
  }
}