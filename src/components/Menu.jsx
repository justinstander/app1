import React,{ useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  MenuNavbar,
  MenuLink
} from "./Menu.style";

/**
 * Navigation Menu
 */
export const Menu = (props) => {
  const [expanded, setExpanded] = useState(false);

  const menuLinkOnClick = (event) => {
    setExpanded(false);
  }

  return (
      <MenuNavbar
        bg="dark"
        variant="dark"
        expand="md"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)} >
          <Navbar.Brand>
            <MenuLink
              to="/"
              onClick={menuLinkOnClick}>
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
                  onClick={menuLinkOnClick}>
                  Search
                </MenuLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MenuLink
                  to="/about"
                  onClick={menuLinkOnClick}>
                  About
                </MenuLink>
              </Nav.Link>
            </Nav>
          </MenuNavbar.Collapse>
      </MenuNavbar>
    );
}
