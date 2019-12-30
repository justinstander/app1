import {
  Link
} from 'react-router-dom';

import styled from "styled-components";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MenuNavbar = styled(Navbar)`
  width: 100%;
`;

export const MenuNav = styled(Nav)`

`;

export const MenuNavDropdown = styled(NavDropdown)`
  
`;

export const MenuBrand = styled(Navbar.Brand)`
`;

export const MenuLink = styled(Link)`
	color: rgba(255,255,255,.5);
	&:hover {
		color: rgba(255,255,255);
		text-decoration: none;
	}
	display: block;
    padding: .5rem .5rem 1rem .5rem;
`;