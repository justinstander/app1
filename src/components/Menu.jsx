import React from "react";

import {
  MenuNavbar,
  MenuNav,
  MenuNavDropdown
} from "./Menu.style";

export class Menu extends React.PureComponent {
	render() {
		return (
			<MenuNavbar expand="lg">
  				<MenuNavbar.Brand href="/">Haas & Milan</MenuNavbar.Brand>
  				<MenuNavbar.Toggle />
  				<MenuNavbar.Collapse>
    				<MenuNav className="mr-auto">
      					<MenuNav.Link href="/">Home</MenuNav.Link>
      					<MenuNav.Link href="/about">About</MenuNav.Link>
      					<MenuNavDropdown title="Dropdown">
        					<MenuNavDropdown.Item href="/">Action</MenuNavDropdown.Item>
        					<MenuNavDropdown.Item href="/about">Another action</MenuNavDropdown.Item>
        					<MenuNavDropdown.Item href="/">Something</MenuNavDropdown.Item>
        					<MenuNavDropdown.Divider />
        					<MenuNavDropdown.Item href="/about">Separated link</MenuNavDropdown.Item>
      					</MenuNavDropdown>
    				</MenuNav>
  				</MenuNavbar.Collapse>
			</MenuNavbar>
		);
	}
}