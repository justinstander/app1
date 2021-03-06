import {
  Link
} from "react-router-dom";

import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";

/**
 * Styled Bootstrap Navbar
 * @type {Navbar}
 */
export const MenuNavbar = styled(Navbar)`
  width: 100%;
`;

/**
 * Styled React Router Link
 * @type {Link}
 */
export const MenuLink = styled(Link)`
	display: block;
	width: 100%;
	color: inherit;
	&:hover {
		color: inherit;
		text-decoration: none;
	}
`;